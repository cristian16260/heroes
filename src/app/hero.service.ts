import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesappUrl = 'https://localhost:44358/';
  private heroesapiUrl ='api/Heroe/';


  constructor(private http:HttpClient) {}

   getlisHeroes():Observable <any> {
      return this.http.get(this.heroesappUrl + this.heroesapiUrl);
   }
   
  deletehero(id :number): Observable<any> {
      return this.http.delete(this.heroesappUrl + this.heroesapiUrl + id);
  }
  
  savehero(hero: any): Observable<any>{
      return this.http.post(this.heroesappUrl + this.heroesapiUrl, hero);
  }

  detailhero(id: number):Observable<any>{
    return this.http.get(this.heroesappUrl + this.heroesapiUrl + id);
  }
}
