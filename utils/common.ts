//check file type based url
export const checkFileType = (url: string) => {
  const splitUrl = url.split('.')
  const fileType = splitUrl[splitUrl.length - 1]
  return fileType
}

export const isIncludeHtmlTag = (text: string) => {
  const regex = /(<([^>]+)>)/gi
  return regex.test(text)
}

export const treatmentTitleLocale = (treatment: string) => {
  switch (treatment) {
    case 'Pending Visit':
      return 'pending_label'
    case 'Visited':
      return 'visited_label'
    case 'In Treatment':
      return 'in_treatment_label'
    case 'Waiting For Billing':
      return 'waiting_label'
    case 'Discharged':
      return 'discharged_label'
    case 'Canceled':
      return 'cancel_label'
    default:
      return ''
  }
}

export const convertHeicToJpg = async (file: any) => {
  try {
    const heic2any = require('heic2any')
    // Convert the HEIC file to a JPEG Blob using heic2any
    const convertedBlob: any = await heic2any({
      blob: file,
      toType: 'image/jpeg',
    })
    // Create a new File from the Blob
    const convertedFile = new File([convertedBlob], 'file.jpg', {
      type: 'image/jpeg',
    })
    return convertedFile
  } catch (error) {
    console.error('Conversion failed: ', error)
    throw error // Rethrow the error so it can be handled by the caller
  }
}

export const countAge = (dateOfBirth: string) => {
  if (!dateOfBirth) return ''
  let dob = new Date(dateOfBirth)

  if (!dateOfBirth || isNaN(dob.getTime())) {
    return '-'
  } else {
    let now = new Date()

    let yearAge = now.getFullYear() - dob.getFullYear()
    let monthAge: number

    if (now.getMonth() >= dob.getMonth()) {
      monthAge = now.getMonth() - dob.getMonth()
    } else {
      yearAge--
      monthAge = 12 + now.getMonth() - dob.getMonth()
    }

    let dateAge: number

    if (now.getDate() >= dob.getDate()) {
      dateAge = now.getDate() - dob.getDate()
    } else {
      monthAge--
      dateAge = 31 + now.getDate() - dob.getDate()

      if (monthAge < 0) {
        monthAge = 11
        yearAge--
      }
    }

    let ageString = ''

    if (yearAge > 0 && monthAge > 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge === 0 && dateAge > 0) {
      // only days
      ageString = `0y0m${dateAge}d`
    } else if (yearAge > 0 && monthAge === 0 && dateAge === 0) {
      // happy birthday
      ageString = `${yearAge}y${monthAge}m0d`
    } else if (yearAge > 0 && monthAge > 0 && dateAge === 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge > 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge > 0 && monthAge === 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge > 0 && dateAge === 0) {
      ageString = `0y${monthAge}m0d`
    } else {
      ageString = `0y0m0d`
    }
    return `(${ageString})`
  }
}

export const countAgeYearOnly = (dateOfBirth: string) => {
  if (!dateOfBirth) return ''
  let dob = new Date(dateOfBirth)

  if (!dateOfBirth || isNaN(dob.getTime())) {
    return '-'
  } else {
    let now = new Date()

    let yearAge = now.getFullYear() - dob.getFullYear()
    let monthAge: number

    if (now.getMonth() >= dob.getMonth()) {
      monthAge = now.getMonth() - dob.getMonth()
    } else {
      yearAge--
      monthAge = 12 + now.getMonth() - dob.getMonth()
    }

    let dateAge: number

    if (now.getDate() >= dob.getDate()) {
      dateAge = now.getDate() - dob.getDate()
    } else {
      monthAge--
      dateAge = 31 + now.getDate() - dob.getDate()

      if (monthAge < 0) {
        monthAge = 11
        yearAge--
      }
    }

    let ageString = ''

    if (yearAge > 0 && monthAge > 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge === 0 && dateAge > 0) {
      // only days
      ageString = `0y0m${dateAge}d`
    } else if (yearAge > 0 && monthAge === 0 && dateAge === 0) {
      // happy birthday
      ageString = `${yearAge}y${monthAge}m0d`
    } else if (yearAge > 0 && monthAge > 0 && dateAge === 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge > 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge > 0 && monthAge === 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge > 0 && dateAge === 0) {
      ageString = `0y${monthAge}m0d`
    } else {
      ageString = `0y0m0d`
    }
    return yearAge
  }
}

//count age based on date of birth ex: 9y2m
export const countAgeYearMonth = (startdate: string, enddate?: string) => {
  if (!startdate) return ''

  if (!enddate) return ''
  let dob = new Date(enddate)

  if (!enddate || isNaN(dob.getTime())) {
    return ''
  } else {
    let now = new Date(startdate)

    let yearAge = now.getFullYear() - dob.getFullYear()
    let monthAge: number

    if (now.getMonth() >= dob.getMonth()) {
      monthAge = now.getMonth() - dob.getMonth()
    } else {
      yearAge--
      monthAge = 12 + now.getMonth() - dob.getMonth()
    }

    let dateAge: number

    if (now.getDate() >= dob.getDate()) {
      dateAge = now.getDate() - dob.getDate()
    } else {
      monthAge--
      dateAge = 31 + now.getDate() - dob.getDate()

      if (monthAge < 0) {
        monthAge = 11
        yearAge--
      }
    }

    let ageString = ''

    if (yearAge > 0 && monthAge > 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge === 0 && dateAge > 0) {
      // only days
      ageString = `0y0m${dateAge}d`
    } else if (yearAge > 0 && monthAge === 0 && dateAge === 0) {
      // happy birthday
      ageString = `${yearAge}y${monthAge}m0d`
    } else if (yearAge > 0 && monthAge > 0 && dateAge === 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge > 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge > 0 && monthAge === 0 && dateAge > 0) {
      ageString = `${yearAge}y${monthAge}m${dateAge}d`
    } else if (yearAge === 0 && monthAge > 0 && dateAge === 0) {
      ageString = `0y${monthAge}m0d`
    } else {
      ageString = `0y0m0d`
    }
    return `(${ageString})`
  }
}

//japan date format
export const formatDateJapan = (date: string) => {
  const cleardate = date?.split(' ')[0]
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

export function fullWidthNumConvert(fullWidthNum: any) {
  return fullWidthNum
    ?.toString()
    ?.replace(/[\uFF10-\uFF19]/g, function (m: any) {
      return String.fromCharCode(m.charCodeAt(0) - 0xfee0)
    })
}

export const getDayInJapan = (givenDate: any) => {
  const options: any = { timeZone: 'Asia/Tokyo', weekday: 'long' }
  const japanDay = new Date(givenDate).toLocaleDateString('ja-JP', options)
  return japanDay[0]
}

export const showRelativeContactLabel = (type: number) => {
  switch (type) {
    case 1:
      return 'telephone'
    case 2:
      return 'home'
    case 3:
      return 'father'
    case 4:
      return 'mother'
    default:
      return 'etc'
  }
}

//calculate total + tax 10%
export const calculateTotal = (price: number) => {
  return price + Math.round(price * 0.1)
}

export const checkIsUUID = (uuid: string) => {
  // regex for uuid pattern
  const regex =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  return regex.test(uuid)
}

export const checkIsURL = (urlString: string) => {
  const regexQuery =
    '^(https?:\\/\\/)?((([-a-z0-9]{1,63}\\.)*?[a-z0-9]([-a-z0-9]{0,253}[a-z0-9])?\\.[a-z]{2,63})|((\\d{1,3}\\.){3}\\d{1,3}))(:\\d{1,5})?((\\/|\\?)((%[0-9a-f]{2})|[-\\w\\+\\.\\?\\/@~#&=])*)?$'
  return new RegExp(regexQuery, 'i').test(urlString)
}

export const formatNumber = (number: number) =>
  new Intl.NumberFormat('ja-JP').format(number)

export function base64ToBlob(base64Image: string) {
  var byteString = atob(base64Image.split(',')[1])
  var mimeString = base64Image.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: mimeString })
}

export function numberToWord(number: number) {
  switch (number) {
    case 10000:
      return 'ten_thousand'
    case 5000:
      return 'five_thousand'
    case 2000:
      return 'two_thousand'
    case 1000:
      return 'one_thousand'
    case 500:
      return 'five_hundred'
    case 100:
      return 'one_hundred'
    case 50:
      return 'fifty'
    case 10:
      return 'ten'
    case 5:
      return 'five'
    case 1:
      return 'one'
    default:
      break
  }
}

export const wordToNumber = (word: string) => {
  switch (word) {
    case 'ten_thousand':
      return 10000
    case 'five_thousand':
      return 5000
    case 'two_thousand':
      return 2000
    case 'one_thousand':
      return 1000
    case 'five_hundred':
      return 500
    case 'one_hundred':
      return 100
    case 'fifty':
      return 50
    case 'ten':
      return 10
    case 'five':
      return 5
    case 'one':
      return 1
    default:
      break
  }
}

export const setColor = (value: number) => {
  const isMinus = value < 0
  const isPlus = value > 0
  if (isMinus) {
    return '#F44336'
  } else if (isPlus) {
    return '#43A047'
  } else {
    return 'black'
  }
}
