import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { validateConfig } from '../../../node_modules/@angular/router/src/config';
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
  selectedData;
  formData: any;
  selectAdminDropdown:any;
  appName: 'select app';
  group: string = 'select group';
  division: string = 'select division';
  region: string = 'select region';
  market: string = 'select market';
  tableData: any;
  config = {
    displayKey: "type"
  };
  dropdownOptions: any;
  navigationItems: any;


  constructor(private AdminService: AdminService) {

  }
  displayForm(value: string) {
    this.showButton = false;
    value === 'admin' ? this.adminView = true : this.managerView = true;
  }
  exit() {
    this.showButton = true;
    this.adminView = false;
    this.managerView = false;
  }
  selectChangeHandler(selected: any) {
    this.navigationItems.branchConfigs = this.tableData.filter((data,value)=> data.appName === selected);
    this.selectedData = this.formData[this.selectedType]
  }
  selectedValue() {
    this.selectedData = this.formData[this.selectedType]
  }
  ngOnInit() {
    this.formData = this.AdminService.getData();
    this.selectedData = this.formData['oneInterface'];
    this.selectAdminDropdown = this.AdminService.selectGroup;
    this.navigationItems =
      {
        "address": {
          "lineList": ["9454 MAIN ST"],
          "city": "PLYMOUTH",
          "zipCode": "95669",
          "stateCode": "CA"
        },
        "branchConfigs": [
          {
            "appName": "ONE_INTERFACE",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": "assets/images/home.png",
              "displayName": "HOME",
              "displayOrder": "1",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11459/oneinterface/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_HOME",
              "fullScreen": "true",
              "external": "false",
              "functionId": "1UI",
              "sticky": "true",
              "iconColor": "#B06224",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "4ec4b0f9-4717-4d71-8f55-c46039272412",
              "category": "user"
            }
          },
          {
            "appName": "NOTIFICATION",
            "appVersion": 1820,
            "properties": {
              "clientId": "6d6b5fd9b3e34a8a947fb7eb38fac9a7",
              "websocket": "wss://na.ist.atmhost.wellsfargo.com:11459/oneinterface/websocket/hub",
              "lantern": "https://dsgdevapp.wellsfargo.com/sa/bts/lantern/?m=98&p={param_id}",
              "token": "https://dsgdevapp.wellsfargo.com/sa/bts/swts/token"
            }
          },
          {
            "appName": "VAULT_MANAGER",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Vault Manager",
              "displayOrder": "4",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11453/VaultManager/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_VAULT_MANAGER",
              "fullScreen": "true",
              "external": "false",
              "functionId": "VLTMGR",
              "sticky": "true",
              "iconColor": "#007337",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "004a5d42-4c38-43ba-bd40-797b31bc9303",
              "category": "user"
            }
          },
          {
            "appName": "MANAGER_VIEW",
            "appVersion": 1740,
            "properties": {
              "iconHeight": "1.25em",
              "iconImage": " ",
              "iconWidth": "1.25em",
              "displayName": "Manager View",
              "displayOrder": "5",
              "DEACTIVATION_DATE": "2100-11-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11463/managerview/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "fullScreen": "true",
              "textKey": "APP_MANAGER_VIEW",
              "functionId": "MV",
              "external": "false",
              "iconColor": "#574537",
              "sticky": "false",
              "ACTIVATION_DATE": "2017-09-01",
              "id": "F7846370-BBEB-40A7-B319-55AE771D8B2D",
              "category": "user"
            }
          },
          {
            "appName": "CLOUDCORDS_SCHEDULER",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Cloudcords",
              "displayOrder": "54",
              "url": "https://csfedportal.wellsfargo.net/affwebservices/public/saml2sso?SPID=cloudcords",
              "textKey": "APP_CLOUDCORDS_SCHEDULER",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#679FC0",
              "sticky": "false",
              "id": "5899cc88-69d5-453e-be8d-60ccb1522b57",
              "category": "enterprise"
            }
          },
          {
            "appName": "TROUBLESHOOTING_GUIDE",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Troubleshooting Guide",
              "displayOrder": "56",
              "url": "http://dssgweb.wellsfargo.com/wbcd/portal/store_equipment_help/documents/StoreTechnologyIssuesResolutionStatus.pdf",
              "textKey": "APP_TROUBLESHOOTING_GUIDE",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#6F5091",
              "sticky": "false",
              "id": "dfc0e7f6-c577-45d6-999b-61a82c645eb2",
              "category": "enterprise"
            }
          },
          {
            "appName": "ATM_ASSIST_PORTAL",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "WF Assist",
              "displayOrder": "3",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://da-site1-atmassistportal.wellsfargo.com/AtmAssistPortal/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_WF_ASSIST",
              "fullScreen": "true",
              "external": "false",
              "functionId": "WFASST",
              "sticky": "true",
              "iconColor": "#00698C",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "7f0b8fc5-f5d8-4593-ba3e-962fdcf50516",
              "category": "user"
            }
          },
          {
            "appName": "BRANCH_PORTAL",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Branch Portal",
              "displayOrder": "52",
              "url": "https://storeportal-az.wellsfargo.com/portal/site/RetailStorePortal",
              "textKey": "APP_BRANCH_PORTAL",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#7A6855",
              "sticky": "false",
              "id": "2a7463eb-2ef0-4f22-9c09-6c4475182a4f",
              "category": "enterprise"
            }
          },
          {
            "appName": "BRANCH_EQUIPMENT_HELP",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Branch Equipment",
              "displayOrder": "55",
              "url": "http://dssgweb.wellsfargo.com/wbcd/portal/store_equipment_help/index.html",
              "textKey": "APP_BRANCH_EQUIPMENT_HELP",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#285C4D",
              "sticky": "false",
              "id": "7bff149c-29fe-480e-a513-624711a6ef13",
              "category": "enterprise"
            }
          },
          {
            "appName": "SVP",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "SVP",
              "displayOrder": "51",
              "url": "https://iat.salesandservice.wellsfargo.com:13170/",
              "textKey": "APP_SVP",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#BB0826",
              "sticky": "false",
              "id": "57b1de7d-fd6e-45e4-aa37-ae69e11ea748",
              "category": "enterprise"
            }
          },
          {
            "appName": "STAGE_DIRECTOR",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Stage Director",
              "displayOrder": "2",
              "DEACTIVATION_DATE": "2100-08-01",
              "url": "https://na.ist.atmhost.wellsfargo.com:11458/stagedirector/index.html?storeau={param_storeAU}&computername={param_computerName}",
              "textKey": "APP_STAGE_DIRECTOR",
              "fullScreen": "true",
              "external": "false",
              "functionId": "STGDIR",
              "sticky": "false",
              "iconColor": "#B06224",
              "ACTIVATION_DATE": "2017-08-01",
              "id": "3066648f-babb-4871-b41b-3ad3e8ba539b",
              "category": "user"
            }
          },
          {
            "appName": "BRANCH_PROFILE",
            "appVersion": 1730,
            "properties": {
              "iconHeight": "1.25em",
              "iconWidth": "1.25em",
              "iconImage": " ",
              "displayName": "Branch Profile",
              "displayOrder": "53",
              "url": "https://dssgapps.wellsfargo.com/aspx/storeprofile/",
              "textKey": "APP_BRANCH_PROFILE",
              "fullScreen": "false",
              "external": "true",
              "functionId": "_OPEN_",
              "iconColor": "#7A6855",
              "sticky": "false",
              "id": "2501c44c-c6e0-4bfc-91d4-85518bb1e095",
              "category": "enterprise"
            }
          }
        ]
      }
      this.tableData = this.navigationItems.branchConfigs.slice();
  
      this.dropdownOptions = this.navigationItems.branchConfigs.map((val,index)=>({ "appName": val.appName}))
      console.log(this.dropdownOptions);
  }

}
