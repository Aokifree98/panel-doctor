import { Title } from '@angular/platform-browser';

export interface Cita {
  id?: number,
  Appointment?: Date,
  Pay?: string,
  Type?: string,
  Condition?: string,
  Referred?: string,
  Companion?: string,
  Relationship?: string,
  BloodPressure?: string,
  HeartRate?: string,
  BreathingFrequency?: string,
  Temperature?: string,
  Saturation?: string,
  SickTime?: string,
  CurrentEpisode?: string,
  StartWay?: string,
  SignsandSymptoms?: string,
  DescriptionProblem?: string,
  SurgicalHistory?: string,
  MedicalHistory?: string,
  AllergicHistory?: string,
  PhysicalExam?: string,
  Diagnosis?: string,
  LaboratoryExam?: string,
  Creatininevalue?: string,
  Urea?: string,
  ETS?: boolean,
  Specifyothers?: string,
  AdminId?: number,
  ClienteId?: number,
  HorarioId?: number,
  admin: {
    id?: number,
    Name?: string,
    LastName?: string,
    Phone?: string,
    Email?: string,
    Photo?: string
  },
  cliente: {
    id?: number,
    Name?: string,
    LastName?: string,
    BirthDate?: Date,
    Job?: string,
    Direction?: string,
    Phone?: string,
    Gender?: string,
    CivilStatus?: string,
    DocumentNumber?: string,
    Email?: string,
    Photo?: string
  },
  horario: {
    id?: number,
    Day?: string,
    Cupo?: number,
    EspecialistaId?: number,
    HoraId?: number,
    especialista: {
      id?: number,
      Turn?: string,
      EspecialidadId?: number,
      DoctorId?: number,
      especialidad: {
        id?: number,
        Name?: string,
        Price?: number
      },
      doctor: {
        id?: number,
        Name?: string,
        LastName?: string,
        Email?: string,
      },
    },
    hora: {
      id?: number,
      Turn?: string,
      Interval?: string,
      Start?: string,
      End?: string
    }
  }
}
