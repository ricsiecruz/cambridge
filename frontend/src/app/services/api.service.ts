import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get('http://localhost:3000/articles')
  }

  getArticle(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/articles/${id}`)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/articles/${id}`, data);
  }
}
