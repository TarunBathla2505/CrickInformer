import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _HttpClient:HttpClient) { }

  getAllMatches(){
    return this._HttpClient.get(`${environment.apiUrl}/match`)
  }

  getLiveMatches(){
    return this._HttpClient.get(`${environment.apiUrl}/match/live`)
  }
  getPointTable(){
    return this._HttpClient.get(`${environment.apiUrl}/match/point-table`)
  }
}
