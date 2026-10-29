export type MenuItem = { id: string; label: string; message?: string; children?: MenuItem[] }

export const topicMenus: MenuItem[] = [
  {
    id: 'web',
    label: 'Diseño web',
    message: '¿Qué incluye vuestro servicio de diseño web en Murcia?',
  },
  {
    id: 'seo',
    label: 'SEO local',
    message: '¿Cómo trabajáis el SEO local para un negocio en Murcia?',
  },
  {
    id: 'rrss',
    label: 'Redes sociales',
    message: '¿Qué hacéis en gestión de redes sociales?',
  },
  {
    id: 'ads',
    label: 'Google Ads',
    message: '¿Cómo gestionáis las campañas de Google Ads?',
  },
  {
    id: 'ia',
    label: 'IA y chatbots',
    children: [
      {
        id: 'ia1',
        label: 'Apps con IA',
        message: '¿Qué tipo de aplicaciones con IA desarrolláis?',
      },
      {
        id: 'ia2',
        label: 'Chatbots',
        message: '¿Hacéis chatbots para web o WhatsApp como este?',
      },
    ],
  },
  {
    id: 'marca',
    label: 'Branding y email',
    children: [
      {
        id: 'm1',
        label: 'Branding',
        message: '¿En qué consiste vuestro servicio de branding?',
      },
      {
        id: 'm2',
        label: 'Email marketing',
        message: '¿Qué incluye el email marketing de ESKALA?',
      },
    ],
  },
  {
    id: 'contacto',
    label: 'Contacto',
    message: '¿Cómo puedo contactar con ESKALA?',
  },
]

export const welcomeMessage =
  '¡Hola! Soy Nora, la asistente de ESKALA. Te cuento qué hacemos (web, SEO, redes, Ads, IA…) y lo que hay en el blog. Si quieres un presupuesto, te paso a contacto. ¿En qué te ayudo?'

export const placeholder = 'Escribe tu consulta…'

export const topicMenusEn: MenuItem[] = [
  { id: 'web', label: 'Web design', message: 'What does your web design service include?' },
  { id: 'seo', label: 'SEO', message: 'How does your SEO service work?' },
  { id: 'social', label: 'Social media', message: 'What does social media management include?' },
  { id: 'ads', label: 'Google Ads', message: 'How do you manage Google Ads campaigns?' },
  {
    id: 'ia',
    label: 'AI and chatbots',
    children: [
      { id: 'ia1', label: 'AI apps', message: 'What kind of AI apps do you build?' },
      { id: 'ia2', label: 'Chatbots', message: 'Do you build chatbots like this one for websites or WhatsApp?' },
    ],
  },
  {
    id: 'marca',
    label: 'Branding and email',
    children: [
      { id: 'br', label: 'Branding', message: 'What does your branding service include?' },
      { id: 'em', label: 'Email marketing', message: 'How does your email marketing service work?' },
    ],
  },
  { id: 'contacto', label: 'Contact', message: 'How can I get in touch with ESKALA?' },
]

export const welcomeMessageEn =
  'Hi! I am Nora, ESKALA’s assistant. I can tell you what we do (web design, SEO, social media, Ads, AI…) and point you to our work. If you want a quote, I will send you to the contact page. How can I help?'

export const placeholderEn = 'Type your question…'

export const LANG_PROMPT_EN = `
## Idioma de esta conversación
El visitante está en la web en inglés (/en). Responde SIEMPRE en inglés británico natural, salvo que te escriba en español.
Enlaza a las páginas inglesas: /en, /en/about, /en/methodology, /en/services, /en/services/web-design, /en/services/local-seo, /en/services/social-media, /en/services/google-ads, /en/services/ai-apps, /en/services/chatbots, /en/services/branding, /en/services/email-marketing, /en/portfolio, /en/success-stories, /en/contact.
El blog solo existe en español (/blog): si lo citas, avisa de que está en español.
Para presupuesto, la página es /en/contact.`
