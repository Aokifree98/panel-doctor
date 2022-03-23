import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subproceso1de3',
  templateUrl: './subproceso1de3.component.html',
  styleUrls: ['./subproceso1de3.component.css']
})
export class Subproceso1de3Component implements OnInit {
  bandera = false;
  bannderaatras = false;
  constructor(

  ) { }
  adelante(events) {
    this.bandera = !this.bandera;
    const id = events.path[1].id;
    const par = document.getElementById(id);
    if (this.bandera === true) {
      par.style.setProperty('fill', 'red');
      par.style.setProperty('stroke', 'green');
      par.style.setProperty('stroke-width', '1px');
    } else {
      par.style.setProperty('fill', 'beige');
      par.style.setProperty('stroke', 'black');
      par.style.setProperty('stroke-width', '1px');
    }
  }
  atras(events) {
    this.bannderaatras = !this.bannderaatras;
    const id = events.path[1].id;
    const par = document.getElementById(id);
    if (this.bandera === true) {
      par.style.setProperty('fill', 'red');
      par.style.setProperty('stroke', 'green');
      par.style.setProperty('stroke-width', '1px');
    } else {
      par.style.setProperty('fill', 'beige');
      par.style.setProperty('stroke', 'black');
      par.style.setProperty('stroke-width', '1px');
    }
  }
  ngOnInit(): void {
  }

}
