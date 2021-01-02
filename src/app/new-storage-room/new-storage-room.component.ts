import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new-storage-room',
  templateUrl: './new-storage-room.component.html',
  styleUrls: ['./new-storage-room.component.css']
})
export class NewStorageRoomComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
