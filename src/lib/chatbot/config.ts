export const CHATBOT_EMBEDDING_MODEL = 'text-embedding-3-small' as const
export const CHATBOT_EMBEDDING_DIMENSIONS = 1536

export function getChatbotModel(): string {
  return process.env.OPENAI_CHATBOT_MODEL?.trim() || 'gpt-5.6-terra'
}

export function getChatbotAssistantName(): string {
  return process.env.CHATBOT_ASSISTANT_NAME?.trim() || 'Nora'
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.eskaladigital.com'

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME?.trim() || 'ESKALA Marketing Digital'

export const CONTACT_EMAIL = 'contacto@eskaladigital.com'
export const CONTACT_PHONE = '+34 626 82 34 04'
export const CONTACT_PHONE_TEL = '+34626823404'

export const CHATBOT_TEMPERATURE = 0.55
export const CHATBOT_RAG_MATCH_COUNT = 8
export const CHATBOT_HISTORY_LIMIT = 20
export const CHATBOT_MAX_TOKENS = 900

export type ResponseQuality = 'correcta' | 'mejorable' | 'incorrecta' | 'sin_tipo'
export type ConversationStatus = 'open' | 'closed' | 'archived'
