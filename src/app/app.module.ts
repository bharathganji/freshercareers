import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './client/modules/components/header/header.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MaterialExampleModule } from 'src/material.module';
import { BannersComponent } from './client/modules/components/banners/banners.component';
import { SearchComponent } from './client/modules/components/search/search.component';
import { JobsComponent } from './client/modules/components/jobs/jobs.component';
import { CardviewComponent } from './client/modules/components/cardview/cardview.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostviewComponent } from './client/modules/components/postview/postview.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './client/modules/components/home-page/home-page.component';
import { LoadingComponent } from './client/modules/components/loading/loading.component';
import { FooterComponent } from './client/modules/components/footer/footer.component';
import { PrivacyPolicyComponent } from './client/modules/components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './client/modules/components/terms-and-conditions/terms-and-conditions.component';
import { DisclaimerComponent } from './client/modules/components/disclaimer/disclaimer.component';
import { AboutUsComponent } from './client/modules/components/about-us/about-us.component';
import { ContactComponent } from './client/modules/components/contact/contact.component';
import { AdvertiseWithUsComponent } from './client/modules/components/advertise-with-us/advertise-with-us.component';
import { SearchPostsComponent } from './client/modules/components/search-posts/search-posts.component';
import { NotFoundComponent } from './client/modules/components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessPageComponent } from './client/modules/components/success-page/success-page.component';
import { PostAJobComponent } from './client/modules/components/post-a-job/post-a-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannersComponent,
    SearchComponent,
    JobsComponent,
    CardviewComponent,
    PostviewComponent,
    HomePageComponent,
    LoadingComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    DisclaimerComponent,
    AboutUsComponent,
    ContactComponent,
    AdvertiseWithUsComponent,
    SearchPostsComponent,
    NotFoundComponent,
    SuccessPageComponent,
    PostAJobComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
