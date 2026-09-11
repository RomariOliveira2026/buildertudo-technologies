# BuilderTudo Technologies

Site comercial da BuilderTudo Technologies: presença digital inteligente para empresas que querem vender mais.

O objetivo desta versão é gerar leads e pedidos de orçamento para criação de sites, landing pages e estruturas digitais.

Site publicado: [buildertudo.com](https://buildertudo.com)

## Stack

- React 19 + TypeScript + Vite
- React Router
- Framer Motion
- Deploy na Vercel (`vercel.json` preservado)

Não é necessário migrar de framework para operar esta Sprint.

## Desenvolvimento

```bash
npm install
npm run dev
npm run lint
npm run build
```

O idioma padrão é `pt-BR`. EN e ES continuam disponíveis no seletor.

## Conteúdo comercial centralizado

Altere estes arquivos quando preços, WhatsApp, Instagram, planos, FAQ ou portfólio mudarem:

| Dado | Arquivo |
| --- | --- |
| Preços, WhatsApp, Instagram, eventos de analytics | `src/config/commercial.ts` |
| Contato (e-mail, redes, wa.me) | `src/constants/contact.ts` |
| Planos, FAQ, portfólio, segmentos, processo | `src/data/commercial.ts` |
| Copy comercial | `src/i18n/locales/commercial.ts` |

## Formulário de leads

O formulário valida no cliente e, nesta Sprint, **conclui o contato pelo WhatsApp comercial**.

Para integrar um backend depois, configure `VITE_FORM_ENDPOINT` em `.env`. Enquanto essa variável estiver vazia, o site **não simula** envio de e-mail: o visitante é informado de que o próximo passo acontece no WhatsApp.

Variáveis relacionadas estão em `.env.example`.

## Analytics

Nenhum ID fictício foi inserido. Quando as contas oficiais existirem, preencha:

- `VITE_GA4_ID`
- `VITE_GTM_ID`
- `VITE_META_PIXEL_ID`
- `VITE_GOOGLE_ADS_ID`
- `VITE_CLARITY_ID`

Eventos já preparados:

- `click_whatsapp`
- `click_quote`
- `select_plan`
- `submit_lead`
- `view_portfolio`

Detalhes em `docs/integrations.md`.

## Páginas internas preservadas

A home comercial não apaga o ecossistema existente. Continuam acessíveis:

- `/framework`
- `/business-os`
- `/live`
- `/labs`
- `/cases`
- `/products/:slug`
- `/politica-de-privacidade`
- `/termos-de-uso`

Essas rotas aparecem no rodapé como tecnologia e projetos internos da BuilderTudo — não como clientes externos.
