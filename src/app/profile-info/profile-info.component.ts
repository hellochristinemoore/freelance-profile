import { Component, OnInit } from '@angular/core';

import { Profile } from './profile.model'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  /* profiles: Profile [] = [
    new Profile('John', 'Doe', 45)
  ]; */
  profiles : Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
