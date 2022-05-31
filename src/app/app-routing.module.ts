import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './client/modules/components/home-page/home-page.component';
import { PostviewComponent } from './client/modules/components/postview/postview.component';

const routes: Routes = [
  { path: 'post/:id', component: PostviewComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo:'/',pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
