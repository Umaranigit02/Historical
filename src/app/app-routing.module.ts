import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'gallery',component:GalleryComponent},
{path:'about',component:AboutComponent},
{path:'learnmore',component:LearnmoreComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
