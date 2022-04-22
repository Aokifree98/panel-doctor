import { Cita } from 'src/app/models/Cita';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { AnalisisService } from 'src/app/services/analisis.service';
import { LaboratoriodoscitaService } from 'src/app/services/laboratoriodoscita.service';
import { TipoService } from 'src/app/services/tipo.service';
import { TipodosService } from 'src/app/services/tipodos.service';
import { Analisis } from 'src/app/models/analisis';
import { ListLaboratoriocita } from 'src/app/models/listlaboratoriodoscita';
import { Genero } from 'src/app/models/genero.model';

@Component({
  selector: 'app-subproceso2',
  templateUrl: './subproceso2.component.html',
  styleUrls: ['./subproceso2.component.css']
})
export class Subproceso2Component implements OnInit {
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
    Creatininevalue: '',
    Urea: '',
    ETS: false,
    Specifyothers: '',
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
    Creatininevalue: '',
    Urea: '',
    ETS: false,
    Specifyothers: '',
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
  genero: Genero [] = [
    {
      id: 1,
      name: 'Izquierda'
    },
    {
      id: 2,
      name: 'Derecha'
    },
    {
      id: 3,
      name: 'Ambos'
    }
  ];
  elanalisis: Analisis = {
    id: 0,
    Value: false,
    Condition: '',
    CitaId: 0,
    LaboratorioId: 0
  };
  ellaboratorio: ListLaboratoriocita = {
    id: 0,
    Value: false,
    Location: '',
    Amount: '',
    Condition: '',
    CitaId: 0,
    LaboratoriodosId: 0
  };
  ticket: any = this.reservadetail;
  elcodigo;
  mensaje;
  edad;
  name;
  mostrar = false;
  tipos1: any = [];
  tipos2: any = [];
  analisis: any = [];
  rxtmrm: any = [];
  analisisfiltrado: any = [];
  rxtmrmfiltrado: any = [];
  analisisseleccioanados: any = [];
  rxtmrmseleccioanados: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private reservaService: CitaService,
    private tipodosService: TipodosService,
    private activatedRoute: ActivatedRoute,
    private analisisService: AnalisisService,
    private laboratoriocitaService: LaboratoriodoscitaService
  ) { }
  gettipos1() {
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipos1 = res;
      }, err => {
        this.toastr.error('Error get tipos 1');
      }
    );
  }
  gettipos2() {
    this.tipodosService.getTipodoss().subscribe(
      res => {
        this.tipos2 = res;
      }, err => {
        this.toastr.error('Error get tipos 2');
      }
    );
  }
  selecttype1(par) {
    const parametro =  par;
    const array: any = this.analisis;
    const array2: any = [];
    for (const item of array) {
      const valor = item.laboratorio.TipoId;
      if (valor === parametro) {
        array2.push(item);
        this.analisisfiltrado = array2;
      }
    }
    console.log(this.analisisfiltrado);
  }
  selecttype2(par, par2) {
    this.name = par2;
    const parametro =  par;
    if (parametro === 1) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
    const array: any = this.rxtmrm;
    const array2: any = [];
    for (const item of array) {
      const valor = item.laboratoriodos.TipodosId;
      if (valor === parametro) {
        array2.push(item);
        this.rxtmrmfiltrado = array2;
      }
    }
    console.log(this.rxtmrmfiltrado);
  }
  onchangeselect1(par) {
    this.analisisService.getAnalisis(par).subscribe(
      resget => {
        this.elanalisis = resget;
        const valor = !this.elanalisis.Value;
        if (valor === true) {
          this.elanalisis.Condition = 'obtener';
        } else {
          this.elanalisis.Condition = 'asignado';
        }
        // tslint:disable-next-line: no-unused-expression
        this.elanalisis.Value = valor;
        this.analisisService.updateAnalisis(par, this.elanalisis).subscribe(
          resupdate => {
            this.mensaje = resupdate;
            this.analisisService.getAnalisisCita(this.elcodigo).subscribe(
              resanalisis => {
                this.analisis = resanalisis;
                console.log(resanalisis);
                const array3: any = this.analisis;
                const seleccionados: any = [];
                for (const item of array3) {
                  if (item.Value === true) {
                    seleccionados.push(item);
                    this.analisisseleccioanados = seleccionados;
                  }
                }
                console.log(this.analisisseleccioanados);
              }, err => {
                this.toastr.error('Error get all analisis cita');
              }
            );
          }, err => {
            this.toastr.error('Error update one analisis cita');
          }
        );
      }, err => {
        this.toastr.error('Error get one analisis cita');
      }
    );
  }
  onchangeselect2(par) {
    this.laboratoriocitaService.getLaboratoriocita(par).subscribe(
      resget => {
        this.ellaboratorio = resget;
        const valor = !this.ellaboratorio.Value;
        if (valor === true) {
          this.ellaboratorio.Condition = 'obtener';
        } else {
          this.ellaboratorio.Condition = 'asignado';
        }
        // tslint:disable-next-line: no-unused-expression
        this.ellaboratorio.Value = valor;
      }, err => {
        this.toastr.error('Error get one rxtmrm cita');
      }
    );
  }
  onOptionsSelected(event) {
    const value = event.target.value;
    this.ellaboratorio.Location = value;
    console.log(value);
  }
  updaterxtmrm(par) {
    this.laboratoriocitaService.updateLaboratoriocita(par, this.ellaboratorio).subscribe(
      resupdate => {
        this.mensaje = resupdate;
        this.laboratoriocitaService.getLaboratoriocitaCita(this.elcodigo).subscribe(
          reslaboratorio => {
            this.analisis = reslaboratorio;
            console.log(reslaboratorio);
            const array4: any = this.rxtmrm;
            const seleccionados: any = [];
            for (const item of array4) {
              if (item.Value === true) {
                seleccionados.push(item);
                this.rxtmrmseleccioanados = seleccionados;
              }
            }
            console.log(this.rxtmrmseleccioanados);
          }, err => {
            this.toastr.error('Error get all analisis rx-tm-rm');
          }
        );
      }, err => {
        this.toastr.error('Error update one rxtmrm cita');
      }
    );
  }
  etswey() {
    const valor = !this.reserva.ETS;
    this.reserva.ETS = valor;
  }
  ngOnInit(): void {
    this.gettipos1();
    this.gettipos2();
    const FechaActual = new Date();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getCita(params.id).subscribe(
        res => {
          this.reserva = res;
          this.ticket = res;
          const codigo = this.ticket.id;
          const FechaNacimiento = new Date(this.ticket.cliente.BirthDate);
          const dia = FechaNacimiento.getDate();
          const mes = FechaNacimiento.getMonth() + 1;
          const ano = FechaNacimiento.getFullYear();
          // cogemos los valores actuales
          // tslint:disable-next-line: variable-name
          const ahora_ano = FechaActual.getFullYear();
          // tslint:disable-next-line: variable-name
          const ahora_mes = FechaActual.getMonth() + 1;
          // tslint:disable-next-line: variable-name
          const ahora_dia = FechaActual.getDate();

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
          this.elcodigo = codigo;
          console.log(this.elcodigo);
          this.toastr.success('historia del paciente');
          this.analisisService.getAnalisisCita(this.elcodigo).subscribe(
            resanalisis => {
              this.analisis = resanalisis;
              console.log(this.analisis);
              const array3: any = this.analisis;
              const seleccionados: any = [];
              for (const item of array3) {
                if (item.Value === true) {
                  seleccionados.push(item);
                  this.analisisseleccioanados = seleccionados;
                }
              }
              console.log(this.analisisseleccioanados);
            }, err => {
              this.toastr.error('Error get all analisis cita');
            }
          );
          this.laboratoriocitaService.getLaboratoriocitaCita(this.elcodigo).subscribe(
            reslaboratorio => {
              this.rxtmrm = reslaboratorio;
              console.log(reslaboratorio);
              const array4: any = this.rxtmrm;
              const seleccionados: any = [];
              for (const item of array4) {
                if (item.Value === true) {
                  seleccionados.push(item);
                  this.rxtmrmseleccioanados = seleccionados;
                }
              }
              console.log(this.rxtmrmseleccioanados);
            }, err => {
              this.toastr.error('Error get all analisis rx-tm-rm');
            }
          );
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  historial() {
    this.reserva.Condition = 'atendido';
    console.log(this.reserva);
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
}
