# Contacto: formulario + canales directos

El 26 ago se quitó el formulario (simulaba el envío) y se dejaron tarjetas. El 27 ago vuelve el form, **cableado de verdad**:

- Layout tipo GVC Abogados: info a la izquierda, formulario a la derecha.
- Particular / empresa, servicio, origen, GDPR.
- Fila en `contact_submissions` (Supabase `yivdoyjjcwvevznwzrph`) + par de correos SMTP OVH + listado `/administrator/contactos`.
- Las tarjetas (mail, WhatsApp, teléfono) y Nora se quedan como canales, no sustituyen al lead.

Código: `ContactForm.tsx`, `src/app/api/contact/route.ts`, `src/lib/email.ts`.
