import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Doctor } from 'src/app/models/doctor';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { CitaService } from 'src/app/services/cita.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso1',
  templateUrl: './subproceso1.component.html',
  styleUrls: ['./subproceso1.component.css']
})
export class Subproceso1Component implements OnInit {
  hoy = new Date();
  numerodia;
  especialistas: any = [];
  especialistasfiltrados;
  reservas: any = [];
  reservasfiltradas: any = [];
  atendido: any = [];
  controlador: any = [];
  bandera = false;
  interruptor = false;
  seleccionado;
  doctor: Doctor = {
    id: 0,
    Name: '',
    LastName: '',
    MedicalSchoolNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Code: '',
    Condition: ''
  };
  reserva: ListCita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
    Type: 'normal',
    Condition: '',
    Cardiacpressure: '',
    Oxygenation: '',
    Temperature: '',
    Weight: '',
    Size: '',
    Companion: '',
    Relationship: '',
    Currentepisode: '',
    Beginningprinciples: '',
    Problem: '',
    Examination: '',
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
    Cardiacpressure: '',
    Oxygenation: '',
    Temperature: '',
    Weight: '',
    Size: '',
    Companion: '',
    Relationship: '',
    Currentepisode: '',
    Beginningprinciples: '',
    Problem: '',
    Examination: '',
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
        Interval: '',
        Start: '',
        End: ''
      }
    }
  };
  ticket: any = this.reserva;
  mensaje1;
  mensaje2;
  constructor(
    private router: Router,
    private toast: ToastrService,
    private reservaService: CitaService,
    private especialistaService: EspecialistaService,
  ) { }
  // tslint:disable-next-line: typedef
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
    let dd: any;
    let mm: any;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    // const cadena = yyyy + '-' + mm + '-' + dd;
    const cadena =  '2022-02-25';
    console.log(cadena);
    console.log(cadena);
    const a2 = new Date(cadena).getTime();
    console.log(a2);
    this.numerodia = a2;
  }
  ngOnInit(): void {
    this.fechadeldia();
    this.especialistaService.getEspecialistas().subscribe(
      resespecialistas => {
        this.especialistas = resespecialistas;
        const array1: any = this.especialistas;
        console.log(this.especialistas);
        console.log(array1);
        const array2: any = [];
        this.doctor = JSON.parse(localStorage.getItem('doctor'));
        const parametro = this.doctor.id;
        // console.log(array1);
        for (const obj of array1) {
          const objeto = obj.DoctorId;
          console.log(parametro);
          console.log(objeto);
          if (objeto === parametro) {
            console.log('hay coincidencia');
            array2.push(obj);
            this.especialistasfiltrados = array2;
          }
        }
        if (Object.entries(this.especialistasfiltrados).length > 1) {
          this.interruptor = true;
          console.log('doctor tiene mas de una especialidad');
        } else if (Object.entries(this.especialistasfiltrados).length === 1) {
          this.interruptor = false;
          console.log('doctor tiene solo una especialidad');
          const eldoctor = this.especialistasfiltrados[0].id;
          this.reservaService.getCitasfiltradas(eldoctor).subscribe(
            rescitas => {
              this.reservas = rescitas;
              console.log(this.reservas);
              const array = this.reservas;
              const parametrito = this.numerodia;
              const filtro: any = [];
              console.log(parametro);
              console.log(array);
              for (const item of array) {
                const fecha = item.Appointment;
                const numerofecha = new Date(fecha).getTime();
                const estado = item.Condition;
                console.log(numerofecha);
                if (numerofecha === parametrito && (estado === 'por atender')) {
                // if (numerofecha === parametrito) {
                  console.log('se encontro igualdad');
                  filtro.push(item);
                  this.reservasfiltradas = filtro;
                }
              }
              console.log(this.reservasfiltradas);
            },
          );
        }
      },
      err => {
        console.log(err);
      }
    );

  }
  // // tslint:disable-next-line: typedef
  especialistsselected(codigo) {
    const doctor = codigo;
    this.reservaService.getCitasfiltradas(doctor).subscribe(
      res => {
        this.reservas = res;
        const array = this.reservas;
        const parametrito = this.numerodia;
        const filtro: any = [];
        console.log(parametrito);
        console.log(array);
        for (const item of array) {
          const fecha = item.Appointment;
          const numerofecha = new Date(fecha).getTime();
          console.log(numerofecha);
          if (numerofecha === parametrito) {
            console.log('se encontro igualdad');
            filtro.push(item);
            this.reservasfiltradas = filtro;
          }
        }
        console.log(this.reservasfiltradas);
      },
      err => {
        console.log(err);
      }
    );
  }

  details(code) {
    this.seleccionado = code;
    console.log(code);
    this.reservaService.getCita(code).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.ticket = res;
          this.reserva = res;
          this.toast.info('horario de la reserva elegida');
        } else {
          this.toast.error('no se encontro nada');
        }
      }
    );
  }

  atender(codigo) {
    this.seleccionado = codigo;
    this.reservaService.getCita(this.seleccionado).subscribe(
      rescita => {
        if (rescita) {
          this.reserva = rescita;
          this.reserva.Condition = 'por atender';
          this.reservaService.updateCita(this.seleccionado, this.reserva).subscribe(
            resupdate => {
              if (resupdate) {
                this.mensaje2 = resupdate;
                this.router.navigate(
                  [
                    'admin',
                    'procesos',
                    'proceso1',
                    'subproceso2',
                    this.seleccionado
                  ]
                );
                this.toast.success('Procedamos a atender');
              } else {
                this.toast.error('error al actualizar la reserva');
              }
            }
          );
        } else {
          this.toast.error('datos no obtenidos de la reserva');
        }
      }
    );
  }
}
