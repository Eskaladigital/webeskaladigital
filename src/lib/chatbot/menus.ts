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
