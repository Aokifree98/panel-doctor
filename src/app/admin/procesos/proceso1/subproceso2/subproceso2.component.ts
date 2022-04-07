import { Cita } from 'src/app/models/Cita';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-subproceso2',
  templateUrl: './subproceso2.component.html',
  styleUrls: ['./subproceso2.component.css']
})
export class Subproceso2Component implements OnInit {
  reserva: ListCita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
    Type: 'normal',
    Condition: '',
    Referred: '',
    Companion: '',
    Relationship: '',
    BloodPressure: '',
    HeartRate: '',
    BreathingFrequency: '',
    Temperature: '',
    Saturation: '',
    SickTime: '',
    CurrentEpisode: '',
    StartWay: '',
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0
  };
  reservadetail: Cita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
    Type: '',
    Condition: '',
    Referred: '',
    Companion: '',
    Relationship: '',
    BloodPressure: '',
    HeartRate: '',
    BreathingFrequency: '',
    Temperature: '',
    Saturation: '',
    SickTime: '',
    CurrentEpisode: '',
    StartWay: '',
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0,
    admin: {
      id: 0,
      Name: '',
      LastName: '',
      Phone: '',
      Email: '',
      Photo: ''
    },
    cliente: {
      id: 0,
      Name: '',
      LastName: '',
      BirthDate: new Date(),
      Job: '',
      Direction: '',
      Phone: '',
      Gender: '',
      CivilStatus: '',
      DocumentNumber: '',
      Email: '',
      Photo: ''
    },
    horario: {
      id: 0,
      Day: '',
      Cupo: 0,
      EspecialistaId: 0,
      HoraId: 0,
      especialista: {
        id: 0,
        Turn: '',
        EspecialidadId: 0,
        DoctorId: 0,
        especialidad: {
          id: 0,
          Name: '',
          Price: 0
        },
        doctor: {
          id: 0,
          Name: '',
          LastName: '',
          Email: '',
        },
      },
      hora: {
        id: 0,
        Turn: '',
        Interval: '',
        Start: '',
        End: ''
      }
    }
  };
  ticket: any = this.reservadetail;
  elcodigo;
  mensaje;
  edad;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    const FechaActual = new Date();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getCita(params.id).subscribe(
        res => {
          this.reserva = res;
          this.ticket = res;
          const codigo = this.ticket.id;
          const FechaNacimiento = new Date(this.ticket.cliente.BirthDate);
          const dia = FechaNacimiento.getDate();
          const mes = FechaNacimiento.getMonth() + 1;
          const ano = FechaNacimiento.getFullYear();
          // cogemos los valores actuales
          // tslint:disable-next-line: variable-name
          const ahora_ano = FechaActual.getFullYear();
          // tslint:disable-next-line: variable-name
          const ahora_mes = FechaActual.getMonth() + 1;
          // tslint:disable-next-line: variable-name
          const ahora_dia = FechaActual.getDate();

          // realizamos el calculo
          let edad = ahora_ano - ano;
          if (ahora_mes < mes) {
              edad--;
          }
          if ((mes === ahora_mes) && (ahora_dia < dia)) {
              edad--;
          }
          // calculamos los meses
          let meses = 0;
          if (ahora_mes > mes && dia > ahora_dia) {
              meses = ahora_mes - mes - 1;
          }
          else if (ahora_mes > mes) {
              meses = ahora_mes - mes;
          }
          if (ahora_mes < mes && dia < ahora_dia) {
              meses = 12 - (mes - ahora_mes);
          }
          else if (ahora_mes < mes) {
              meses = 12 - (mes - ahora_mes + 1);
          }
          if (ahora_mes === mes && dia > ahora_dia) {
              meses = 11;
          }
          // calculamos los dias
          let dias = 0;
          if (ahora_dia > dia) {
              dias = ahora_dia - dia;
          }
          if (ahora_dia < dia) {
              const ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
              dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
          }
          this.edad = edad + ' años, ' + meses + ' meses y ' + dias + ' días';
          this.elcodigo = codigo;
          this.toastr.success('su boleta');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  historial() {
    this.reserva.Condition = 'atendido';
    this.reservaService.updateCita(this.elcodigo, this.reserva).subscribe(
      actualizacion => {
        this.mensaje = actualizacion;
        this.toastr.info('Datos Registrados');
        this.router.navigate(
          [
            'admin',
            'home'
          ]
        );
      }, err => {
        this.toastr.error('Error Crear cita de historial');
      }
    );
  }
}
