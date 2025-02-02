interface UserModel {
  id: number
  password: string
  last_login: string // Date in ISO format (e.g., "2025-01-20T10:00:00")
  is_superuser: boolean
  username: string
  first_name: string
  last_name: string
  email: string
  is_staff: boolean
  is_active: boolean
  date_joined: string // Date in ISO format (e.g., "2025-01-01T08:00:00")
  role: string
  profile_picture: string
  birthdate: string // Date in ISO format (e.g., "2000-03-22")
  phone_number: string
  faculty: FacultyModel
}

interface UserModelWithRelation {
  id: number
  username: string
  email: string
  role: string
  faculty_name: FacultyModel | null
  study_program_name: StudyProgramModel | null
}
