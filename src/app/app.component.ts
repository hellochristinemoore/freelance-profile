import { Component } from '@angular/core';
import { Profile } from './profile-info/profile.model';
import { ProfileService } from './services/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'freelance-profile';
  profile : Profile;

  //Dependency Inject ProfileService below 
  constructor(private profileService: ProfileService) {}

  getProfileService(): void {
    this.profile = this.profileService.getProfile();
  }

  ngOnInit() {
    this.getProfileService();
  }
}

