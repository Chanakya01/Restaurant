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

  ngOnInit() {
    this.BookForm = this.formBuilder.group({
      Name: [],
      Email: [],
      ContactNo: [],
      NumberofPeople: [],
      Date: [],
      Message: []
  });

}
onSubmit(){
  console.log(this.BookForm);
}
}
