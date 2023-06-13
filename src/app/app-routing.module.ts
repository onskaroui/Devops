import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-emlpoyee/add-emlpoyee.component';

const routes: Routes = [

  { path: 'add-employee', component: AddEmployeeComponent },
  { path: '', redirectTo: '/add-employee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
