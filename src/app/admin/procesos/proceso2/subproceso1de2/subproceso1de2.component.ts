import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-subproceso1de2',
  templateUrl: './subproceso1de2.component.html',
  styleUrls: ['./subproceso1de2.component.css']
})
export class Subproceso1de2Component implements OnInit {
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
  dato;
  codigocliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService
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
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  viewdetails() {
    const parametro = this.codigocliente;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso2',
        'subproceso2',
        parametro
      ]
    );
  }
  ngOnInit(): void {
  }
}
