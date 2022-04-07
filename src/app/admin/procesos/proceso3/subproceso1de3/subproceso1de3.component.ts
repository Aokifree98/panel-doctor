import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso1de3',
  templateUrl: './subproceso1de3.component.html',
  styleUrls: ['./subproceso1de3.component.css']
})
export class Subproceso1de3Component implements OnInit {
  especialidades: any = [];
  cliente: Cliente = {
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
    Password: '',
    Photo: '',
    Google: '0',
    Condition: '',
    Code: ''
  };
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
  dato;
  codigocliente;
  varios = false;
  codigosolitario;
  historial: any = [];
  FechaActual = new Date();
  edad;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private clienteService: ClienteService,
    private especialistaService: EspecialistaService,

    // private reservaService: CitaService,
  ) { }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        const FechaNacimiento = new Date(this.cliente.BirthDate);
        const dia = FechaNacimiento.getDate();
        const mes = FechaNacimiento.getMonth() + 1;
        const ano = FechaNacimiento.getFullYear();
        // cogemos los valores actuales
        // tslint:disable-next-line: variable-name
        const ahora_ano = this.FechaActual.getFullYear();
        // tslint:disable-next-line: variable-name
        const ahora_mes = this.FechaActual.getMonth() + 1;
        // tslint:disable-next-line: variable-name
        const ahora_dia = this.FechaActual.getDate();

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
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchDocCliente() {
    this.clienteService.getClientedoc(this.dato).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        const FechaNacimiento = new Date(this.cliente.BirthDate);
        const dia = FechaNacimiento.getDate();
        const mes = FechaNacimiento.getMonth() + 1;
        const ano = FechaNacimiento.getFullYear();
        // cogemos los valores actuales
        // tslint:disable-next-line: variable-name
        const ahora_ano = this.FechaActual.getFullYear();
        // tslint:disable-next-line: variable-name
        const ahora_mes = this.FechaActual.getMonth() + 1;
        // tslint:disable-next-line: variable-name
        const ahora_dia = this.FechaActual.getDate();

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
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  editar() {
    const parametro = this.codigocliente;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso4',
        parametro
      ]
    );
  }
  ngOnInit(): void {
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    const codigo = this.doctor.id;
    this.especialistaService.getEspecialistaFilterDoctor(codigo).subscribe(
      resespecialidades => {
        this.especialidades = resespecialidades;
        if (Object.entries(this.especialidades).length > 1) {
          this.toastr.info('Tiene mas de 1 especialidad');
          this.varios = true;
        } else {
          this.varios = false;
          this.toastr.info('Solo tiene una especialidad');
          this.codigosolitario = this.especialidades[0].EspecialidadId;
        }
      }, err => {
        this.toastr.error('Error Api especialista filter doctor');
      }
    );
  }

  // unahistoria() {
  //   const parametro1 = this.codigocliente;
  //   const parametro2 = this.codigosolitario;
  //   this.reservaService.getHistorial(parametro1, parametro2).subscribe(
  //     hist => {
  //       console.log(hist);
  //       if (Object.entries(hist).length > 0) {
  //         this.historial = hist;
  //         this.toastr.info('el historial del paciente');
  //       } else {
  //         this.toastr.info('Aun no hay atenciones del cliente');
  //       }
  //     }, err => {
  //       this.toastr.error('Error Api Historial');
  //     }
  //   );
  // }

  historia() {
    const parametro1 = this.codigocliente;
    this.reservaService.getHistorialDolor(parametro1).subscribe(
      hist => {
        console.log(hist);
        if (Object.entries(hist).length > 0) {
          this.historial = hist;
          this.toastr.info('el historial del paciente');
        } else {
          this.toastr.info('Aun no hay atenciones del cliente');
        }
      }, err => {
        this.toastr.error('Error Api Historial');
      }
    );
  }
  masdetalles(codigo) {
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso4',
        codigo
      ]
    );
  }
  editarhistoria(codigo) {
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso4',
        codigo
      ]
    );
  }

}
