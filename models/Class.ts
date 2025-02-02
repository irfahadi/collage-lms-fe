interface ClassModelWithRelations {
  id: number
  code: string
  name: string
  class_availability: number
  description: string
  thumbnail: string
  tag: string
  periodId: string
  created_at: string // ISO DateTime string
  updated_at: string // ISO DateTime string
  lecturer: UserModelWithRelation // Relasi dengan dosen
  study_program: StudyProgramModel // Relasi dengan program studi
}
