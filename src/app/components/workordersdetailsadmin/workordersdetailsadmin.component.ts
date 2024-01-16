import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { DELETE_FILE_FOR_TICKET_ADMIN_END_POINT, GET_ONE_WORK_ORDER_BY_ID_END_POINT, POST_FOLLOWUP, PUT_TICKET_END_POINT, PUT_WOREK_ORDER_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';
import { environment } from "./../../../environments/environment";
import { TICKET_New_PLAN_POPUP_TYPE, TICKET_PLAN_POPUP_TYPE, VALDTION_WORK_ORDER_POPUP_TYPE } from "../../popup/popup-type";
import { PostComponent } from './../../popup/post/post.component';
import { DetailsComponent } from './../..///popup/details/details.component';
import swal from 'sweetalert';

@Component({
  selector: 'app-workordersdetailsadmin',
  templateUrl: './workordersdetailsadmin.component.html',
  styleUrls: ['./workordersdetailsadmin.component.scss']
})
export class WorkordersdetailsadminComponent implements OnInit {
  page = 1;
  collectionSize: number = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  nbrItemPage = 5;
  workOrder: any;
  flouups: any[];
  listFile: any = null;
  id: any;
  url_imguplode;
  path_logo;
  windurl = window.location.protocol + "//" + window.location.hostname + "/:3000/";
  titre_worek_order;
  type_user;
  user_Client = false ;
  user_tech = false ;
  user_admin = false
  description = ""
  titleWorkOrder = null;
  StatusWorkOrder = null;
  titleworkOrder = null;
  EmpoloyesFirstNameLastName = null;
  DescriptioneworkOrder = null;
  ticketDescription = null
  partName = null
  serialNum = null
  logoFileName = null
  tickettitle = null
  imageUrl = null
  disAdmin = true
  disTech = true
  disClt = true
  updatdestech = true;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.type_user = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority;
    this.type_user = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority;
    this.url_imguplode = environment.apiUrl + "/" + this.id + "/Logo/";
    if (!this.type_user) { this.disAdmin = false }
    if (this.type_user == "technician") { this.disTech = false }
    if (this.type_user == "client") { this.disClt = false }

    if (this.type_user == "technician") { this.user_tech = true }
    if (this.type_user == "client") { this.user_Client = true }
    if (this.type_user == "admin") { this.user_admin = true }
  }
  ngOnInit() {
    this.getOneWorkOrderBayId(this.type_user);
    this.workOrder = null;
    this.listFile = null;
  }
  adddescrption(valuetxt, id) {
    if (valuetxt != this.workOrder.ticketId.description) {
      this.backendService
        .put(PUT_TICKET_END_POINT, { description: valuetxt, _id: id })
        .subscribe(
          new Observer(
            this.router,
            null,
            true,
            true,
            this.sharedService,
          ).OBSERVER_EDIT()
        );
    }
  }
  openFile(url: string) {
    // alert(url)
    window.open("http://127.0.0.1:3000/"+url);

  }
  upadeteEtaDesTEch() { this.updatdestech = !this.updatdestech }
  async getOneWorkOrderBayId(type_op) {
    await this.backendService.get(`${GET_ONE_WORK_ORDER_BY_ID_END_POINT}/${this.route.snapshot.paramMap.get("id")}/${type_op}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.workOrder = response.rows;
        this.titleWorkOrder = this.workOrder.title;
        this.StatusWorkOrder = this.workOrder.status;
  if(this.workOrder.isFollowUp){
     this.flouups = this.workOrder.followUpList;
    
     console.log("--------------------------------------------------..");
     console.log(this.flouups);
     console.log("--------------------------------------------------..");
    
    }
          


        if (this.workOrder.employeeId) {this.EmpoloyesFirstNameLastName = this.workOrder.employeeId.firstName + " " + this.workOrder.employeeId.lastName;}
        this.DescriptioneworkOrder = this.workOrder.description;
        if (this.workOrder.ticketId) { this.ticketDescription = this.workOrder.ticketId.description; } else { this.ticketDescription = null }
        this.partName = this.workOrder.partName
        this.serialNum = this.workOrder.serialNum
        if (this.workOrder.logo) { this.logoFileName = this.workOrder.logo.fileName } else { this.logoFileName = null }
        this.tickettitle = this.workOrder.partName
        // this.titleworkOrder = this.workOrder.;
        // console.log(this.workOrder.ticketId._id);

        if (response.rows.ticketId != null) { this.listFile = response.rows.ticketId.listOfFiles };
        // this.description = response.rows.description ;


      })
    );
  }
  OpenModal(title: string, id_ticket) {
    // alert(id_ticket)
    const modalRef = this.modalService.open(PostComponent, { size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = TICKET_PLAN_POPUP_TYPE;
    modalRef.componentInstance.payload = { ticketId: id_ticket }
  }
  oppenAdd(title) {
    const modalRef = this.modalService.open(PostComponent, { size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = TICKET_New_PLAN_POPUP_TYPE;
    modalRef.componentInstance.payload = { workOrderId: this.workOrder._id, clientId: this.workOrder.clientId._id, employeeId: this.workOrder.employeeId._id } //;
  }
  OpenDetails(title: string, payload: any) {
    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = TICKET_PLAN_POPUP_TYPE;
    modalRef.componentInstance.payload = { ...payload };
  }

  deleteFile(id_file: string, id_tiket: string) {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this !",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["Cancel", "Confirm"],
    }).then((result) => {
      if (result) {
        this.backendService
          .delete(`${DELETE_FILE_FOR_TICKET_ADMIN_END_POINT}/${id_file}/${id_tiket}`)
          .subscribe(
            new Observer(
              this.router,
              null,
              true,
              true,
              this.sharedService,
              null
            ).OBSERVER_DELETE()
          );
      }
    });
  }
  updateStaus(id,status,type){
    if(type == 'tech'){
    swal({
      title: "Are you sure?",
      text: "You want to validate this",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["Cancel", "Confirm"],
    }).then((result) => {
      if (result) {
        this.backendService
        .post(PUT_WOREK_ORDER_END_POINT, {_id:id,status:status})
        .subscribe(
          new Observer(
            this.router,
            null,
            true,
            true,
            this.sharedService,
          ).OBSERVER_POST()
        );
      }
    });
  }
  if(type == "ad"){
    const modalRef = this.modalService.open(PostComponent);
    modalRef.componentInstance.title = "Accept work order";
    modalRef.componentInstance.type = VALDTION_WORK_ORDER_POPUP_TYPE;//
    modalRef.componentInstance.payload = { workOrderId: id,status:status} //;
  }
    
  }
  relonse(id){
    // alert()
const _id =this.flouups[this.flouups.length - 1]._id
    swal({
      title: "Are you sure?",
      text: "You want to validate this",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["Cancel", "Confirm"],
    }).then((result) => {
      if (result) {
               this.backendService
        .post(POST_FOLLOWUP, {id:id,_id:_id})
        .subscribe(
          new Observer(
            this.router,
            null,
            true,
            true,
            this.sharedService,
          ).OBSERVER_POST()
        );
      }
    });
    
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }

  handlePageChange(currentPage: number) {
 
      this.getOneWorkOrderBayId(this.type_user);
    
  }
//   test(id){
    
//     this.router.navigate
//     // [routerLink]="['', item._id]"
    
//     alert(id)}
}
