import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./../app/components/home/home.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
