import { Component, Injectable } from '@angular/core';
import { Profile } from './profile-info/profile.model';
import { ProfileService } from './services/profile.service';

import { Project } from './types/project';
import { ProjectService } from './services/project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'freelance-profile';
  profile : Profile;
  projects : Project;

  //Dependency Inject ProfileService below 
  constructor(private profileService: ProfileService) {}

  getProfileService(): void {
    this.profile = this.profileService.getProfile();
  }

  ngOnInit() {
    this.getProfileService();
  }
}

@Injectable()
  export class ProfileProjectComponent {
  projects: Project [];

  //Dependency Inject ProjectService below
  constructor(private projectService: ProjectService) {}

  getprojectService(): void {
    this.projects = this.projectService.getProject();
  }

  ngOnInit() {
    this.getprojectService();
  }
}