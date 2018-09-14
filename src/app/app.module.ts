import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HobbiespageComponent } from './hobbiespage/hobbiespage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
import { RoutingModule } from './/routing.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactpageComponent,
    HobbiespageComponent,
    HomepageComponent,
    PortfoliopageComponent,
    SkillspageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
