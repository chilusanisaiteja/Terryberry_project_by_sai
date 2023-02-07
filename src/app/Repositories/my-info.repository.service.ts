import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyInfoRepositoryService {
  constructor(private http: HttpClient) {}
  private infodataurl = 'api/myInfo';

  async getMyInfo() {
    return this.http.get(this.infodataurl);
  }
}
