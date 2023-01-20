import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    // canActivate: [IsSignedInGuard]
  },
  { path: 'board', component: BoardComponent},
  { path: 'register', component: RegisterComponent,
  // canActivate: [IsNotSignedInGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
