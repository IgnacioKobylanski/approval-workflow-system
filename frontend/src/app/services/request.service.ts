import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/request.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.apiUrl}/requests`;

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }
}