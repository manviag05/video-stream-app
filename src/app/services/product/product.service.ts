import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url="https://sheetdb.io/api/v1/ji7pkt21xb2c8";
  constructor(private http: HttpClient) { }
users(){
  return this.http.get(this.url);

}


  async fetchSheetData() {
    try {
      const sheetUrl = 'https://docs.google.com/spreadsheets/d/1-MREZ-zUOkZQQztdH5U-B1sKfKDEl4TAOT3MfkXRvz0/edit#gid=0';
      const response = await firstValueFrom(this.http.get(sheetUrl, { responseType: 'text' }));
      const rows = response.split('\n');
      const sheetData = rows.map(row => {
        const columns = row.split(',');
        return {
          name: columns[0],
          review: columns[4]
        };
      });
      return sheetData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  }



  // fetchSheetData(): Observable<any> {
  //   // Replace the URL with your SheetDB endpoint
  //   return this.http.get<any>('https://sheetdb.io/api/v1/ji7pkt21xb2c8');
  // }



//   getCategory(){
//     return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
//   }
  
//   getcate():Observable<any>{
  
//     let headers=new HttpHeaders().set('X-RapidAPI-Key','2819edd842msh09a84cb402a4b49p11e427jsn75ab8281f1e1').set( 'X-RapidAPI-Host','beers-list.p.rapidapi.com');
// let url='https://beers-list.p.rapidapi.com/beers/italy';
// return this.http.get(url,{headers});
// }

// getproduct():Observable<any>{
  
//   let headers=new HttpHeaders().set('X-RapidAPI-Key','2819edd842msh09a84cb402a4b49p11e427jsn75ab8281f1e1').set( 'X-RapidAPI-Host','beers-list.p.rapidapi.com');
// let url='https://beers-list.p.rapidapi.com/beers/italy';
// return this.http.get(url,{headers});
// }

// saveProduct(productObj: any): Observable<any> {
//     let headers = new HttpHeaders()
//     .set('Content-Type', 'application/json'); // Set content type as JSON
//     let url = 'https://beers-list.p.rapidapi.com/beers/italy' ; // Replace with your actual API endpoint
//     return this.http.post(url, productObj, { headers });
//   }

}



export interface quote{
  data:string;
}