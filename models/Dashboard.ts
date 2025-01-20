import { ClinicDataType } from './Clinic'
import { PatientRecord } from './Patients'

export type Dashboard = {
  code: number
  message: string
  data: DashboardData[]
  pagination: Pagination
}

export type DashboardData = {
  id: number
  patient_id: number
  clinic_id: number
  patient_number: string
  patient_kanji: string
  time_passed: string | null
  patient_furigana: string
  patient_romaji: string
  date_of_birth: string
  gender_id: number
  post_code: string
  prefectures_id: number
  address: string
  phone_number: string
  telephone_number: string
  line: string
  email: string
  invisalign: string
  invisalign_cc: string
  webceph: string
  face_photo: string
  memo: string
  created_at: string
  updated_at: string
  archieved_at: null
  label: Label[]
  record: Record | null
  title: string
  date_time: string
  aligner_replacement: AlignerReplacement
  clinic: ClinicDataType
  genie_patient_id: number | null
  patient: PatientRecord
}

export type Label = {
  colour: string
  name: string
  pivot: Pivot
}

export type Pivot = {
  patient_id: number
  label_id: number
  ordering: number
  created_at: null
  updated_at: null
}

export type Record = {
  id: number
  patient_id: number
  title: string
  date_time: string
  status_reservation: StatusReservation
  aligner_replacement: AlignerReplacement
  time_passed?: string
}

export type AlignerReplacement = {
  date: string
  sheet: number
  keep_number: number
}

type StatusReservation = {
  waktu_terus_berlalu: number
}

export type Pagination = {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

export type SummaryReservation = {
  canceled: number
  discharged: number
  in_treatment: number
  pending_visit: number
  total: number
  total_check: number
  visited: number
  waiting_for_billing: number
}

const pivotDummy: Pivot = {
  patient_id: 4,
  label_id: 1,
  ordering: 1,
  created_at: null,
  updated_at: null,
}
