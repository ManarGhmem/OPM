import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {

  GET_USER_employers_END_POINT,

  PUT_PART_ORDER_END_POINT,

  PUT_WOREK_ORDER_END_POINT,
} from "../../services/endpoints";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";
import Observer from "../../services/observer";
import { log } from "util";

@Component({
  selector: "app-put",
  templateUrl: "./put.component.html",
  styleUrls: ["./put.component.scss"],
})
export class PutComponent implements OnInit {
  @Input("title") title: string;
  @Input("type") type: string;
  @Input("payload") payload: any;

  actualDate: string;
  listTechnician: [] = [];
  birthdateinputype: string;
  hiredateinputype: string;
  companyList: [];
  suppliersList: [] = [];
  accountsList: [] = [];
  constructor(
    public activeModal: NgbActiveModal,
    public sharedService: SharedService,
    public backendService: BackendService,
    private router: Router
  ) {
    this.actualDate = new Date().toDateString();
    this.birthdateinputype = "text";
    this.hiredateinputype = "text";
  }
  ngOnInit() {
    // alert(JSON.stringify(this.payload))

    this.getEmployesByOutherty("technician");
  
    // if (this.type == "SERVICES" || this.type == "PRODUCTS") {
    //   this.getSuppliers();
    //   this.getAccounts();
    // }
  }
  getEmployesByOutherty(type: string) {
    this.backendService
      .get(
        `${GET_USER_employers_END_POINT}/${type}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          this.listTechnician = response.rows;
          

        })
      );
  }
  // getSuppliers() {

  //   this.backendService
  //     .get(
  //       `${GET_SUPPLIETS_SERVICES_END_POINT}/${this.sharedService.getItem(
  //         "companyNo"
  //       )}`
  //     )
  //     .subscribe(
  //       new Observer().OBSERVER_GET((response) => {
  //         this.suppliersList = response.rows;
  //       })
  //     );
  // }
  // getAccounts() {
  //   this.backendService
  //     .get(
  //       `${GET_USER_ACCOUNTING_LIST_PLAN_END_POINT}/${this.sharedService.getItem(
  //         "companyNo"
  //       )}`
  //     )
  //     .subscribe(
  //       new Observer().OBSERVER_GET((response) => {
  //         this.accountsList = response.rows;
  //       })
  //     );
  // }
  onSubmit(form: NgForm) {
    let endpoint: string = "";
    let payload = { ...form.value };

    switch (this.type) {
      case "WORK_ORDER":
        endpoint = PUT_WOREK_ORDER_END_POINT;
        payload = { ...payload, clientId:this.payload.clientId,_id:this.payload._id };
        break;
      case "PART_ODER":
        endpoint = PUT_PART_ORDER_END_POINT;
        payload = { ...payload,_id:this.payload._id };
        // console.log(payload);
        break; 
// 
    }
// alert(JSON.stringify(payload))
      this.backendService
        .post(endpoint,payload)
        .subscribe(
          new Observer(
            this.router,// just un class dans angular
            null,//target : lin eli machilou //`app/workOrderDetail/${this.worekOrdereForUpdate.folderId._id}`
            false,//relode
            true,//swwet alert
            this.sharedService,//obligtour si ona reload
          ).OBSERVER_POST()
        );
  }

  setinputtype(event, type: string) {
    if (type === "birthdate") this.birthdateinputype = "date";
    if (type === "hiredate") this.hiredateinputype = "date";
  }
}
