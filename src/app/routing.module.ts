import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { HobbiespageComponent } from './hobbiespage/hobbiespage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { SkillspageComponent } from './skillspage/skillspage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    data: { state: 'home'}
  },
  {
    path: "about",
    component: AboutmeComponent,
    data: { state: 'aboutme'}
  },
  {
    path: "portfolio",
    component: PortfoliopageComponent,
    data: { state: 'portfolio'}
  },
  {
    path: "hobbies",
    component: HobbiespageComponent,
    data: { state: 'hobbies'}
  },
  {
    path: "contact",
    component: ContactpageComponent,
    data: { state: 'contact'}
  },
  {
    path: "skills",
    component: SkillspageComponent,
    data: { state: 'skills'}
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
