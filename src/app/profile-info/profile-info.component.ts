import { Component, OnInit } from '@angular/core';

import { mockProfile } from './mock-profile';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  profile: Profile = mockProfile;
}
