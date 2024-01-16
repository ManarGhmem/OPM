import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {


  GET_USER_employers_END_POINT,
  POST_ADD_FILE_TICKET_ADMIN_END_POINT,
  POST_PART_ADD_FILE_TO_PART_ORDER_END_POIN,
  POST_PART_ORDER_END_POINT,
  POST_TICKET_ADMIN_END_POINT,

  POST_TICKET_follow_END_POINT,

  POST_WOREK_ORDER_ADMIN_END_POINT,
  PUT_Contract_END_POINT,
  PUT_PART_ORDER_END_POINT,
  PUT_WOREK_ORDER_END_POINT,
  PUT_followUps_END_POINT,
} from "../../services/endpoints";
import Observer from "../../services/observer";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input("title") title: string;
  @Input("type") type: string;
  @Input("payload") payload: any;
  //
  files: any;
  supplierList: [] = [];
  accountsList: [] = [];
  actualDate: string;
  listTechnician: [] = [];
  birthdateinputype: string;
  hiredateinputype: string;
  startperiodinputype: string;
  companyList: [];
  paylodFormData: FormData;
  constructor(
    public activeModal: NgbActiveModal,
    public sharedService: SharedService,
    public backendService: BackendService,
    private router: Router
  ) {
    this.paylodFormData = new FormData();
    this.actualDate = new Date().toDateString();
    this.birthdateinputype = "text";
    this.hiredateinputype = "text";

  }
  ngOnInit() {
    // alert(JSON.stringify(this.payload))
    if (this.type == 'affecte_commerciale') {

      this.getEmployesByOutherty("commercial");
    } else {
      this.getEmployesByOutherty("technician");

    }
        console.log(this.payload)

    // this.startperiodinputype = "text";
    // if (this.type == "SERVICES" || this.type == "PRODUCTS") {

    //   // this.getAccounts();
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
  //         this.supplierList = response.rows;
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
        endpoint = POST_WOREK_ORDER_ADMIN_END_POINT;
        payload = { ...payload, clientId: this.payload.clientId };
        // alert(JSON.stringify(payload))
        break;
      case "newTICKET":
        payload = { ...payload, ...this.payload };
        endpoint = POST_TICKET_ADMIN_END_POINT;
        const { title, description } = form.value;
        this.paylodFormData.append("title", title);
        this.paylodFormData.append("description", description);
        this.paylodFormData.append("workOrderId", payload.workOrderId)
        this.paylodFormData.append("clientId", payload.clientId)
        this.paylodFormData.append("employeeId", payload.employeeId)
        this.paylodFormData.append("fileType", "File")
        if (this.files) {
          for (let i = 0; i < this.files.length; i++) {
            this.paylodFormData.append("files", this.files[i]);
          }
        }
        payload = this.paylodFormData;
        break;
      case "newTICKET3":
        payload = { ...payload, ...this.payload };
        endpoint = POST_TICKET_follow_END_POINT;
        // const { title, description } = ;
        this.paylodFormData.append("title", form.value.title);
        this.paylodFormData.append("description", form.value.description);
        this.paylodFormData.append("_id", payload._id)
        this.paylodFormData.append("clientId", payload.clientId)
        this.paylodFormData.append("employeeId", payload.employeeId)
        this.paylodFormData.append("fileType", "File")
        if (this.files) {
          for (let i = 0; i < this.files.length; i++) {
            this.paylodFormData.append("files", this.files[i]);
          }
        }
        payload = this.paylodFormData;
        break;
      case "TICKET":
        endpoint = POST_ADD_FILE_TICKET_ADMIN_END_POINT;
        this.paylodFormData.append("ticketId", this.payload.ticketId)
        this.paylodFormData.append("fileType", "File")
        for (let i = 0; i < this.files.length; i++) {
          this.paylodFormData.append("files", this.files[i]);
        }
        payload = this.paylodFormData;
        // console.log("daadadaddadadad");

        // console.log(this.paylodFormData.get("ticketId"));
        // console.log(this.paylodFormData.get("fileType"));
        break;
      case "add_Tech":


        endpoint = PUT_WOREK_ORDER_END_POINT;
        payload = {
          ...payload,
          _id: this.payload._id,
        };
        break;
      case "valide_work_order":

        endpoint = PUT_WOREK_ORDER_END_POINT;
        payload = {
          ...payload,
          _id: this.payload.workOrderId,
          status: this.payload.status,
        };
        break;
      case "valide_followUps":

      endpoint = PUT_followUps_END_POINT;
       payload = {
        ...payload,
         _id: this.payload.workOrderId,
         status: this.payload.status,
        };
        break;
      case "PART_ODER":

        endpoint = POST_PART_ORDER_END_POINT;
        payload = {
          ...payload,
          clientId: this.payload.clientId
        };
        break;
      case "add_bon_commande":
        endpoint = POST_PART_ADD_FILE_TO_PART_ORDER_END_POIN;
        this.paylodFormData.append("clientId", this.payload._id)
        this.paylodFormData.append("fileType", "File")
        this.paylodFormData.append("file", this.files[0]);
        this.paylodFormData.append("status", "Accepted");
        this.paylodFormData.append("type_file", "bon_commande");
        payload = this.paylodFormData;
        payload = this.paylodFormData;
        break;
      case "add_devi":
        endpoint = POST_PART_ADD_FILE_TO_PART_ORDER_END_POIN;
        this.paylodFormData.append("clientId", this.payload.id)
        this.paylodFormData.append("fileType", "File")
        this.paylodFormData.append("file", this.files[0]);
        this.paylodFormData.append("status", "Valid");
        this.paylodFormData.append("type_file", "devise");
        payload = this.paylodFormData;
        break;
      case "reason":
        endpoint = PUT_PART_ORDER_END_POINT;
        payload = { ...payload, id: this.payload._id, status: 'Refused' };
        break;
      case "add_Tech":
        endpoint = PUT_WOREK_ORDER_END_POINT;
        payload = {
          ...payload,
          _id: this.payload._id,
        };
        break;
      case "affecte_commerciale":
        endpoint = PUT_Contract_END_POINT;
        payload = {
          ...payload,
          _id: this.payload._id,

        };
        // console.log(payload)
        // console.log("--------------------------")
        // console.log(endpoint)
        // console.log("--------------------------")
        break;


        // console.log("******" + JSON.stringify(payload) + "--------------------");
    }
    // console.log("*****************************");
    
    // console.log("title:"+this.paylodFormData.get("title"));
    // console.log("description:"+this.paylodFormData.get("description"));
    // console.log("_id:"+this.paylodFormData.get("_id"));
    // console.log("clientId:"+this.paylodFormData.get("clientId"));
    // console.log("employeeId:"+this.paylodFormData.get("employeeId"));
    // console.log("fileType:"+this.paylodFormData.get("fileType"));
    // console.log("files:"+this.paylodFormData.get("files"));
    // console.log("*****************************");
    
    this.backendService
      .post(endpoint, payload)
      .subscribe(
        new Observer(
          this.router,
          null,
          true,
          true,
          this.sharedService,
          this.activeModal
        ).OBSERVER_POST()
      );
  }

  setinputtype(type: string) {
    if (type === "birthdate") this.birthdateinputype = "date";
    if (type === "hiredate") this.hiredateinputype = "date";
    if (type === "start_period") this.startperiodinputype = "date";
  }
  changeSelectedFile02(event) {
    this.files = event.target.files;
    // alert()
    // console.log( event.target.files);


  }

}


/*  




*/