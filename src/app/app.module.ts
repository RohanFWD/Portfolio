import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { ContactComponent } from './contact/contact.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { PnfComponent } from './pnf/pnf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  
    ContactComponent,
   
    NavbarComponent,
    HomeComponent,
    SkillComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
