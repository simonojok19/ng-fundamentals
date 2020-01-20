import { NgModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';

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
