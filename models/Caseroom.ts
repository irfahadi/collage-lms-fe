export interface TemplateType {
  id: number
  template: string
  template_file_name: string
  title: string
  created_at: string
  updated_at: string
  deleted_at: any
  priority: number
  template_path: string
  parts: PartType[]
}

export interface PartType {
  id: number
  caseroom_template_id: number
  parts_name: string
  file_path: string
  file_name: string
  index_row: number
  index_column: number
  created_at: any
  updated_at: any
  deleted_at: any
}
