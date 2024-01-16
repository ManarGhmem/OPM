import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import {  GET_ONE_WORK_ORDER_BY_ID_END_POINT, GET_USER_employers_BY_VALID_END_POINT, GET_USER_employers_END_POINT, POST_WOREK_ORDER_ADMIN_END_POINT, PUT_USER_USER_employers_BY_VALIDE, PUT_WOREK_ORDER_END_POINT } from '../../services/endpoints';
import { DetailsComponent } from '../../popup/details/details.component';
import { EMPLOYERS_POPUP_TYPE } from '../../popup/popup-type';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Observer from '../../services/observer';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wodt',
  templateUrl: './wodt.component.html',
  styleUrls: ['./wodt.component.scss']
})
export class WODTComponent implements OnInit {

  worekOrdereForUpdate: any;
  objworekorder: any;
  paylodFormData: FormData;
  employerslist: [] = [];
  collectionSize: number = 0;
  p = 1;
  model: any = {}
  page = 1;
  mayFile: any;
  nbrItemPage = 5;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  titer;
  id;
  authority;
  typeOpertion
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
// if add the id wose for the client else the id for worek order 
    this.authority = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority;
    if (this.typeOpertion == 'updateWorekOrder') {
      this.getOneWorekorderbayId(this.id)
    }
    this.paylodFormData = new FormData();
  }

  ngOnInit() {
    this.getAllEmployeesByAuthority("technician");
    this.typeOpertion = this.route.parent.snapshot.url[0]
    if (this.typeOpertion == "addWorekorder") {
      this.model = {};
    }
    if (this.typeOpertion == 'updateWorekOrder') {
      this.getOneWorekorderbayId(this.id)
    }
  }
  onSubmit(form: NgForm) {
    
    let payload = { ...form.value };
    this.paylodFormData.append("fileType", "Logo")
    if (payload.title) { this.paylodFormData.append("title", this.model.title) }
    if (this.model.description) { this.paylodFormData.append("description", this.model.description) }
    if (this.authority == 'client') {this.paylodFormData.append("clientId", this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken"))._id)}
    if (this.authority != 'client') { this.paylodFormData.append("clientId", this.id) }
    if (this.typeOpertion == 'addWorekorder') {
      if (this.mayFile) { this.paylodFormData.append("file", this.mayFile) }
      if (this.model.partName) { this.paylodFormData.append("partName", this.model.partName) }
      if (this.model.serialNum) { this.paylodFormData.append("serialNum", this.model.serialNum) }
      if (this.model.partNum) { this.paylodFormData.append("partNum", this.model.partNum) }
      if (this.model.employeeId) { this.paylodFormData.append("employeeId", this.model.employeeId) }

// -------------------

      this.backendService
        .post(POST_WOREK_ORDER_ADMIN_END_POINT, this.paylodFormData)
        .subscribe(
          new Observer(
            this.router,// just un class dans angular
            this.authority == 'client' ?`app/UnhandledWorkOrdersDetailAdmin/${this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken"))._id}`: null,//target : lin eli machilou
            this.authority == 'client'? false : true,//target : lin eli machilou
            true,//swwet alert
            this.sharedService,//obligtour si ona reload
          ).OBSERVER_POST()
        );
    }
    if (this.typeOpertion == 'updateWorekOrder') {
      const obj ={...form.value , _id : this.id}
      console.log(obj);
      
      this.backendService
        .post(PUT_WOREK_ORDER_END_POINT,obj)
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
  }
  getOneWorekorderbayId(id: string) {
    
    this.backendService.get(`${GET_ONE_WORK_ORDER_BY_ID_END_POINT}/${id}/${this.authority}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.worekOrdereForUpdate = response.rows;
        console.log(response.rows);
        
        
        if(this.authority != 'client' && this.worekOrdereForUpdate.employeeId ){this.model.employeeId = this.worekOrdereForUpdate.employeeId._id;}
        this.model.title = this.worekOrdereForUpdate.title;
        this.model.description = this.worekOrdereForUpdate.description;
        this.model.partName = this.worekOrdereForUpdate.partName;
        this.model.serialNum = this.worekOrdereForUpdate.serialNum;
        this.model.partNum = this.worekOrdereForUpdate.partNum;
      })
    );
  }
  getAllEmployeesByAuthority(typeEmp: string) {
    this.backendService.get(`${GET_USER_employers_END_POINT}/${typeEmp}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.employerslist = response.rows;
      })
    );
  }
  getAllEmployeesByValid(valide: string) {
    this.backendService.get(`${GET_USER_employers_BY_VALID_END_POINT}/${valide}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.employerslist = response.rows;
      })
    );
  }
  changeEtaEmpl(etat: boolean, email: string) {
    const payload = { valid: etat, email: email }
    this.backendService
      .put(PUT_USER_USER_employers_BY_VALIDE, payload)
      .subscribe(
        new Observer(
          this.router,// just un class dans angular
          null,//target : lin eli machilou
          false,//relode
          false,//swwet alert
          this.sharedService,//obligtour si ona reload
        ).OBSERVER_EDIT()
      );
  }
  changeSelectedFile(valid) {
    this.getAllEmployeesByValid(valid);

  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.nbrItemPage = event.target.value;
  }
  handlePageChange(currentPage: number) {

    // this.getListClient();

    this.page = currentPage;
  }
  changeSelectedFile02(event) {
    this.mayFile = event.target.files[0];

  }

}
