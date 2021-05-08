import { Injectable } from '@angular/core';
import { profileRecord } from '../database/profile';
import { Profile } from '../profile-info/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile(): Profile {
    return profileRecord;
  }
}
