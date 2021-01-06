import { Component, OnInit } from '@angular/core';
import { CookieManagerService } from '../../helper/cookie-manager/cookie-manager.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.less']
})
export class ListingComponent implements OnInit {
  public product: Object;
  public allProducts = [
	{ prodID: 1, prodLink: "/products/1", imageLink: "/assets/shiba2.jpg", name: "Photo of Shiba 1", category: 'Dog' },
	{ prodID: 2, prodLink: "/products/2", imageLink: "/assets/shiba2.jpg", name: "Photo of Shiba 2", category: 'Dog' },
	{ prodID: 4, prodLink: "/products/4", imageLink: "/assets/shiba2.jpg", name: "Photo of Shiba 4", category: 'Dog' },
	{ prodID: 5, prodLink: "/products/5", imageLink: "/assets/shiba2.jpg", name: "Photo of Shiba 5", category: 'Dog' }
 ]
  constructor(private cookieManagerService:CookieManagerService) {
	this.product = {
		'productid': 1,
		'prodLink': '/products/1',
		'imageLink': '/assets/shiba2.jpg',
		'name': 'Photo of a Shiba Inu',
		'catagory': 'Dog'
	};
  }

  ngOnInit(): void {
	//   this.product = new Object();
	

  }
  addToCart(prodId) {
	// console.log(prodId);
	// console.log(window.location.host);
	// this.cookieManagerService.set('_CART_', prodId, 15);
	this.cookieManagerService.setCart(prodId, 1);
  }
}
