import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-profile-project',
  templateUrl: './profile-project.component.html',
  styleUrls: ['./profile-project.component.css']
})

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

