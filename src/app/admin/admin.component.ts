import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showButton: Boolean = true;
  managerView: Boolean = false;
  adminView: Boolean = false;
  selectedType: string = '';
  bsValue = new Date();
  selectedData;
  formData:any;
  
  

  constructor(private AdminService : AdminService) {
    
   }
  displayForm(value: string) {
    this.showButton = false;
    value === 'admin' ? this.adminView = true : this.managerView = true;
  }
  exit(){
    this.showButton = true;
    this.adminView = false;
    this.managerView = false;
  }
  selectChangeHandler(event: any) {
    this.selectedType = event.target.value;
    this.selectedData = this.formData[this.selectedType]
  }
  selectedValue(){
    this.selectedData = this.formData[this.selectedType]
  }
  ngOnInit() {
    this.formData =this.AdminService.getData();
    this.selectedData =this.formData['oneInterface'];
  }

}
