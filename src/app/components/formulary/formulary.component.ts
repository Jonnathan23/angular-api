import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulary.component.html',
  styleUrl: './formulary.component.scss'
})
export class FormularyComponent {

  login(form: NgForm) {    
    const cedula = form.value.cedula;
    console.log(cedula)

  }

}
