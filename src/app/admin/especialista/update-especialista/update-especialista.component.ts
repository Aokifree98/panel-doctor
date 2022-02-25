import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialista } from 'src/app/models/especialista';
import { DoctorService } from 'src/app/services/doctor.service';
import { ListEspecialista } from 'src/app/models/listespecialista';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-update-especialista',
  templateUrl: './update-especialista.component.html',
  styleUrls: ['./update-especialista.component.css']
})
export class UpdateEspecialistaComponent implements OnInit {
  doctores: any = [];
  especialidades: any = [];
  genero: Genero [] = [
    {
      id: 1,
      name: 'Masculino'
    },
    {
      id: 2,
      name: 'Femenino'
    }
  ];
  especialista: ListEspecialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
  }
  especialistadetalle: Especialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
    especialidad: {
      id: 0,
      Name: '',
      Image: '',
      Price: 0
    },
    doctor: {
      id: 0,
      Name: '',
      LastName: '',
      MedicalSchoolNumber: '',
      Email: '',
      Photo: ''
    }
  }
  detailespecialista: any = this.especialistadetalle;
  codigodoctor;
  codigoespecialidad;
  doctorcreate = false;
  especialidadcreate = false;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService,
  ) { }
  // tslint:disable-next-line: typedef
  onOptionsSelectedEspecialidad(event) {
    const value = event.target.value;
    this.codigoespecialidad = value;
    console.log(value);
  }
  // tslint:disable-next-line: typedef
  onOptionsSelecteDoctor(event) {
    const value = event.target.value;
    this.codigodoctor = value;
    console.log(value);
  }
  updateEspecialista() {
    const params = this.activatedRoute.snapshot.params;
    this.especialista.EspecialidadId = this.codigoespecialidad;
    this.especialista.DoctorId = this.codigodoctor;
    // delete this.especialidad.id;
    console.log(this.especialista);
    // llamando a especialidad de creacion que esta enlazada con el api
    this.especialistaService.updateEspecialista(params.id, this.especialista).subscribe(
      res => {
        console.log(res);

        this.toastr.success('Especialista actualizado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizado especialista');
      }
    );
  }
  getdoctors() {
    this.doctorService.getDoctors().subscribe(
      res => {
        this.doctores = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getespecialidades() {
    this.especialidadService.getEspecialidads().subscribe(
      res => {
        this.especialidades = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    this.getdoctors();
    this.getespecialidades();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.especialidadService.getEspecialidad(params.id).subscribe(
        res => {
          console.log(res);
          this.especialista = res;
          this.detailespecialista = res;
          this.codigodoctor = this.especialista.DoctorId;
          this.codigoespecialidad = this.especialista.EspecialidadId;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'especialista',
        'list'
      ]
    );
  }
}
