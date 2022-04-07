import { Title } from '@angular/platform-browser';

export interface AntHeredoFamiliarCita {
  id?: number,
  Condition?: string,
  DetallecitaId?: number,
  AntecedenteheredofamiliarId?: number,
  antecedenteheredofamiliar: {
    id?: number,
    Name?: string
  },
  detallecita: {
    Treatment?: string,
    Observations?: string,
    CitaId?: string,
    cita: {
      id?: number,
      Appointment?: Date,
      Type?: string,
      Condition?: string,
      Diagnosis?: string,
      LaboratoryExam?: string
    }
  }
}
