import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    if (this.doctorService.isLoggedIn()) {
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
    this.doctorService.client$.subscribe(res => {
      if (res) {
        this.router.navigate(
          [
            'admin',
            'home'
          ]
        );
      }
    });
  }

}
