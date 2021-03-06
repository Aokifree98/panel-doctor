import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  parametro = {
    contra1: '',
    contra2: ''
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
  doctor1: Doctor = {
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
  doctor2: Doctor = {
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
  dato = '';
  respuesta: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id).subscribe(
        res => {
          console.log(res);
          this.doctor = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  // tslint:disable-next-line: typedef
  comprobarcodigo(par) {
    const codigo = this.doctor.id;
    this.doctorService.getcofirecover(par.tostring(), codigo).subscribe(
      res => {
        if (res !== null) {
          this.doctor1 = res;
          this.toastr.info('Proceda a cambiar su contra');
        } else {
          this.toastr.error('Codigo no encontrado');
        }
      },
      err => {
        this.toastr.error('Codigo desactivado');
      }
    );
  }
  // tslint:disable-next-line: typedef
  actualizar() {
    const params = this.activatedRoute.snapshot.params;
    const codigo = params.id;
    this.doctor1.Password = this.parametro.contra1;
    if (this.parametro.contra1 !== '' && this.parametro.contra2 !== '') {
      if (this.parametro.contra1 === this.parametro.contra2) {
        console.log(this.doctor1);
        this.doctorService.updateDoctor(codigo, this.doctor1).subscribe(
          res => {
            this.respuesta = res;
            this.toastr.success('Contrase??a actualizada');
            this.router.navigate(
              [
                'auth',
                'login'
              ]
            );
          },
          err => {
            this.toastr.error('no se pudo actualizar');
          }
        );
      } else {
        this.toastr.error('la repeticion de la contrase??a es diferente');
      }
    } else {
      this.toastr.error('Por favor rellenar los campos iguales');
    }
  }
}
