export type Label = {
  data: LabelData[];
}

export type LabelData = {
  id:         number;
  name:       string;
  color:      string;
  count:      number;
}

const labelDataDummy: LabelData[] = [
  {
    id : 1,
    name : "Payment Completed! :D",
    color : "#FF0000",
    count : 25,
  },
  {
    id : 2,
    name : "Tiktok Content",
    color : "#9747FF",
    count : 43,
  },
  {
    id : 3,
    name : "Payment Completed! :D",
    color : "#FF0000",
    count : 54,
  },
  {
    id : 4,
    name : "Tiktok Content",
    color : "#9747FF",
    count : 67,
  },
]

export const labelDummy: Label = {
  data: labelDataDummy
}