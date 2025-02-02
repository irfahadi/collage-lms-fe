interface ClassModelWithRelations {
  class_id: number
  class_code: string
  class_name_long: string
  class_name_short: string
  visibility: number
  start_date: string // ISO DateTime string
  end_date: string // ISO DateTime string
  description: string
  class_thumbnail: string
  tag: string
  created_at: string // ISO DateTime string
  updated_at: string // ISO DateTime string
  responsible_lecturer_id: number
  study_program_id: number
  responsible_lecturer: UserModel // Relasi dengan dosen
  study_program: StudyProgramModel // Relasi dengan program studi
}
