import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public sidebarMinimized = false;
  public sidebarColor = 'red';
  client;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  // tslint:disable-next-line: member-ordering
  public parametrodeimagen = 0;
  // tslint:disable-next-line: member-ordering
  wasa = '../assets/img/sidebar-5.jpg';
  // tslint:disable-next-line: member-ordering
  raiz = '../assets/img/';
  // tslint:disable-next-line: member-ordering
  fondo1 = this.raiz + 'sidebar-1.jpg';
  // tslint:disable-next-line: member-ordering
  fondo2 = this.raiz + 'sidebar-2.jpg';
  // tslint:disable-next-line: member-ordering
  fondo3 = this.raiz + 'sidebar-3.jpg';
  // tslint:disable-next-line: member-ordering
  fondo4 = this.raiz + 'sidebar-4.jpg';
  constructor(
    private router: Router,
    private doctorService: DoctorService
  ) { }
  cambiarimagen(param) {
    this.parametrodeimagen = param;
    switch (this.parametrodeimagen) {
      case 1:
        this.wasa = this.fondo1;
        break;
      case 2:
        this.wasa = this.fondo2;
        break;
      case 3:
        this.wasa = this.fondo3;
        break;
      case 4:
        this.wasa = this.fondo4;
        break;
      default:
        this.wasa = '../assets/img/sidebar-5.jpg';
        break;
    }
  }

  loggout() {
    this.doctorService.loggout();
    this.router.navigate(
      [
        'auth',
        'login'
      ]
    );
  }
  ngOnInit(): void {
    if (this.doctorService.isLoggedIn()) {
      this.client = JSON.parse(localStorage.getItem('doctor'));
      this.router.navigate(
        [
          'admin',
          'home'
        ]
      );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
  }

}
