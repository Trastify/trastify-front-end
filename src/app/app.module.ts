import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

import { StorageRoomListComponent } from "./storage-room-list/storage-room-list.component";
import { StorageRoomDetailsComponent } from "./storage-room-details/storage-room-details.component";
import { NewOwnerComponent } from "./new-owner/new-owner.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: StorageRoomListComponent },
      {
        path: "storage-rooms/:storageRoomId",
        component: StorageRoomDetailsComponent
      },
      {
        path: "new-owner",
        component: NewOwnerComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    StorageRoomListComponent,
    StorageRoomDetailsComponent,
    NewOwnerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
