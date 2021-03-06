import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'sessions',
    component: SessionsComponent,
    children: [{ path: ':id', component: SessionDetailsComponent }],
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
