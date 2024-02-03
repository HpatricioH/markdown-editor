export default function Date () {
  const date: globalThis.Date = new globalThis.Date()
  const year = date.getFullYear()
  const month = date.toLocaleString('en', { month: 'short' })
  const day = date.getDate()

  return `${day} ${month} ${year}`
}
