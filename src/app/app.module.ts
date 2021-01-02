import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

import { StorageRoomListComponent } from "./storage-room-list/storage-room-list.component";
import { StorageRoomDetailsComponent } from "./storage-room-details/storage-room-details.component";
import { NewStorageRoomComponent } from './new-storage-room/new-storage-room.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


 

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: "", component: StorageRoomListComponent },
      {
        path: "storage-rooms/:storageRoomId",
        component: StorageRoomDetailsComponent
      },
      {
        path: "new-storage-room",
        component: NewStorageRoomComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    StorageRoomListComponent,
    StorageRoomDetailsComponent,
    NewStorageRoomComponent,
    LoginComponent,
    SignupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
