import { Injectable } from '@angular/core';
import { projectRecords } from '../database/project';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Project[] {
    return projectRecords;
  }
}
