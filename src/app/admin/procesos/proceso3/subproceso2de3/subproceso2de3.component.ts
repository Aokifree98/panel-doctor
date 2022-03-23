import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subproceso2de3',
  templateUrl: './subproceso2de3.component.html',
  styleUrls: ['./subproceso2de3.component.css']
})
export class Subproceso2de3Component implements OnInit {
  bandera = false;
  constructor(

  ) { }
  prueba(events) {
    this.bandera = !this.bandera;
    const id = events.path[1].id;
    const par = document.getElementById(id);
    if (this.bandera === true) {
      par.style.setProperty('fill', 'red');
      par.style.setProperty('stroke', 'green');
      par.style.setProperty('stroke-width', '1px');
    } else {
      par.style.setProperty('fill', 'black');
      par.style.setProperty('stroke', 'black');
      par.style.setProperty('stroke-width', '1px');
    }
  }
  ngOnInit(): void {

  }

}
