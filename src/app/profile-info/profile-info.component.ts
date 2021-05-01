import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Use @Input() to configure the parent (app.component) and child (profile-info.component)
export class ProfileInfoComponent {
  @Input()
  profile: Profile;
}
