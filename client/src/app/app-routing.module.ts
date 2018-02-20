import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { EditPartialComponent } from './edit-partial/edit-partial.component';

const routes: Routes = [
    {path: 'add', component: AddComponent },
    {path: 'home', component: HomeComponent },
    {path: 'edit-partial', component: EditPartialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
