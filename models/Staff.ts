export type Staff = {
  data: StaffData[]
}

enum Role {
  DENTIST = 'dentist',
  DENTALHYGIENIST = 'dental hygienist',
}

export type StaffData = {
  id: number
  color: string
  staff_kanji: string
  staff_displayname: string
  role: string
}

const staffDataDummy: StaffData[] = [
  {
    id : 1,
    color : "#FF0000",
    staff_displayname : "ソフィア",
    staff_kanji: 'ソフィア',
    role : "Dental Hygienist",
  },
  {
    id : 2,
    color : "#9747FF",
    staff_displayname : "ソフィア",
    staff_kanji: 'ソフィア',
    role : "Dental Hygienist",
  },
  {
    id : 3,
    color : "#9747FF",
    staff_displayname : "ソフィア",
    staff_kanji: 'ソフィア',
    role : "Dental Hygienist",
  },
  {
    id : 4,
    color : "#FF0000",
    staff_displayname : "ソフィア",
    staff_kanji: 'ソフィア',
    role : "Dental Hygienist",
  },
]

export const staffDummy: Staff = {
  data: staffDataDummy,
}
