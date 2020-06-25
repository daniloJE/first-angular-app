import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CasinoComponent} from './casino/casino.component';


const routes: Routes = [
  { path: '', redirectTo: 'casino', pathMatch: 'full' },
  { path: 'casino', component: CasinoComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
