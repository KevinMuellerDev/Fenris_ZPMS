import { Injectable } from '@angular/core';
import { ToolJob } from '../interfaces/tool-job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = "http://127.0.0.1:3000/job"
  constructor(private http: HttpClient) { }

  getJobs(): Observable<ToolJob[]>{
    return this.http.get<ToolJob[]>(this.dataUrl);
  }
}
