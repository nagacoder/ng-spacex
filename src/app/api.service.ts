import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDragons() {
    return this.http.get('https://api.spacexdata.com/v3/dragons?limit=10');
  }

  login(body: any) {
    return this.http.post('https://api.garar.id/v1/auth/login', body);
  }
}
