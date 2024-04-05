import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean=false;

   productObj:any ={
     "productId":0,
     "name":"",
    "productName":"",
    "productPrice":"",
     "createdDate": new Date(),
     "productImageUrl":"",
     "description":"",
     "id":0,
     "title":""
  }

//   categoryList: any[]=[];
// quote:string='';
//   constructor(private productService: ProductService){}

   ngOnInit(): void {
    // this.getAllCategory();
   }

//   getAllCategory(){
//     this.productService.getcate().subscribe((data)=>{
//      // this.categoryList=JSON.parse(data.content);
//     this.categoryList=data;
//     })
//   }

//   onsave(){
//     this.productService.saveProduct(this.productObj).subscribe((response)=>{
//       if(response.status==200){
//         alert("product created");
//       }
//       else{
//         alert("not created");
//       }
//     })
//   }

constructor(private http: HttpClient) { }


submitForm() {
  const formData = new FormData();
  formData.append('name', this.productObj.name);
  formData.append('price', this.productObj.productPrice);
  formData.append('image', this.productObj.productImageUrl);
  formData.append('prodesc', this.productObj.description);

  // Submit formData using HttpClient
  this.http.post<any>('https://sheetdb.io/api/v1/ji7pkt21xb2c8', formData)
    .subscribe({
      next: response => {
        console.log(response);
        // Handle response as needed
      },
      error: error => {
        console.error('Error:', error);
        // Handle error
      }
     } );
}

  showAddProduct(){
    this.isSidePanelVisible=true;
  }
  hideAddProduct(){
    this.isSidePanelVisible=false;
  }
}
