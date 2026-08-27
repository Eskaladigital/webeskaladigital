export const CHATBOT_EMBEDDING_MODEL = 'text-embedding-3-small' as const
export const CHATBOT_EMBEDDING_DIMENSIONS = 1536

export function getChatbotModel(): string {
  return process.env.OPENAI_CHATBOT_MODEL?.trim() || 'gpt-5.6-terra'
}

export function getChatbotAssistantName(): string {
  return process.env.CHATBOT_ASSISTANT_NAME?.trim() || 'Nora'
}

export {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from '@/lib/site'

export const CHATBOT_TEMPERATURE = 0.55
export const CHATBOT_RAG_MATCH_COUNT = 8
export const CHATBOT_HISTORY_LIMIT = 20
export const CHATBOT_MAX_TOKENS = 900

export type ResponseQuality = 'correcta' | 'mejorable' | 'incorrecta' | 'sin_tipo'
export type ConversationStatus = 'open' | 'closed' | 'archived'

/** Nota de conversación = media de respuestas clasificadas. No se califica el hilo entero. */
export const RESPONSE_QUALITY_SCORE: Record<Exclude<ResponseQuality, 'sin_tipo'>, number> = {
  correcta: 10,
  mejorable: 5,
  incorrecta: 0,
}
