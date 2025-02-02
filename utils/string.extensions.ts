interface String {
  truncate(limit?: number, fillString?: string): string
  toJapanFormatDate(): string
  toFormatDate(): string
}

String.prototype.truncate = function (limit?: number, fillString?: string): string {
  let replaceString = fillString ?? '...'
  let maxLength = limit ?? this.length - 3
  return this.length > maxLength ? this.substring(0, maxLength) + replaceString : this.toString()
}

String.prototype.toJapanFormatDate = function (): string {
  const cleardate = this.split(' ')[0]
  if (cleardate?.length >= 1) {
    const splitDate = cleardate.split('-')
    const year = splitDate[0]
    const month = splitDate[1]
    const day = splitDate[2]
    return `${year}年${month}月${day}日`
  } else {
    return '-'
  }
}

String.prototype.toFormatDate = function (): string {
  const dateObj = new Date(this.toString())
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return `${year}/${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }`
}