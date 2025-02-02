interface StudyProgramModel {
  id: string
  name: string
  code: string
  description: string
  head_name: string
  estalbished: string
  email: string
  phone: string
  faculty_id: string
  faculty: FacultyModel // Relasi ke tabel fakultas
}
