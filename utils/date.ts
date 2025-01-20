export function formatDateToYYYYMMDD(date: Date): string {
  const year = date?.getFullYear().toString().padStart(4, '0')
  const month = (date?.getMonth() + 1).toString().padStart(2, '0')
  const day = date?.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function isISOStringValid(date: Date | null): boolean {
  try {
    return !isNaN(Date.parse(date?.toISOString() as string))
  } catch (error) {
    return false
  }
}

export const formatDate = (date: string): string => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return `${year}/${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }`
}

export const handleDateChange = (value: Date | null, setDate: any) =>
  isISOStringValid(value)
    ? setDate(formatDateToYYYYMMDD(new Date(value?.toISOString() as string)))
    : setDate('')
