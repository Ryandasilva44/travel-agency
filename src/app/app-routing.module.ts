import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './about/about/about.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HeaderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'page', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
