import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-subproceso1de3',
  templateUrl: './subproceso1de3.component.html',
  styleUrls: ['./subproceso1de3.component.css']
})
export class Subproceso1de3Component implements OnInit {
  reserva: ListCita = {
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
    HorarioId: 0
  };
  frontbody = {

  };
  endbody = {

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
  bandera = false;
  bannderaatras = false;
  codigocita = 1;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
  ) { }
  prueba(events) {
    console.log(events);

  }
  adelante(events) {
    this.bandera = !this.bandera;
    const id = events.path[1].id;
    const par = document.getElementById(id);
    if (this.bandera === true) {
      par.style.setProperty('fill', 'red');
      par.style.setProperty('stroke', 'green');
      par.style.setProperty('stroke-width', '1px');
    } else {
      par.style.setProperty('fill', 'beige');
      par.style.setProperty('stroke', 'black');
      par.style.setProperty('stroke-width', '1px');
    }
  }
  atras(events) {
    this.bannderaatras = !this.bannderaatras;
    const id = events.path[1].id;
    const par = document.getElementById(id);
    if (this.bannderaatras === true) {
      par.style.setProperty('fill', 'red');
      par.style.setProperty('stroke', 'green');
      par.style.setProperty('stroke-width', '1px');
    } else {
      par.style.setProperty('fill', 'beige');
      par.style.setProperty('stroke', 'black');
      par.style.setProperty('stroke-width', '1px');
    }
  }
  ngOnInit(): void {
    const parametro = this.codigocita.toString();
    // const params = this.activatedRoute.snapshot.params;
    if (parametro !== '0') {
      this.reservaService.getCita(parametro).subscribe(
        res => {
          this.reserva = res;
          this.ticket = res;
          const codigo = this.ticket.id;
          this.elcodigo = codigo;
          this.toastr.success('su boleta');
          // const estado = this.reserva.Type;
          // if (estado === 'normal') {
          //   this.router.navigate(
          //     [
          //       'admin',
          //       'home'
          //     ]
          //   );
          // }
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
