import { Routes } from '@angular/router';
import { FormularyComponent } from './components/formulary/formulary.component';

export const routes: Routes = [
    {path:'formulary', title:'formulary', component:FormularyComponent},
    {path: '', redirectTo:'formulary', pathMatch:'full'}
];
