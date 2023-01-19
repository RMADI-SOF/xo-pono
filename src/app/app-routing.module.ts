import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { IsNotSignedInGuard } from './guards/is-not-signed-in.guard';
import { IsSignedInGuard } from './guards/is-signed-in.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    // canActivate: [IsSignedInGuard]
  },
  { path: 'board', component: BoardComponent},

  { path: 'register', component: RegisterComponent,
  canActivate: [IsNotSignedInGuard] 
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
