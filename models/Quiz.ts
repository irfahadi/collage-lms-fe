interface QuizModel {
  id: number
  question: string
  options: { id?: number; label: string; value?: string }[]
  answer: string | number | null // Jawaban yang benar
}
