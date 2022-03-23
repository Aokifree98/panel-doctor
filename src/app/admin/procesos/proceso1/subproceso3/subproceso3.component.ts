import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-subproceso3',
  templateUrl: './subproceso3.component.html',
  styleUrls: ['./subproceso3.component.css']
})
export class Subproceso3Component implements OnInit {
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
  mensaje
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getCita(params.id).subscribe(
        res => {
          this.reserva = res;
          this.ticket = res;
          const codigo = this.ticket.id;
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
  // // tslint:disable-next-line: typedef
  // descargar() {
  //   const element = document.getElementById('parapdf');
  //   html2canvas(element).then(
  //     (canvas) => {
  //       const imgWidth = 208;
  //       // const pageheight = 295;
  //       const imgheight = canvas.height * imgWidth / canvas.width;
  //       const heightleft = imgheight;
  //       console.log(canvas);
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jspdf('p', 'mm', 'a4');
  //       const position = 0;
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, heightleft);
  //       pdf.save('boleta.pdf');
  //     }
  //   );
  // }
}
