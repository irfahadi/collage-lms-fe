export type ActivityLogDataType = {
  id: string,
  time: string,
  user: string,
  description: string,
  category: ActivityLogType,
  detail: {
    before: any | any[],
    after: any | any[]
  }
}

export enum ActivityLogType {
  CREATED = 'created',
  UPDATED = 'updated',
  DELETED = 'deleted'
}

export type ActivityModule = 
  | 'Patient Basic Info'
  | 'Treatment Plan'
  | 'Related Family'
  | 'Treatment Record'
  | 'First Consult'
  | 'Deposit Tracking'
  | 'Concent Form'
  | 'Personal Doctor'
  | 'Request Form'