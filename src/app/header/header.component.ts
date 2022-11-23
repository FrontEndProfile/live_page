import { Component, NgIterable } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // nav_link_01 = "Home";
  // nav_link_02 = "About";
  // nav_link_03 = "Contact";


  logo_img = "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png";

 // NAV LINK IN ARRAY 
 menuLinks: string[] = ['Home', 'About', 'Contact'] ;



 menuLinks_url: string[] = ['/home', '/about', '/contact'];

// @Input() ngForOf: NgIterable;
//  menuLinks = {
//   name: "Home",
//   age: "/home"
// };


}
