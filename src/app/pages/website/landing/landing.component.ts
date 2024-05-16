import { Component , OnInit} from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  productList: any[] = [];
  constructor(private productService: ProductService , private http: HttpClient){
    productService.users().subscribe((data:Object)=>{
      
      this.productList=data as any[];
    });

  }

ngOnInit(): void {
  
}

}
