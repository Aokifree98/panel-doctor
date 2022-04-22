import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { Duracion } from 'src/app/models/duracion';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { AntPatologico } from 'src/app/models/antpatologico';
import { ListDetalleCita } from 'src/app/models/Listdetallecita';
import { ListDuracionCita } from 'src/app/models/listduracioncita';
import { DuracionService } from 'src/app/services/duracion.service';
import { AntHeredoFamiliar } from 'src/app/models/antheredofamiliar';
import { ListFrecuenciaCita } from 'src/app/models/listfrecuenciacita';
import { FrecuenciaService } from 'src/app/services/frecuencia.service';
import { ListDermatomaFrontal } from 'src/app/models/listdermatomafrontal';
import { DuracioncitaService } from 'src/app/services/duracioncita.service';
import { ListAntPatologicoCita } from 'src/app/models/Listantpatologicocita';
import { AntpatologicoService } from 'src/app/services/antpatologico.service';
import { ListDermatomaPosterior } from 'src/app/models/listdermatomaposterior';
import { FrecuenciacitaService } from 'src/app/services/frecuenciacita.service';
import { ListAntNoPatologicoCita } from 'src/app/models/Listantnopatologicocita';
import { DetallecitacitaService } from 'src/app/services/detallecitacita.service';
import { AntnopatologicoService } from 'src/app/services/antnopatologico.service';
import { DermatomafrontalService } from 'src/app/services/dermatomafrontal.service';
import { ListAntHeredoFamiliarCita } from 'src/app/models/listantheredofamiliarcita';
import { AntheredofamiliarService } from 'src/app/services/antheredofamiliar.service';
import { AntpatologicocitaService } from 'src/app/services/antpatologicocita.service';
import { DermatomaposteriorService } from 'src/app/services/dermatomaposterior.service';
import { AntnopatologicocitaService } from 'src/app/services/antnopatologicocita.service';
import { AntheredofamiliarcitaService } from 'src/app/services/antheredofamiliarcita.service';

@Component({
  selector: 'app-subproceso3de3',
  templateUrl: './subproceso3de3.component.html',
  styleUrls: ['./subproceso3de3.component.css']
})
export class Subproceso3de3Component implements OnInit {
  duracion: Duracion = {
    Name: ''
  };
  duracion1: Duracion = {
    id: 0,
    Name: ''
  };
  antecedentehf: AntHeredoFamiliar = {
    Name: ''
  };
  antecedentep: AntPatologico = {
    Name: ''
  };
  antecedentehf1: AntHeredoFamiliar = {
    id: 0,
    Name: ''
  };
  antecedentep1: AntPatologico = {
    id: 0,
    Name: ''
  };
  edad;
  elcodigo;
  mensaje;
  mensaje1;
  mensaje2;
  mensaje3;
  mensaje4;
  mensaje5;
  mensaje6;
  bandera = false;
  bannderaatras = false;
  codigocita;
  reserva: ListCita = {
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
    HorarioId: 0
  };
  detallecita: ListDetalleCita = {
    id: 0,
    G: '',
    P: '',
    A: '',
    C: '',
    Fum: new Date(),
    Papsmear: '',
    Bloodtype: '',
    Others: '',
    Startdate: '',
    Frequency: '',
    Datethatbecameimportant: new Date(),
    Perday: '',
    Perweek: '',
    Permonth: '',
    Byyear: '',
    One: false,
    Two: false,
    Three: false,
    Multiple: false,
    Unilateral: false,
    Bilateral: false,
    Symmetrical: false,
    Referred: false,
    Irradiated: false,
    Worsened: false,
    Parked: false,
    Decreasing: false,
    Scale: '',
    Datescale: new Date(),
    Oncological: false,
    Oncologicaltype: '',
    AssociatedwithDiagnosis: false,
    AssociatedwithTreatment: false,
    AssociatedwithProgressiveCancer: false,
    Addictions: false,
    Dying: false,
    Treatment: '',
    Observations: '',
    Protocol: false,
    Protocoltype: '',
    CitaId: 0
  };
  frontbody: ListDermatomaFrontal = {
    id: 0,
    DFC1: false,
    DFC21: false,
    DFC22: false,
    DFC3: false,
    DFC4: false,
    DFC51: false,
    DFC52: false,
    DFC61: false,
    DFC62: false,
    DFC71: false,
    DFC72: false,
    DFC81: false,
    DFC82: false,
    DFD101: false,
    DFD102: false,
    DFD103: false,
    DFD2: false,
    DFD3: false,
    DFD4: false,
    DFD5: false,
    DFD6: false,
    DFD7: false,
    DFD8: false,
    DFD9: false,
    DFD10: false,
    DFD11: false,
    DFD12: false,
    DFL1: false,
    DFL21: false,
    DFL22: false,
    DFL31: false,
    DFL32: false,
    DFL41: false,
    DFL42: false,
    DFL51: false,
    DFL52: false,
    DFS11: false,
    DFS12: false,
    DFS2: false,
    DFS3: false,
    CitaId: 0
  };
  endbody: ListDermatomaPosterior = {
    id: 0,
    DDC2: false,
    DDC3: false,
    DDC4: false,
    DDC51: false,
    DDC52: false,
    DDC53: false,
    DDC61: false,
    DDC62: false,
    DDC63: false,
    DDC71: false,
    DDC72: false,
    DDC73: false,
    DDC81: false,
    DDC82: false,
    DDC83: false,
    DDD101: false,
    DDD102: false,
    DDD103: false,
    DDD2: false,
    DDD3: false,
    DDD4: false,
    DDD5: false,
    DDD6: false,
    DDD7: false,
    DDD8: false,
    DDD9: false,
    DDD10: false,
    DDD11: false,
    DDD12: false,
    DDL1: false,
    DDL2: false,
    DDL31: false,
    DDL32: false,
    DDL41: false,
    DDL42: false,
    DDL51: false,
    DDL52: false,
    DDL53: false,
    DDL54: false,
    DDS11: false,
    DDS12: false,
    DDS13: false,
    DDS14: false,
    DDS21: false,
    DDS22: false,
    DDS3: false,
    DDS4: false,
    DDS5: false,
    CitaId: 0
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
  ticket: any = this.reservadetail;
  duraciones: any = [];
  frecuencias: any = [];
  antheredofamiliars: any = [];
  antnopatologicos: any = [];
  antpatologicos: any = [];
  ant1elegidos: any = [];
  ant2elegidos: any = [];
  ant3elegidos: any = [];
  elegidosduracion: any = [];
  elegidosfrecuencia: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private duracionService: DuracionService,
    private frecuenciaService: FrecuenciaService,
    private duracioncitaService: DuracioncitaService,
    private antpatologicoService: AntpatologicoService,
    private detallecitaService: DetallecitacitaService,
    private frecuenciacitaService: FrecuenciacitaService,
    private antnopatologicoService: AntnopatologicoService,
    private dermatomafrontalService: DermatomafrontalService,
    private antheredofamiliarService: AntheredofamiliarService,
    private antpatologicocitaService: AntpatologicocitaService,
    private dermatomaposteriorService: DermatomaposteriorService,
    private antnopatologicocitaService: AntnopatologicocitaService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }
  saveduracion() {
    this.duracionService.saveDuracion(this.duracion).subscribe(
      resduracion => {
        this.duracion1 = resduracion;
        const parametro = this.duracion1.id;
        let bandera = false;
        let ubicacion = 0;
        const array: any = this.elegidosduracion;
        if (Object.entries(array).length > 0) {
          for (const num of array) {
            if (num === parametro) {
              bandera = true;
              ubicacion = array.indexOf(parametro);
              array.splice(ubicacion, 1);
              this.elegidosduracion = array;
            }
          }
          if (bandera === false) {
            this.elegidosduracion.push(parametro);
          }
        } else {
          this.elegidosduracion.push(parametro);
        }
      }, err => {
        this.toastr.error('Error Api create duracion');
      }
    );
  }
  saveantecedente1() {
    this.antheredofamiliarService.saveAntHeredoFamiliar(this.antecedentehf).subscribe(
      resantheredofamiliar => {
        this.antecedentehf1 = resantheredofamiliar;
        const parametro = this.antecedentehf1.id;
        let bandera = false;
        let ubicacion = 0;
        const array: any = this.ant1elegidos;
        if (Object.entries(array).length > 0) {
          for (const num of array) {
            if (num === parametro) {
              bandera = true;
              ubicacion = array.indexOf(parametro);
              array.splice(ubicacion, 1);
              this.ant1elegidos = array;
            }
          }
          if (bandera === false) {
            this.ant1elegidos.push(parametro);
          }
        } else {
          this.ant1elegidos.push(parametro);
        }
      }, err => {
        this.toastr.error('Error Api create antecedente heredo familiar');
      }
    );
  }
  saveantecedente2() {
    this.antpatologicoService.saveAntPatologico(this.antecedentep).subscribe(
      resantpatologico => {
        this.antecedentep1 = resantpatologico;
        const parametro = this.antecedentep1.id;
        let bandera = false;
        let ubicacion = 0;
        const array: any = this.ant3elegidos;
        if (Object.entries(array).length > 0) {
          for (const num of array) {
            if (num === parametro) {
              bandera = true;
              ubicacion = array.indexOf(parametro);
              array.splice(ubicacion, 1);
              this.ant3elegidos = array;
            }
          }
          if (bandera === false) {
            this.ant3elegidos.push(parametro);
          }
        } else {
          this.ant3elegidos.push(parametro);
        }
      }, err => {
        this.toastr.error('Error Api create antecedente patologico');
      }
    );
  }
  onchangeselect(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.ant1elegidos;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.ant1elegidos = array;
        }
      }
      if (bandera === false) {
        this.ant1elegidos.push(parametro);
      }
    } else {
      this.ant1elegidos.push(parametro);
    }
    console.log('antecedente1 ' + parametro);
  }
  onchangeselect2(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.ant2elegidos;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.ant2elegidos = array;
        }
      }
      if (bandera === false) {
        this.ant2elegidos.push(parametro);
      }
    } else {
      this.ant2elegidos.push(parametro);
    }
  }
  onchangeselect3(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.ant3elegidos;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.ant3elegidos = array;
        }
      }
      if (bandera === false) {
        this.ant3elegidos.push(parametro);
      }
    } else {
      this.ant3elegidos.push(parametro);
    }
  }
  onchangeselect4(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.elegidosfrecuencia;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.elegidosfrecuencia = array;
        }
      }
      if (bandera === false) {
        this.elegidosfrecuencia.push(parametro);
      }
    } else {
      this.elegidosfrecuencia.push(parametro);
    }
  }
  onchangeselect5(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.elegidosduracion;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.elegidosduracion = array;
        }
      }
      if (bandera === false) {
        this.elegidosduracion.push(parametro);
      }
    } else {
      this.elegidosduracion.push(parametro);
    }
  }
  getduraciones() {
    this.duracionService.getDuracions().subscribe(
      res => {
        this.duraciones = res;
      }, err => {
        this.toastr.error('Error Api Get Duraciones');
      }
    );
  }
  getfrecuencias() {
    this.frecuenciaService.getFrecuencias().subscribe(
      res => {
        this.frecuencias = res;
      }, err => {
        this.toastr.error('Error Api Get Frecuencias');
      }
    );
  }
  getantheredofamiliares() {
    this.antheredofamiliarService.getAntHeredoFamiliars().subscribe(
      res => {
        this.antheredofamiliars = res;
      }, err => {
        this.toastr.error('Error Api Get antecedentes heredofamiliares');
      }
    );
  }
  getantnopatologicos() {
    this.antnopatologicoService.getAntNoPatologicos().subscribe(
      res => {
        this.antnopatologicos = res;
      }, err => {
        this.toastr.error('Error Api Get antecedentes no patologicos');
      }
    );
  }
  getantpatologicos() {
    this.antpatologicoService.getAntPatologicos().subscribe(
      res => {
        this.antpatologicos = res;
      }, err => {
        this.toastr.error('Error Api Get antecedentes patologicos');
      }
    );
  }
  registrar() {
    console.log(this.ant1elegidos);
    console.log(this.ant2elegidos);
    console.log(this.ant3elegidos);
    console.log(this.elegidosfrecuencia);
    console.log(this.elegidosduracion);
    // console.log(this.reserva);
    // console.log(this.detallecita);
    // console.log(this.frontbody);
    // console.log(this.endbody);
  }

  adelantef(par1: string, par2: boolean) {
    const objeto = this.frontbody;
    // tslint:disable-next-line: forin
    for (const key in objeto) {
      if (par1 === key) {
        this.frontbody[key] = par2;
      }
    }
  }

  atrasp(par1: string, par2: boolean) {
    const objeto = this.endbody;
    // tslint:disable-next-line: forin
    for (const key in objeto) {
      if (par1 === key) {
        this.endbody[key] = par2;
      }
    }
  }

  ngOnInit(): void {
    const FechaActual = new Date();
    this.getduraciones();
    this.getfrecuencias();
    this.getantheredofamiliares();
    this.getantnopatologicos();
    this.getantpatologicos();
    const params = this.activatedRoute.snapshot.params;
    this.codigocita = params.id;
    this.reservaService.getCita(this.codigocita).subscribe(
      rescita => {
        this.reserva = rescita;
        this.ticket = rescita;
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
        const codigo = this.ticket.id;
        this.elcodigo = codigo;
        this.toastr.success('Historia del Dolor');
        const estado = this.reserva.Type;
        if (estado === 'normal') {
          this.router.navigate(
            [
              'admin',
              'home'
            ]
          );
        }
      },
      err => {
        this.toastr.error('Error Api GET cita');
      }
    );
    this.detallecitaService.getDetalleCitaCita(this.codigocita).subscribe(
      resdetallecita => {
        this.detallecita = resdetallecita;
      },
      err => {
        this.toastr.error('Error Api GET detalle cita');
      }
    );
    this.dermatomafrontalService.getDermatomafrontalCita(this.codigocita).subscribe(
      resfrontal => {
        this.frontbody = resfrontal;
      },
      err => {
        this.toastr.error('Error Api GET detalle cita');
      }
    );
    this.dermatomaposteriorService.getDermatomaposteriorCita(this.codigocita).subscribe(
      resposterior => {
        this.endbody = resposterior;
      },
      err => {
        this.toastr.error('Error Api GET detalle cita');
      }
    );
  }

  atras() {
    this.router.navigate(
      [
        'admin',
        'home'
      ]
    );
  }
  registrarhistoria() {
    this.reserva.Condition = 'atendido';
    const parametrodetalle = this.detallecita.id;
    const parametrofrontal = this.frontbody.id;
    const parametroposterior = this.endbody.id;
    const array = this.ant1elegidos;
    const array2 = this.ant2elegidos;
    const array3 = this.ant3elegidos;
    const array4 = this.elegidosduracion;
    const array5 = this.elegidosfrecuencia;
    const parametro: ListAntHeredoFamiliarCita = {
      Condition: 'activo',
      DetallecitaId: parametrodetalle,
      AntecedenteheredofamiliarId: 0
    };
    const parametro2: ListAntNoPatologicoCita = {
      Condition: 'activo',
      DetallecitaId: parametrodetalle,
      AntecedentenopatologicoId: 0
    };
    const parametro3: ListAntPatologicoCita = {
      Condition: 'activo',
      DetallecitaId: parametrodetalle,
      AntecedentepatologicoId: 0
    };
    const parametro4: ListDuracionCita = {
      Condition: 'activo',
      DetallecitaId: parametrodetalle,
      FrecuenciaId: 0
    };
    const parametro5: ListFrecuenciaCita = {
      Condition: 'activo',
      DetallecitaId: parametrodetalle,
      DuracionId: 0
    };
    for (const item1 of array) {
      parametro.AntecedenteheredofamiliarId = item1;
      this.antheredofamiliarcitaService.saveAntHeredoFamiliarCita(parametro).subscribe(
        ressave1 => {
          console.log(ressave1);
        }, err => {
          this.toastr.error('Error api save antecedente heredo familiar - cita');
        }
      );
    }
    for (const item2 of array2) {
      parametro2.AntecedentenopatologicoId = item2;
      this.antnopatologicocitaService.saveAntNoPatologicoCita(parametro2).subscribe(
        ressave2 => {
          console.log(ressave2);
        }, err => {
          this.toastr.error('Error api save antecedente no patologico - cita');
        }
      );
    }
    for (const item3 of array3) {
      parametro3.AntecedentepatologicoId = item3;
      this.antpatologicocitaService.saveAntPatologicoCita(parametro3).subscribe(
        ressave3 => {
          console.log(ressave3);
        }, err => {
          this.toastr.error('Error api save antecedente patologico - cita');
        }
      );
    }
    for (const item4 of array4) {
      parametro4.FrecuenciaId = item4;
      this.frecuenciacitaService.saveFrecuenciaCita(parametro4).subscribe(
        ressave4 => {
          console.log(ressave4);
        }, err => {
          this.toastr.error('Error api save frecuencia - cita');
        }
      );
    }
    for (const item5 of array5) {
      parametro5.DuracionId = item5;
      this.duracioncitaService.saveDuracionCita(parametro5).subscribe(
        ressave5 => {
          console.log(ressave5);
        }, err => {
          this.toastr.error('Error api save duracion - cita');
        }
      );
    }
    this.reservaService.updateCita(this.elcodigo, this.reserva).subscribe(
      actualizacioncita => {
        this.mensaje = actualizacioncita;
        this.toastr.info('Datos Registrados');
      }, err => {
        this.toastr.error('Error actualizar historial dolor');
      }
    );
    this.detallecitaService.updateDetalleCita(parametrodetalle, this.detallecita).subscribe(
      actualizaciondetalle => {
        this.mensaje1 = actualizaciondetalle;
        this.toastr.info('Datos Registrados');
      }, err => {
        this.toastr.error('Error actualizar historial dolor');
      }
    );
    this.dermatomafrontalService.updateDermatomafrontal(parametrofrontal, this.frontbody).subscribe(
      actualizacionfrontal => {
        this.mensaje2 = actualizacionfrontal;
        this.toastr.info('Datos Registrados');
      }, err => {
        this.toastr.error('Error actualizar historial dolor');
      }
    );
    this.dermatomaposteriorService.updateDermatomaposterior(parametroposterior, this.endbody).subscribe(
      actualizacionposterior => {
        this.mensaje3 = actualizacionposterior;
        this.toastr.info('Datos Registrados');
      }, err => {
        this.toastr.error('Error actualizar historial dolor');
      }
    );
  }
}
