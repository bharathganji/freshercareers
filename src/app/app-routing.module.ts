import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './client/modules/components/about-us/about-us.component';
import { AdvertiseWithUsComponent } from './client/modules/components/advertise-with-us/advertise-with-us.component';
import { ContactComponent } from './client/modules/components/contact/contact.component';
import { DisclaimerComponent } from './client/modules/components/disclaimer/disclaimer.component';
import { HomePageComponent } from './client/modules/components/home-page/home-page.component';
import { NotFoundComponent } from './client/modules/components/not-found/not-found.component';
import { PostAJobComponent } from './client/modules/components/post-a-job/post-a-job.component';
import { PostviewComponent } from './client/modules/components/postview/postview.component';
import { PrivacyPolicyComponent } from './client/modules/components/privacy-policy/privacy-policy.component';
import { SearchPostsComponent } from './client/modules/components/search-posts/search-posts.component';
import { SuccessPageComponent } from './client/modules/components/success-page/success-page.component';

const routes: Routes = [
  { path: 'post/:id', component: PostviewComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'advertise', component: AdvertiseWithUsComponent },
  { path: 'search', component: SearchPostsComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: 'postjob', component:PostAJobComponent },

  { path: '', component: HomePageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
