import { ClinicDataType } from './Clinic'
import { DoctorData } from './Doctor'
import { PatientType } from './Patients'
import { StaffData } from './Staff'

type RelatedFileType = {
  id: number
  patient_treatment_record_id: number
  file_path: string
  created_at: string
  updated_at: string
  file_name: string
}

type UploadedCaseroomType = {
  id: number
  patient_caseroom_id: number
  parts_name: string
  file_path: string
  created_at: string
  updated_at: string
}

type CaseroomFilesType = {
  id: number
  patient_caseroom_id: number
  parts_name: string
  file_path: string
  created_at: string
  updated_at: string
}

type CaseroomType = Array<{
  id: number
  caseroom_thumbnail: string
  patient_treatment_record_id: number
  caseroom: string
  created_at: string
  updated_at: string
  uploaded_caseroom: Array<UploadedCaseroomType>
  files: Array<CaseroomFilesType>
  description: string
  template_id: number
}>

export interface Rubbers {
  id: number
  rubber_id: number
  pattern_id: number
  treatment_record_id: number
  color: string
  position: string
  position_mirroring: string
  rubber_wear_time: string
  is_mirroring: number
  created_at: string
  updated_at: string
  deleted_at: any
  rubber: Rubber
  pattern: Pattern
  rubbers_treatment_record: Array<any>
}

export interface Rubber {
  id: number
  rubber_name: string
  ordering: number
  created_at: string
  updated_at: string
  deleted_at: any
}

export interface Pattern {
  id: number
  pattern_type: string
  number_of_coordinates: number
  is_connected: number
  ordering: number
  created_at: string
  updated_at: string
  deleted_at: any
}

export type TreatmentRecordType = {
  id: number
  patient_id: number
  patient: PatientType
  date_time: string
  title: string
  clinic_id: number
  doctor_id: number
  staff_id: number
  memo: string
  aligner_replacement_starting_number: number
  aligner_replacement_replacement_interval: number
  aligner_replacement_number_of_handed_over: number
  updated_at: string
  doctor_kanji: string
  staff_kanji: string
  clinic_kanji: string
  treatment_ids: Array<number>
  related_file: Array<string>
  rubbers: Array<Rubbers>
  aligner_replacement: {
    current: {
      sheet: number
      date: string
    }
    datas: Array<{
      sheet: number
      date: string
    }>
  }
  rubbers_treatment_record: Array<any>
  clinic: ClinicDataType
  doctor: DoctorData
  staff: StaffData
  treatment_statuses: Array<any>
  caserooms: CaseroomType
  related_files: Array<RelatedFileType>
  remarks: string
  total: number
  genie_memo: string
  treatment_fee: any
  treatment_fee_additional: any
  maintenance_fee: any
  schedule_type: number | string
  keep_number: number | string
  aligner_date_handed_over: string
  survey_answers: Array<SurveyWrapType>
  additional_set_reason: aditionalReasonType
  any_changes_to_the_aligners: number | null
  any_other_treatments_besides_an_aligner: number | null
  additional_set_reason_text: string
  any_changes_to_the_aligners_text: string
  rubber_thumbnail: string
  bill_issueds: any[]
  asana_link: string
}

export interface aditionalReasonType {
  id: number
  text: string
  created_at: string
  updated_at: string
  deleted_at: any
}

export interface SurveyWrapType {
  id: number
  answer: string
  survey_id: number
  patient_treatment_record_id: number
  created_at: string
  updated_at: string
  deleted_at: any
  survey: SurveyType
}

export interface SurveyType {
  id: number
  question: string
  title: string
  is_active: number
  created_at: string
  updated_at: string
  type_answer: string
  value_start: number
  value_end: number
  default: number
  deleted_at: any
}
