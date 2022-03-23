import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
// doctor - usuario --> recontra importante
// doctor
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
// esenciales doctor
// home
import { HomeComponent } from './home/home.component';
// componentes de la aplicacion
// especialidad
import { ListEspecialidadComponent } from './especialidad/list-especialidad/list-especialidad.component';
import { UpdateEspecialidadComponent } from './especialidad/update-especialidad/update-especialidad.component';
import { CreateEspecialidadComponent } from './especialidad/create-especialidad/create-especialidad.component';
// especialista
import { ListEspecialistaComponent } from './especialista/list-especialista/list-especialista.component';
import { UpdateEspecialistaComponent } from './especialista/update-especialista/update-especialista.component';
import { CreateEspecialistaComponent } from './especialista/create-especialista/create-especialista.component';
// horario
import { ListHorarioComponent } from './horario/list-horario/list-horario.component';
import { CreateHorarioComponent } from './horario/create-horario/create-horario.component';
import { UpdateHorarioComponent } from './horario/update-horario/update-horario.component';
// episodio
import { ListEpisodioComponent } from './episodio/list-episodio/list-episodio.component';
import { UpdateEpisodioComponent } from './episodio/update-episodio/update-episodio.component';
import { CreateEpisodioComponent } from './episodio/create-episodio/create-episodio.component';
// laboratorio
import { ListLaboratorioComponent } from './laboratorio/list-laboratorio/list-laboratorio.component';
import { CreateLaboratorioComponent } from './laboratorio/create-laboratorio/create-laboratorio.component';
import { UpdateLaboratorioComponent } from './laboratorio/update-laboratorio/update-laboratorio.component';
// diagnostico
import { ListDiagnosticoComponent } from './diagnostico/list-diagnostico/list-diagnostico.component';
import { CreateDiagnosticoComponent } from './diagnostico/create-diagnostico/create-diagnostico.component';
import { UpdateDiagnosticoComponent } from './diagnostico/update-diagnostico/update-diagnostico.component';
// tratamiento
import { ListTratamientoComponent } from './tratamiento/list-tratamiento/list-tratamiento.component';
import { CreateTratamientoComponent } from './tratamiento/create-tratamiento/create-tratamiento.component';
import { UpdateTratamientoComponent } from './tratamiento/update-tratamiento/update-tratamiento.component';
// antecedente
import { ListAntecedenteComponent } from './antecedente/list-antecedente/list-antecedente.component';
import { CreateAntecedenteComponent } from './antecedente/create-antecedente/create-antecedente.component';
import { UpdateAntecedenteComponent } from './antecedente/update-antecedente/update-antecedente.component';
// historial
import { ListHistorialComponent } from './historial/list-historial/list-historial.component';
import { UpdateHistorialComponent } from './historial/update-historial/update-historial.component';
import { CreateHistorialComponent } from './historial/create-historial/create-historial.component';
// reportes
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
import { ListareportesComponent } from './reportes/listareportes/listareportes.component';
// componentes de los procesos:
// reserva
import { Subproceso1Component } from './procesos/proceso1/subproceso1/subproceso1.component';
import { Subproceso2Component } from './procesos/proceso1/subproceso2/subproceso2.component';
import { Subproceso3Component } from './procesos/proceso1/subproceso3/subproceso3.component';
// postergacion
import { Subproceso1de2Component } from './procesos/proceso2/subproceso1de2/subproceso1de2.component';
import { Subproceso2de2Component } from './procesos/proceso2/subproceso2de2/subproceso2de2.component';
import { Subproceso3de2Component } from './procesos/proceso2/subproceso3de2/subproceso3de2.component';
// atencion
import { Subproceso1de3Component } from './procesos/proceso3/subproceso1de3/subproceso1de3.component';
import { Subproceso2de3Component } from './procesos/proceso3/subproceso2de3/subproceso2de3.component';
import { Subproceso3de3Component } from './procesos/proceso3/subproceso3de3/subproceso3de3.component';
// atencion reserva
import { Subproceso1de4Component } from './procesos/proceso4/subproceso1de4/subproceso1de4.component';
// atencion cliente
import { Subproceso1de5Component } from './procesos/proceso5/subproceso1de5/subproceso1de5.component';
import { Subproceso2de5Component } from './procesos/proceso5/subproceso2de5/subproceso2de5.component';
// confirmacion pago
import { Subproceso1de6Component } from './procesos/proceso6/subproceso1de6/subproceso1de6.component';
import { BoletaComponent } from './boleta/boleta.component';
import { Subproceso4de3Component } from './procesos/proceso3/subproceso4de3/subproceso4de3.component';
import { Subproceso5de3Component } from './procesos/proceso3/subproceso5de3/subproceso5de3.component';
import { Subproceso6de3Component } from './procesos/proceso3/subproceso6de3/subproceso6de3.component';
import { Subproceso4Component } from './procesos/proceso1/subproceso4/subproceso4.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'doctor',
        children: [
          {
            path: 'list',
            component: ListDoctorComponent
          },
          {
            path: 'create',
            component: CreateDoctorComponent
          },
          {
            path: 'update/:id',
            component: UpdateDoctorComponent
          }
        ]
      },
      {
        path: 'especialidad',
        children: [
          {
            path: 'list',
            component: ListEspecialidadComponent
          },
          {
            path: 'create',
            component: CreateEspecialidadComponent
          },
          {
            path: 'update/:id',
            component: UpdateEspecialidadComponent
          }
        ]
      },
      {
        path: 'especialista',
        children: [
          {
            path: 'list',
            component: ListEspecialistaComponent
          },
          {
            path: 'create',
            component: CreateEspecialistaComponent
          },
          {
            path: 'update/:id',
            component: UpdateEspecialistaComponent
          }
        ]
      },
      {
        path: 'horario',
        children: [
          {
            path: 'list',
            component: ListHorarioComponent
          },
          {
            path: 'create',
            component: CreateHorarioComponent
          },
          {
            path: 'update/:id',
            component: UpdateHorarioComponent
          }
        ]
      },
      {
        path: 'antecedente',
        children: [
          {
            path: 'list',
            component: ListAntecedenteComponent
          },
          {
            path: 'create',
            component: CreateAntecedenteComponent
          },
          {
            path: 'update/:id',
            component: UpdateAntecedenteComponent
          }
        ]
      },
      {
        path: 'diagnostico',
        children: [
          {
            path: 'list',
            component: ListDiagnosticoComponent
          },
          {
            path: 'create',
            component: CreateDiagnosticoComponent
          },
          {
            path: 'update/:id',
            component: UpdateDiagnosticoComponent
          }
        ]
      },
      {
        path: 'tratamiento',
        children: [
          {
            path: 'list',
            component: ListTratamientoComponent
          },
          {
            path: 'create',
            component: CreateTratamientoComponent
          },
          {
            path: 'update/:id',
            component: UpdateTratamientoComponent
          }
        ]
      },
      {
        path: 'historial',
        children: [
          {
            path: 'list',
            component: ListHistorialComponent
          },
          {
            path: 'create',
            component: CreateHistorialComponent
          },
          {
            path: 'update/:id',
            component: UpdateHistorialComponent
          }
        ]
      },
      {
        path: 'episodio',
        children: [
          {
            path: 'list',
            component: ListEpisodioComponent
          },
          {
            path: 'create',
            component: CreateEpisodioComponent
          },
          {
            path: 'update/:id',
            component: UpdateEpisodioComponent
          }
        ]
      },
      {
        path: 'laboratorio',
        children: [
          {
            path: 'list',
            component: ListLaboratorioComponent
          },
          {
            path: 'create',
            component: CreateLaboratorioComponent
          },
          {
            path: 'update/:id',
            component: UpdateLaboratorioComponent
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'boleta',
        children: [
          {
            path: '',
            component: BoletaComponent
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'reportes',
        children: [
          {
            path: 'list',
            component: ListareportesComponent
          },
          {
            path: 'reporte1',
            component: Reporte1Component
          },
          {
            path: 'reporte2',
            component: Reporte2Component
          },
          {
            path: 'reporte3',
            component: Reporte3Component
          },
          {
            path: 'reporte4',
            component: Reporte4Component
          },
        ]
      },
      {
        path: 'procesos',
        children: [
          {
            path: 'proceso1',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1Component
              },
              {
                path: 'subproceso2/:id',
                component: Subproceso2Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3Component
              },
              {
                path: 'subproceso4/:id',
                component: Subproceso4Component
              }
            ]
          },
          {
            path: 'proceso2',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de2Component
              },
              {
                path: 'subproceso2/:id',
                component: Subproceso2de2Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de2Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de2Component
              },
            ]
          },
          {
            path: 'proceso3',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de3Component
              },
              {
                path: 'subproceso2',
                component: Subproceso2de3Component
              },
              {
                path: 'subproceso3',
                component: Subproceso3de3Component
              },
              {
                path: 'subproceso4',
                component: Subproceso4de3Component
              },
              {
                path: 'subproceso5',
                component: Subproceso5de3Component
              },
              {
                path: 'subproceso6',
                component: Subproceso6de3Component
              }
            ]
          },
          {
            path: 'proceso4',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de4Component
              }
            ]
          },
          {
            path: 'proceso5',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de5Component
              },
              {
                path: 'subproceso2',
                component: Subproceso2de5Component
              }
            ]
          },
          {
            path: 'proceso6',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de6Component
              }
            ]
          },
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
