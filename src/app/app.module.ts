import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SearchBarComponent } from './nav-bar/search-bar/search-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { GetNotifiedComponent } from './home-page/get-notified/get-notified.component';
import { ContributersComponent } from './about/contributers/contributers.component';
import { SessionsComponent } from './sessions/sessions.component';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './about/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    SearchBarComponent,
    HomePageComponent,
    AboutComponent,
    GetNotifiedComponent,
    ContributersComponent,
    SessionsComponent,
    BlogComponent,
    ContactFormComponent,
    SessionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
