export type FeeManagement = {
  data: {
    maintenances: FeeData[]
    merchandises: FeeData[]
    treatments: FeeData[]
  }
}

export type FeeData = {
  id: number
  menu: string
  amount: number
  cost: number
  is_retention?: number | string
}

export type Maintenance = {
  id: number
  menu: string
  amount: number
}

export type DiscountType = {
  id: number
  name: string
  amount: number
  created_at: string
  updated_at: string
}

const feeeDataDummy: FeeData[] = [
  {
    id: 1,
    menu: 'Whitening Gel',
    amount: 1000,
    cost: 800,
  },
  {
    id: 2,
    menu: 'Repairing Gel',
    amount: 900,
    cost: 700,
  },
  {
    id: 3,
    menu: 'Whitening Gel',
    amount: 1000,
    cost: 800,
  },
  {
    id: 4,
    menu: 'Repairing Gel',
    amount: 900,
    cost: 700,
  },
]

const maintenanceDataDummy: FeeData[] = [
  {
    id: 1,
    menu: 'Adjusment Fee 1',
    amount: 8800,
    cost: 700,
  },
  {
    id: 2,
    menu: 'Adjusment Fee 2',
    amount: 10000,
    cost: 700,
  },
  {
    id: 3,
    menu: 'Adjusment Fee 1',
    amount: 8800,
    cost: 700,
  },
  {
    id: 4,
    menu: 'Adjusment Fee 2',
    amount: 10000,
    cost: 700,
  },
]

export const managementDataDummy: FeeManagement = {
  data: {
    merchandises: feeeDataDummy,
    maintenances: maintenanceDataDummy,
    treatments: feeeDataDummy,
  },
}
