import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { PnfComponent } from './pnf/pnf.component';


const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'skill',component:SkillComponent},
  {path:'education',component:EducationComponent},
  {path:'project',component:ProjectComponent},
  {path:'exp',component:ExperienceComponent},
 {path:'contact',component:ContactComponent},
 {path: "**" , component:PnfComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
