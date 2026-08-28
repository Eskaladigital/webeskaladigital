'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft, MessageCircle, RefreshCw, Send, X } from 'lucide-react'
import {
  placeholder,
  topicMenus,
  welcomeMessage,
  type MenuItem,
} from '@/lib/chatbot/menus'
import { isInternalEskalaUrl, renderChatMarkdown } from '@/lib/chatbot/markdown'
import styles from './ChatWidget.module.css'

const ASSISTANT_NAME = process.env.NEXT_PUBLIC_CHATBOT_ASSISTANT_NAME?.trim() || 'Nora'
const STORAGE_SESSION = 'eskala_chat_session_id'
const STORAGE_CONV = 'eskala_chat_conversation_id'
const STORAGE_MESSAGES = 'eskala_chat_messages'

type ChatMsg = { id: string; role: 'user' | 'assistant'; content: string }

function genSessionId(): string {
  return `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function genMsgId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export default function ChatWidget() {
  const pathname = usePathname()
  const router = useRouter()
  const hidden = pathname.startsWith('/administrator')

  const [open, setOpen] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMsg[]>([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [menuLevel, setMenuLevel] = useState<MenuItem[] | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hidden) return
    const sid = localStorage.getItem(STORAGE_SESSION) || genSessionId()
    localStorage.setItem(STORAGE_SESSION, sid)
    setSessionId(sid)
    setConversationId(localStorage.getItem(STORAGE_CONV))
    // Molde Andrea: el hilo se restaura; el panel no. Al entrar a la página siempre se ve el icono.
    setOpen(false)
    try {
      const saved = localStorage.getItem(STORAGE_MESSAGES)
      if (saved) setMessages(JSON.parse(saved))
      else setMessages([{ id: 'welcome', role: 'assistant', content: welcomeMessage }])
    } catch {
      setMessages([{ id: 'welcome', role: 'assistant', content: welcomeMessage }])
    }
  }, [hidden])

  useEffect(() => {
    if (!hidden && messages.length) {
      localStorage.setItem(STORAGE_MESSAGES, JSON.stringify(messages))
    }
  }, [messages, hidden])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streaming])

  const persistOpen = (v: boolean) => {
    setOpen(v)
  }

  const refreshConversation = () => {
    setConversationId(null)
    localStorage.removeItem(STORAGE_CONV)
    setMessages([{ id: genMsgId(), role: 'assistant', content: welcomeMessage }])
    setMenuLevel(null)
    setInput('')
  }

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || streaming || !sessionId) return

      const userMsg: ChatMsg = { id: genMsgId(), role: 'user', content: trimmed }
      const assistantId = genMsgId()
      setMessages((m) => [...m, userMsg, { id: assistantId, role: 'assistant', content: '' }])
      setInput('')
      setMenuLevel(null)
      setStreaming(true)

      try {
        const res = await fetch('/api/chatbot/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            conversationId: conversationId ?? undefined,
            text: trimmed,
          }),
        })

        if (!res.ok || !res.body) {
          const err = await res.json().catch(() => ({}))
          throw new Error(err.error || 'Error de conexión')
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''
        let full = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            let evt: { type?: string; content?: string; conversationId?: string; error?: string }
            try {
              evt = JSON.parse(line.slice(6))
            } catch {
              continue
            }
            if (evt.type === 'token' && evt.content) {
              full += evt.content
              setMessages((m) =>
                m.map((msg) => (msg.id === assistantId ? { ...msg, content: full } : msg))
              )
            } else if (evt.type === 'done') {
              if (evt.conversationId) {
                setConversationId(evt.conversationId)
                localStorage.setItem(STORAGE_CONV, evt.conversationId)
              }
            } else if (evt.type === 'error') {
              throw new Error(evt.error)
            }
          }
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : 'Error'
        setMessages((m) =>
          m.map((x) =>
            x.id === assistantId
              ? {
                  ...x,
                  content: `Lo siento, ha ocurrido un error: ${msg}. Puedes escribir a contacto@eskaladigital.com o llamar al +34 626 82 34 04.`,
                }
              : x
          )
        )
      } finally {
        setStreaming(false)
      }
    },
    [conversationId, sessionId, streaming]
  )

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a')
    if (!target) return
    const href = target.getAttribute('href')
    if (!href) return
    if (isInternalEskalaUrl(href)) {
      e.preventDefault()
      const path = href.startsWith('http') ? new URL(href).pathname : href
      // En móvil el panel cubre toda la pantalla: si no se cierra, parece que el enlace no ha hecho nada.
      if (typeof window !== 'undefined' && !window.matchMedia('(min-width: 640px)').matches) {
        persistOpen(false)
      }
      router.push(path)
    }
  }

  if (hidden) return null

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => persistOpen(true)}
          className={styles.fab}
          aria-label="Abrir chat de ESKALA"
        >
          <MessageCircle className={styles.fabIcon} />
          <span className={styles.fabLabel}>Chat ESKALA</span>
        </button>
      )}

      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <div>
              <p className={styles.headerTitle}>{ASSISTANT_NAME} · ESKALA</p>
              <p className={styles.headerSub}>Marketing digital en Murcia</p>
            </div>
            <div className={styles.headerActions}>
              <button type="button" onClick={refreshConversation} className={styles.iconBtn} title="Nueva conversación">
                <RefreshCw className={styles.icon} />
              </button>
              <button type="button" onClick={() => persistOpen(false)} className={styles.iconBtn} aria-label="Cerrar">
                <X className={styles.iconLg} />
              </button>
            </div>
          </div>

          <div className={`${styles.messages} chat-markdown`} onClick={handleLinkClick}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={msg.role === 'user' ? styles.rowUser : styles.rowBot}
              >
                <div className={msg.role === 'user' ? styles.bubbleUser : styles.bubbleBot}>
                  {msg.role === 'assistant' ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: renderChatMarkdown(msg.content || (streaming ? '…' : '')),
                      }}
                    />
                  ) : (
                    <span>{msg.content}</span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {!streaming && (
            <div className={styles.menus}>
              {menuLevel ? (
                <div>
                  <button
                    type="button"
                    className={styles.back}
                    onClick={() => setMenuLevel(null)}
                  >
                    <ChevronLeft className={styles.iconSm} /> Volver
                  </button>
                  <div className={styles.chips}>
                    {menuLevel.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={styles.chipActive}
                        onClick={() => {
                          if (item.message) sendMessage(item.message)
                          else if (item.children) setMenuLevel(item.children)
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.chips}>
                  {topicMenus.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={styles.chip}
                      onClick={() => {
                        if (t.message) sendMessage(t.message)
                        else if (t.children) setMenuLevel(t.children)
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={styles.composer}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage(input)
                }
              }}
              placeholder={placeholder}
              rows={1}
              className={styles.input}
              disabled={streaming}
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={streaming || !input.trim()}
              className={styles.send}
              aria-label="Enviar"
            >
              <Send className={styles.iconLg} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
