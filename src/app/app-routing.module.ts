import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CommentComponent } from './comment/comment.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [{ path: '', component: HomeComponent,},
                        { path: 'playlist', component: PlaylistComponent },
                        { path: 'login', component:LoginComponent},
                        { path: 'registration', component:RegistrationComponent},
                        {path: 'comment',component:CommentComponent},
                      
                         //therwise redirect to home
                          { path: '**', redirectTo: '' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }