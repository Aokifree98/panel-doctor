import { Title } from '@angular/platform-browser';

export interface AntNoPatologicoCita {
  id?: number,
  Condition?: string,
  DetallecitaId?: number,
  AntecedentenopatologicoId?: number,
  antecedentenopatologico: {
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
