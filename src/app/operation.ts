export interface Operation {
    id: string;
    name: string;
    operator: string;
    avatar: string; // URL avatar dokter
    jaminan: string;
    tindakan: string;
    createdAt: string;
    updatedAt: string;
  }  


  export interface cardOperation {
    doctorName: string;
    doctorPhoto: string;
    operationName: string;
    operationLink: string;
}