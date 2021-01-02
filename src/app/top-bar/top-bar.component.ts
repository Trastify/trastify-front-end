import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  isSignedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isSignedIn = this.authService.isSignedIn();
  }

  signup() {
    if (this.isSignedIn) {
      console.log('Creamos trastero');
      this.router.navigateByUrl('new-storage-room');
    } else {
      this.router.navigateByUrl('signup');
    }
  }

  logout() {
    this.authService.logout();
    this.isSignedIn = false;
  }

}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/