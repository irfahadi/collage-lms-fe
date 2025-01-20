import { ClinicDataType } from './Clinic'
import { DoctorData } from './Doctor'
import { LabelData } from './Label'
import { StaffData } from './Staff'
import { AlignerReplacement } from './Dashboard'

export type PatientType = {
  id: number
  clinic: ClinicDataType
  clinic_id: {
    id: number
    name: string
  }
  doctor_id: number
  doctor: DoctorData
  staff_id: {
    id: number
    name: string
  }
  relative_contacts: any
  staff: StaffData
  patient_number: string
  patient_kanji: string
  patient_furigana: string
  patient_romaji: string
  date_of_birth: string
  gender_id: number
  gender: {
    gender: string
    label: string
    id: number
  }
  post_code: string
  prefecture: {
    id: number
    name: string
  }
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
  archived_at: string
  isArchived: boolean
  label: Array<LabelData>
  first_consult: FirstConsult | null
  record: PatientRecord
  aligner_replacement: AlignerReplacement
  update_at_invisalign_cc: string
  status_cc: string
  is_genie_completed: number
  genie_patient_id: number | null
}

type FirstConsult = {
  date: string
  patient_id: number
}

export type PatientRecord = {
  id: number
  title: string
  date_time: string
  treatment_status_label: string[]
  treatment_statuses: TreatmentStatuses[]
  aligner_replacement: AlignerReplacement
  status_cc: string
}

export type TreatmentStatuses = {
  id: number
  treatment_status: string
}
