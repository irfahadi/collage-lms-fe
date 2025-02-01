export function formatDateIndonesian(dateString: string): string {
  const months: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]

  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export function formatDateRange(startDate: string, endDate: string): string {
  const formattedStartDate = formatDateIndonesian(startDate)
  const formattedEndDate = formatDateIndonesian(endDate)
  return `${formattedStartDate} - ${formattedEndDate}`
}
