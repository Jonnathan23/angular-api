import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ConectionService } from '../../services/conection.service';
import { Cliente } from '../../../assets/types';
import { EmptyInputErrors } from '../../Errors/errors';
import { deleteSucces, emptyInputs, modifyError } from '../../Errors/alerts';

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
  nombre = "";
  direccion = "";

  constructor(private apiConnect: ConectionService, private obrserver: ChangeDetectorRef) { }

  login(form: NgForm) {
    const newClient: Cliente = {
      cedula: form.value.cedula,
      nombre: form.value.name,
      direccion: form.value.direction
    }

    this.createClient(newClient)

  }

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.clients = []
    this.apiConnect.getAllClients().subscribe(data => {
      this.clients = data;
      this.obrserver.detectChanges()
    })
  }

  createClient(newClient: Cliente) {
    try {
      if (!newClient.cedula && !newClient.direccion && !newClient.nombre) {
        throw new EmptyInputErrors('Error, campos vacios')
      }
       this.apiConnect.createClient(newClient)!.subscribe({
        next: (res) => {
          this.getClientes()
          this.clearFormylary()
        }, error: (e) => modifyError()

      })

    } catch (error) {
      /*
      if (error instanceof EmptyInputErrors) {
        if (!newClient.cedula) emptyInputs('Cedula')
        if (!newClient.nombre) emptyInputs('Nombre')
        if (!newClient.direccion) emptyInputs('Direccion')
      }
        */
    }
  }

  clearFormylary() {
    this.id = ""
    this.nombre = ""
    this.direccion = ""
  }

  deleteClient(cedula: string) {
    this.apiConnect.deleteClient(cedula).subscribe({
      next: (res) => {
        this.getClientes()
        deleteSucces()
      },

    })
  }

  updateClient(form: NgForm) {
    const clientUpdate: Cliente = {
      cedula: form.value.cedula,
      nombre: form.value.name,
      direccion: form.value.direction

    }

    try {

      this.apiConnect.updateClient(clientUpdate).subscribe({
        next: (res) => this.getClientes(),
        error: (error) => modifyError()
      })
      this.clearFormylary()
    } catch (error) {

    }

  }

  getValues(cedula: string, direccion: string, nombre: string) {
    this.id = cedula;
    this.direccion = direccion;
    this.nombre = nombre;
  }

}
