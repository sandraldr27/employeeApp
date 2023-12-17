import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-empleados', pathMatch: 'full' }, //Si entro directamente a localhost 4200 me redireccionará al componente lista-empleados
  { path: '**', redirectTo: 'lista-empleados', pathMatch: 'full' }, //Si ingreso cualquier ruta no válida, me redireccionará al componente lista-empleados
  { path: 'lista-empleados', component: ListaEmpleadosComponent },
  { path: 'create- empleado', component: CreateEmpleadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
