import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomepageComponent} from './components/homepage/homepage.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
    {
        path: '',
        component:  HomepageComponent
    },
    {
        path: 'dashboard',
        component : DashboardComponent
    },
    {
        path: '**',
        component: HomepageComponent
    }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
