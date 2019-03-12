import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as env from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = env.environment.api;
  }

  getAll(docType: string) {
    return this.http.get(`${this.apiUrl}docs/${docType}`);
  }

  getLatest(docType: string) {
    return this.http.get(`${this.apiUrl}doc/${docType}`);
  }

  save(doc: any) {
    return this.http.post(`${this.apiUrl}docs`, doc);
  }

  delete(docType: string, docId: string) {
    return this.http.delete(`${this.apiUrl}doc/${docType}/${docId}`);
  }
}
