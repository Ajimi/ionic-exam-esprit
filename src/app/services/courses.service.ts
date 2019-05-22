import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  BASE_URL = 'http://localhost:1616/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.BASE_URL + 'selectAll');
  }
  
  updateCours(id){
    return this.http.get(this.BASE_URL + 'updateCours?id='+id);
  }
}
