import { Component, OnInit } from "@angular/core";
import { storageRooms } from "../storage-rooms";

@Component({
  selector: "app-storage-room-list",
  templateUrl: "./storage-room-list.component.html",
  styleUrls: ["./storage-room-list.component.css"]
})
export class StorageRoomListComponent implements OnInit {
  storageRooms = storageRooms;

  constructor() {}

  ngOnInit() {}

  contact(){
      window.alert("Propietario contactado");
  }

  addToFavorites() {
    window.alert("Añadido a Favoritos");
  }
}
