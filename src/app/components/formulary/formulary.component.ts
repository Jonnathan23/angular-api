import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ConectionService } from '../../services/conection.service';
import { Cliente } from '../../../assets/types';

@Component({
  selector: 'app-formulary',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulary.component.html',
  styleUrl: './formulary.component.scss'
})
export class FormularyComponent {

  clients: Cliente[] = []
  id = "";
  name = "";
  direction = "";

  constructor(private apiConnect: ConectionService, private obrserver: ChangeDetectorRef) { }

  login(form: NgForm) {
    const newClient: Cliente = {
      cedula: form.value.cedula,
      nombre: form.value.name,
      direccion: form.value.direction
    }

    this.createClient(newClient, form)

  }

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.apiConnect.getAllClients().subscribe(data => {
      this.clients = data;
      this.obrserver.detectChanges()
    })
  }

  createClient(newClient: Cliente, form: NgForm) {
    this.apiConnect.createClient(newClient).subscribe({
      next: (res) => {
        this.getClientes()
        this.clearFormylary(form)
      }
    })
  }

  clearFormylary(form: NgForm) {
    form.value.cedula = ""
    form.value.name = ""
    form.value.direction = ""
  }

  deleteClient(cedula: any) {
    this.apiConnect.deleteClient(cedula).subscribe({
      next: (res) => this.getClientes()
    })
  }

  updateClient(form: NgForm) {
    /*const clientUpdate: Cliente = {
      cedula: this.id,
      nombre: this.name,
      direccion: this.direction
    }*/

    const clientUpdate: Cliente = {
      cedula: form.value.cedula,
      nombre: form.value.name,
      direccion: form.value.direction

    }

    this.apiConnect.updateClient(clientUpdate).subscribe({
      next: (res) => this.getClientes()
    })
    this.clearFormylary(form)
  }

  getValues(c: any, d: any, n: any) {
    this.id = c;
    this.direction = d;
    this.name = n;
  }

}
