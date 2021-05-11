import { Component, Input /*ChangeDetectionStrategy*/ } from '@angular/core';
import { Project } from '../types/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

// @Input() allows a parent component (app.component) to update data in the child component (project.component)
export class ProjectComponent {
  @Input()
  projects: Project[];
}
