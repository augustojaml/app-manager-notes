export const formatDateTimeBR = (date: string) => {
  const parseDate = new Date(date)

  if (isNaN(parseDate.getTime())) {
    return 'Data inválida'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(parseDate)
}
