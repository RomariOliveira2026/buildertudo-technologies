import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { buildWhatsAppUrl, trackWhatsAppClick, type WhatsAppContext } from '../../lib/whatsapp'

type WhatsAppAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  message: string
  context: WhatsAppContext | string
  children: ReactNode
}

export function WhatsAppAnchor({ message, context, children, onClick, className, ...props }: WhatsAppAnchorProps) {
  return (
    <a
      {...props}
      className={className}
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        trackWhatsAppClick(context)
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
