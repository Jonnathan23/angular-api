import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../assets/types';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http: HttpClient) { }


  getAllClients() {
    return this.http.get<Cliente[]>('http://localhost:8080/demojakarta/rs/clientes')
  }

  getClient(data: any) {
    return this.http.post('http://localhost:8080/demojakarta/rs/clientes', data);
  }

  createClient(data: Cliente) {
    return this.http.post('http://localhost:8080/demojakarta/rs/clientes', data);
  }

  deleteClient(id: string) {
    return this.http.delete(`http://localhost:8080/demojakarta/rs/clientes?id=${id}`);
  }

  updateClient(data: any) {
    return this.http.put('http://localhost:8080/demojakarta/rs/clientes', data);
  }
}
