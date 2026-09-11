# Integrações — Sprint 001

Este documento descreve o que já está preparado e o que ainda depende de credencial ou decisão comercial.

## WhatsApp

Número comercial centralizado em `src/config/commercial.ts` (`WHATSAPP_CONFIG.e164`).

O site usa `https://wa.me/{e164}` via `src/lib/whatsapp.ts`. Mensagens são contextualizadas (orçamento, plano, BuilderCare, formulário).

Não espalhe o número em componentes.

## Instagram

Handle comercial: `@buildertudo.technologies`  
URL: `https://www.instagram.com/buildertudo.technologies/`

Aparece no rodapé. Feed incorporado não foi adicionado nesta Sprint.

## Formulário

Arquivos:

- `src/components/forms/ContactForm.tsx`
- `src/lib/contactForm.ts`

Estados: validação, loading, sucesso e erro.

Comportamento atual:

1. Valida os campos.
2. Se `VITE_FORM_ENDPOINT` existir, envia `POST` JSON.
3. Abre o WhatsApp com o briefing.
4. Mostra sucesso honesto: continuidade no WhatsApp. Se o endpoint existir, informa que a solicitação também foi recebida.

`VITE_RESEND_API_URL` e `VITE_SUPABASE_*` sinalizam infraestrutura futura, mas o envio real desta Sprint usa o endpoint HTTP ou o WhatsApp.

Não há backend de e-mail no repositório.

## Analytics e ads

Não inserir IDs até existirem contas oficiais.

| Variável | Uso |
| --- | --- |
| `VITE_GA4_ID` | Google Analytics 4 |
| `VITE_GTM_ID` | Google Tag Manager (quando preenchido, o GA4 direto é ignorado) |
| `VITE_META_PIXEL_ID` | Meta Pixel |
| `VITE_GOOGLE_ADS_ID` | Google Ads (`gtag config`) |
| `VITE_CLARITY_ID` | Microsoft Clarity |

Eventos conceituais já disparados no código:

- `click_whatsapp`
- `click_quote`
- `select_plan`
- `submit_lead`
- `view_portfolio`

Também permanece `generate_lead` no envio do formulário, para compatibilidade.

## Pendências externas

- Confirmar se o Instagram oficial é exatamente `@buildertudo.technologies`.
- Confirmar se o WhatsApp `5579999348812` continua sendo o número comercial único.
- IDs de GA4, GTM, Meta Pixel, Google Ads e Clarity.
- Endpoint de formulário (Resend, Supabase ou outro).
- Planos de assinatura do BuilderCare (estrutura pronta, valores e SLAs ainda não definidos).
- Cases de clientes externos (hoje o portfólio mostra apenas projetos internos da BuilderTudo).
- Textos e prazos comerciais mais específicos, se o time quiser publicá-los.
