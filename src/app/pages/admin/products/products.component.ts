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
  productList: any[] = [];
  sheetData: any[]=[];
  users:any;
  // productList$ = this.productService.fetchSheetData();
  
  productObj:any ={
    "productId":0,
    "name":"",
    "productName":"",
    "price":"",
    "createdDate": new Date(),
    "image":"",
    "prodesc":"",
    "id":0,
    "title":""
  }
  
  //   categoryList: any[]=[];
  // quote:string='';
  
  
  constructor(private productService: ProductService , private http: HttpClient){
    productService.users().subscribe((data:Object)=>{
      
      this.productList=data as any[];
    });

  }

   ngOnInit(): void {
    // this.getAllCategory();
    //this.fetchData();
   // this.fetchSheetData();
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


// fetchData() {
  //   this.productService.fetchSheetData().subscribe(
    //     (data: any[]) => {
      //       this.productList = data;
      //     },
      //     (error) => {
        //       console.error('Error fetching data:', error);
        //     }
        //   )
        // }
        
        
        // fetchSheetData() {
          //   this.productService.fetchSheetData().then((data) => {
            //     this.sheetData = data;
            //     console.log('Fetched data:', this.sheetData);
            //   }).catch((error) => {
              //     console.error('Error fetching data:', error);
              //   });
              // }
              
    onUpdate(){
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
  
  onEdit(item:any){
    this.productObj=item;
    this.showAddProduct();
  }



// fetchData() {
//   // Make a GET request to your SheetDB endpoint
//   this.http.get<any>('https://sheetdb.io/api/v1/ji7pkt21xb2c8')
//     .subscribe({
//       next: response => {
//         console.log(response);
//         // Handle response as needed
//       },
//       error: error => {
//         console.error('Error:', error);
//         // Handle error
//       }
//     });
// }


  showAddProduct(){
    this.isSidePanelVisible=true;
  }
  hideAddProduct(){
    this.isSidePanelVisible=false;
  }
}
  function submitForm() {
    throw new Error('Function not implemented.');
  }

