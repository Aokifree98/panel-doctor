// import jspdf from 'jspdf';
// import html2canvas from 'html2canvas';
// import { ToastrService } from 'ngx-toastr';
// import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-subproceso3de2',
  templateUrl: './subproceso3de2.component.html',
  styleUrls: ['./subproceso3de2.component.css']
})
export class Subproceso3de2Component implements OnInit {
  // reserva: Cita = {
  //   id: 0,
  //   Appointment: new Date(),
  //   Pay: '',
  //   Type: '',
  //   Condition: '',
  //   Cardiacpressure: '',
  //   Oxygenation: '',
  //   Temperature: '',
  //   Weight: '',
  //   Size: '',
  //   Companion: '',
  //   Relationship: '',
  //   Problem: '',
  //   Examination: '',
  //   AdminId: 0,
  //   ClienteId: 0,
  //   HorarioId: 0,
  //   admin:{
  //     id: 0,
  //     Name: '',
  //     LastName: '',
  //     Phone: '',
  //     Email: '',
  //     Photo: ''
  //   },
  //   cliente:{
  //     id: 0,
  //     Name: '',
  //     LastName: '',
  //     BirthDate: new Date(),
  //     Job: '',
  //     Direction: '',
  //     Phone: '',
  //     Gender: '',
  //     CivilStatus: '',
  //     DocumentNumber: '',
  //     Email: '',
  //     Photo: ''
  //   },
  //   horario:{
  //     id: 0,
  //     Day: '',
  //     EspecialistaId: 0,
  //     HoraId: 0,
  //     especialista:{
  //       id: 0,
  //       Turn: '',
  //       EspecialidadId: 0,
  //       DoctorId: 0,
  //       especialidad: {
  //         id: 0,
  //         Name: '',
  //         Price: 0
  //       },
  //       doctor: {
  //         id: 0,
  //         Name: '',
  //         LastName: '',
  //         Email: '',
  //       },
  //     },
  //     hora:{
  //       id: 0,
  //       Interval: '',
  //       Start: '',
  //       End: ''
  //     }
  //   }
  // };
  // ticket: any = this.reserva;
  // elcodigo;
  constructor(
    // private toastr: ToastrService,
    // private reservaService: CitaService,
    // private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // const params = this.activatedRoute.snapshot.params;
    // if (params.id) {
    //   this.reservaService.getCita(params.id).subscribe(
    //     res => {
    //       this.ticket = res;
    //       const codigo = this.ticket.id;
    //       if (codigo < 10) {
    //         this.elcodigo = '00000' + codigo.toString();
    //       } else if (codigo < 100) {
    //         this.elcodigo = '0000' + codigo.toString();
    //       } else if (codigo < 1000) {
    //         this.elcodigo = '000' + codigo.toString();
    //       } else if (codigo < 10000) {
    //         this.elcodigo = '00' + codigo.toString();
    //       } else if (codigo < 100000) {
    //         this.elcodigo = '0' + codigo.toString();
    //       } else {
    //         this.elcodigo = codigo.toString();
    //       }
    //       this.toastr.success('su boleta');
    //     },
    //     err => console.log(err)
    //   );
    // }
  }
  // tslint:disable-next-line: typedef
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
