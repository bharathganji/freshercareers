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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
