import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path:'create',
    pathMatch:'full',//verification stricte il faut avoir /create ni moins ni plus 
    component:MemberFormComponent
  
  },
  {path:'',
    pathMatch:'full',//verification stricte il faut avoir /create ni moins ni plus 
    component:MemberComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
