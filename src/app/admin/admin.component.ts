import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showButton:Boolean=true;
  bsValue = new Date();
  constructor() { }
  displayForm(){
   this.showButton=false
  }
  ngOnInit() {
    
  }

}
