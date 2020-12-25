import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { storageRooms } from "../storage-rooms";

@Component({
  selector: "app-storage-room-details",
  templateUrl: "./storage-room-details.component.html",
  styleUrls: ["./storage-room-details.component.css"]
})
export class StorageRoomDetailsComponent implements OnInit {
  storageRoom;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the storage-room id from the current route.
    const storageRoomId = this.route.snapshot.paramMap.get("storageRoomId");
    // Find the product that correspond with the id provided in route.
    this.storageRoom = storageRooms.find(storageRoom => {
      return storageRoom.id == Number(storageRoomId);
    });
  }
}
