import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListLaboratoriodos } from '../models/listlaboratoriodos';

@Injectable({
  providedIn: 'root'
})
export class LaboratoriodosService {
  apiUrl = this.wasa.apiUrlGlobal + '/laboratoriodos';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getLaboratorios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getLaboratorio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getLaboratorioTipo(tipo: string) {
    return this.http.get(`${this.apiUrl}/filtro/${tipo}`);
  }

  deleteLaboratorio(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveLaboratorio( Laboratorio: ListLaboratoriodos) {
    return this.http.post(`${this.apiUrl}/create`, Laboratorio);
  }

  updateLaboratorio(id: string|number, updatedLaboratorio: ListLaboratoriodos): Observable<ListLaboratoriodos> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedLaboratorio);
  }
}
