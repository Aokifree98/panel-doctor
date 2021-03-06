import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Diagnostico } from 'src/app/models/diagnostico';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-update-diagnostico',
  templateUrl: './update-diagnostico.component.html',
  styleUrls: ['./update-diagnostico.component.css']
})
export class UpdateDiagnosticoComponent implements OnInit {
  diagnostico: Diagnostico = {
    id: 0,
    Name: '',
    Detail: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private diagnosticoService: DiagnosticoService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.diagnosticoService.getDiagnostico(params.id).subscribe(
        res => {
          console.log(res);
          this.diagnostico = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateDiagnostico() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.diagnostico);
    // llamando a servicio de creacion que esta enlazada con el api
    this.diagnosticoService.updateDiagnostico(params.id, this.diagnostico).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'diagnostico',
            'list'
          ]
        );
        this.toastr.success('Nuevo diagnostico creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo diagnostico');
      }
    );
  }
}
