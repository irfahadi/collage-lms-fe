export type Doctor = {
  data: DoctorData[];
}

export type DoctorData = {
  id:                 number;
  doctor_kanji:       string;
  doctor_furigana:    string;
  color:              string;
  doctor_displayname: string;
  mail_address:       string;
  registration_date:  string;
  created_at:         string;
}

const doctorDataDummy: DoctorData[] = [
  {
    id: 1,
    doctor_kanji: "田中太郎",
    doctor_furigana: "たなかたろう",
    color: "#9747FF",
    doctor_displayname: "Tanaka",
    mail_address: "Doctor1@gmail.com",
    registration_date: "4/15/2022",
    created_at: "023-07-26T06:06:55.000000Z"
  },
  {
    id: 2,
    doctor_kanji: "田中太郎",
    doctor_furigana: "たなかたろう",
    color: "#FF0000",
    doctor_displayname: "Tanaka",
    mail_address: "Doctor1@gmail.com",
    registration_date: "4/15/2022",
    created_at: "023-07-26T06:06:55.000000Z"
  },
  {
    id: 3,
    doctor_kanji: "田中太郎",
    doctor_furigana: "たなかたろう",
    color: "#9747FF",
    doctor_displayname: "Tanaka",
    mail_address: "Doctor1@gmail.com",
    registration_date: "4/15/2022",
    created_at: "023-07-26T06:06:55.000000Z"
  },
  {
    id: 4,
    doctor_kanji: "田中太郎",
    doctor_furigana: "たなかたろう",
    color: "#FF0000",
    doctor_displayname: "Tanaka",
    mail_address: "Doctor1@gmail.com",
    registration_date: "4/15/2022",
    created_at: "023-07-26T06:06:55.000000Z"
  },
  {
    id: 5,
    doctor_kanji: "田中太郎",
    doctor_furigana: "たなかたろう",
    color: "#9747FF",
    doctor_displayname: "Tanaka",
    mail_address: "Doctor1@gmail.com",
    registration_date: "4/15/2022",
    created_at: "023-07-26T06:06:55.000000Z"
  },
]

export const doctorDummy: Doctor = {
  data: doctorDataDummy
}
