import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {userRoutes} from './user.routes';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [
  ]
})
export class UserModule {
}
