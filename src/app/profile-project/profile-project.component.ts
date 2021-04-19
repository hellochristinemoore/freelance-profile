import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Project } from './project.module';

@Component({
  selector: 'app-profile-project',
  templateUrl: './profile-project.component.html',
  styleUrls: ['./profile-project.component.css']
})
export class ProfileProjectComponent implements OnInit {
  projects: Project[] = [
    new Project('Shoprite Knect', 'Angular & SQL', 4000000),
    new Project('Spar Rewards', 'Vue, React, SQL', 5250000),
    new Project('eBucks PaySmart', 'Python', 325000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
