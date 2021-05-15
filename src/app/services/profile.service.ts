import { Injectable } from '@angular/core';
import { profileRecord } from '../database/profile';
import { Profile } from '../types/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getProfile(): Profile {
    return profileRecord;
  }
}
