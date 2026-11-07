export function useWhatsApp() {
  const config = useRuntimeConfig()
  const number = String(config.public.whatsappNumber || '').replace(/\D/g, '')

  function link(message: string) {
    if (!number) return '/contact'
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

  function orderLink(bookTitle: string) {
    return link(`Bonjour Lyncra Books, je souhaite commander le livre « ${bookTitle} ». Pouvez-vous me renseigner sur sa disponibilité et son prix ?`)
  }

  return { number, link, orderLink }
}
