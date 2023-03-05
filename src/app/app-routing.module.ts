import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrainPageComponent } from 'src/features/brain-homepage/brain-page.component';
import { MainPageComponent } from 'src/features/main-page/main-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'brain-page', component: BrainPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: '',redirectTo: '/main',pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
