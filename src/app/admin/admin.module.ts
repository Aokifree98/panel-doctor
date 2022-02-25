import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {
//   AppAsideModule,
//   AppBreadcrumbModule,
//   AppHeaderModule,
//   AppFooterModule,
//   AppSidebarModule,
// } from '@coreui/angular';

// // Import 3rd party components
// import { ChartsModule } from 'ng2-charts';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG  } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// para los reportes con barras :v
import {ChartModule} from 'primeng/chart';
// accordion and accordion tab
import {AccordionModule} from 'primeng/accordion';
// api
import {MenuItem} from 'primeng/api';

// home
import { HomeComponent } from './home/home.component';
// trabajando
import { WorkingComponent } from './working/working.component';
// componentes de la aplicacion
// doctor
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
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
// procesos:
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


@NgModule(
  {
    declarations: [
      AdminComponent,
      Subproceso1Component,
      Subproceso2Component,
      Subproceso3Component,
      Subproceso1de2Component,
      Subproceso2de2Component,
      Subproceso3de2Component,
      ListareportesComponent,
      Reporte1Component,
      Reporte2Component,
      Reporte3Component,
      Reporte4Component,
      Subproceso1de3Component,
      Subproceso2de3Component,
      Subproceso3de3Component,
      WorkingComponent,
      HomeComponent,
      ListDoctorComponent,
      CreateDoctorComponent,
      UpdateDoctorComponent,
      UpdateEspecialidadComponent,
      CreateEspecialidadComponent,
      ListEspecialidadComponent,
      ListAntecedenteComponent,
      CreateAntecedenteComponent,
      UpdateAntecedenteComponent,
      UpdateEpisodioComponent,
      CreateEpisodioComponent,
      ListEpisodioComponent,
      ListLaboratorioComponent,
      CreateLaboratorioComponent,
      UpdateLaboratorioComponent,
      UpdateEspecialistaComponent,
      CreateEspecialistaComponent,
      ListEspecialistaComponent,
      ListHorarioComponent,
      CreateHorarioComponent,
      UpdateHorarioComponent,
      CreateDiagnosticoComponent,
      UpdateDiagnosticoComponent,
      ListDiagnosticoComponent,
      ListTratamientoComponent,
      CreateTratamientoComponent,
      UpdateTratamientoComponent,
      UpdateHistorialComponent,
      ListHistorialComponent,
      CreateHistorialComponent,
      Subproceso1de4Component,
      Subproceso1de5Component,
      Subproceso2de5Component,
      Subproceso1de6Component,
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      // primeng
      AccordionModule,
      ChartModule,
      ReactiveFormsModule,
      // AppAsideModule,
      // AppBreadcrumbModule.forRoot(),
      // AppHeaderModule,
      // AppFooterModule,
      // AppSidebarModule,
      // BsDropdownModule.forRoot(),
      // TabsModule.forRoot(),
      // ChartsModule,
      // PerfectScrollbarModule,
      ToastrModule.forRoot(),
    ]
  }
)
export class AdminModule { }
