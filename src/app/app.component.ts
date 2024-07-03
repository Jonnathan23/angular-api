import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularyComponent } from "./components/formulary/formulary.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormularyComponent]
})
export class AppComponent {
  title = 'angular-api';
}
