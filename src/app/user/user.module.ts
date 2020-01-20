import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {userRoutes} from './user.routes';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
  ]
})
export class UserModule {
}
