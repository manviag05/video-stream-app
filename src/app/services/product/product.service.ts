import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
  
  getcate():Observable<any>{
  
    let headers=new HttpHeaders().set('X-RapidAPI-Key','2819edd842msh09a84cb402a4b49p11e427jsn75ab8281f1e1').set( 'X-RapidAPI-Host','beers-list.p.rapidapi.com');
let url='https://beers-list.p.rapidapi.com/beers/italy';
return this.http.get(url,{headers});
}

getproduct():Observable<any>{
  
  let headers=new HttpHeaders().set('X-RapidAPI-Key','2819edd842msh09a84cb402a4b49p11e427jsn75ab8281f1e1').set( 'X-RapidAPI-Host','beers-list.p.rapidapi.com');
let url='https://beers-list.p.rapidapi.com/beers/italy';
return this.http.get(url,{headers});
}

saveProduct(productObj: any): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json'); // Set content type as JSON
    let url = 'https://beers-list.p.rapidapi.com/beers/italy' ; // Replace with your actual API endpoint
    return this.http.post(url, productObj, { headers });
  }

}

export interface quote{
  data:string;
}