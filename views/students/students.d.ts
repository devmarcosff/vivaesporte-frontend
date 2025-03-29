export interface StudentInput {
  id?: string;
  name: string;
  birthDate: string;
  document: string;
  registrationNumber: string;
  filiation: string;
  contact: string;
  shift: string;
  bloodType: string;
  school: string;
  address: string;
  sports: ISport[];
}

export interface ISport {
  id?: string;
  name: string;
  description: string;
}