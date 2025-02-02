export type SubnavType = {
  title: string
  link: string
  isActive: boolean
}
export type NavType = {
  title: string
  icon: React.ReactNode
  subMenu: SubnavType[]
  link: string
  isActive: boolean
}
