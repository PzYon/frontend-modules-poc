import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularLibraryService {

  constructor() {
  }

  getRandomValue() {
    return Math.random();
  }
}
