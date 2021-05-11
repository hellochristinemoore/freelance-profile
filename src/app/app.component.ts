import { Component } from '@angular/core';
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
  projects: Project[];
 
  
  //Dependency Inject ProfileService & ProjectService below 
  constructor(private profileService: ProfileService, private projectService: ProjectService ) {}

  getProfileService(): void {
    this.profile = this.profileService.getProfile();
  }

  getProjectService(): void {
    this.projects = this.projectService.getProject();
  }

  ngOnInit() {
    this.getProfileService(), this.getProjectService();
  }
}


