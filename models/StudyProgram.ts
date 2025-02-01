interface StudyProgramModel {
  id: number
  name: string
  code: string
  description: string
  head_of_program: string
  established_year: number
  contact_email: string
  contact_phone: string
  faculty: FacultyModel // Relasi ke tabel fakultas
}
