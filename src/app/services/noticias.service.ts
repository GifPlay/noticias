import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=ad26b0c6d6f34cee82abf06b7637cf30`);
  }
}
