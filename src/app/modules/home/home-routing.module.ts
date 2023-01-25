import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotSignedInGuard } from 'src/app/core/guards/is-not-signed-in.guard';
import { IsSignedInGuard } from 'src/app/core/guards/is-signed-in.guard';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    canActivate: [IsSignedInGuard]
  },
  { path: 'board', component: BoardComponent,
    canActivate: [IsSignedInGuard]
  },
  { path: 'register', component: RegisterComponent,
    canActivate: [IsNotSignedInGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
