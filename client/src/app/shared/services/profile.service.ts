import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Profile} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient){

  }

  create(profile: Profile): Observable<Profile>{
    return this.http.post<Profile>('/api/profile', profile);
  }

  fetch(): Observable<Profile[]>{
    return this.http.get<Profile[]>('/api/profile');
  }
}
