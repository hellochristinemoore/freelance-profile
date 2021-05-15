import { Component, Input } from '@angular/core';
import { Project } from '../types/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})

// @Input() allows a parent component (app.component) to update data in the child component (project.component)
export class ProjectComponent {
  @Input()
  project: Project;
}
