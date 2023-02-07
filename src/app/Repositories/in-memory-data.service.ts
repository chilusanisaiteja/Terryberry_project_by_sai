import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  createDb() {
    const myInfo = [
      {
        id: 1,
        name: 'Sai Teja',
        dob: '22/07/1999',
        city: 'hanamkonda',
        state: 'Telanagana',
        pincode: 506001,
        college: 'indian institute of technology Hyderabad',
        mobile: 8555076996,
        email: 'chilusanisaitejaiithyderabad07@gmail.com',
        intrests:
          'Travelling and outdoor activities, Reading, Arts and crafts, Sports, Learning a new language, Coding, Chess',
      },
    ];
    return { myInfo };
  }
}
