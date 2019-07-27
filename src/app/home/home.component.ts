import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  BookForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  items =[];
  ngOnInit() {
    this.BookForm = this.formBuilder.group({
      Name: [],
      Email: [],
      ContactNo: [],
      NumberofPeople: [],
      Date: [],
      Message: []
  });
  this.items = [
   {
     name: "Sprouts with honey/Spicy Sprouts",
     description: "Assorted Sprouts topped with honey",
     price:55
   },
   {
    name: "Corn Flakes",
    description: "Cripsy Cornflakes served with milk",
    price:65
  },
  {
    name: "Muesil",
    description: "Crunchy Muesil served with milk",
    price:65
  },
  {
    name: "oats Porridge/Quino Porridge",
    description: "Oats Cooked in milk served in Honey",
    price:22
  },
  {
    name: "Masala Oats",
    description: "Oats cooked with fresh vegetables and indian spices",
    price:22
  },
  {
    name: "Ragi Malt",
    description: "Fine Ground Ragi cooked in water/Milk",
    price:65
  },
  {
    name: "Dosas Ragi",
    description: "The Original South Indian DOsas",
    price:22
  },
  {
    name: "Baked Poha",
    description: "A protein filled with north indain ",
    price:22
  }
 ];
console.log(this.items);
}
onSubmit(){
  console.log(this.BookForm);
}
}
