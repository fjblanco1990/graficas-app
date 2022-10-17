import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getDataRedesSociales() {
      return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getDataRedesSociales().pipe(
      map(
        data => {
          // const labels = Object.keys( data );
          // const values = Object.values( data);
          return {
            labels: Object.keys( data ) , datasets: [{ data:  Object.values( data) }]
          };
        }
      )
    )
  }

}
