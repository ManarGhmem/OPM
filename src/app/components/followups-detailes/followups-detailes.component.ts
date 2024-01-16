import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { DELETE_FILE_FOR_TICKET_ADMIN_END_POINT, GET_FolloWUpsBYID, GET_ONE_WORK_ORDER_BY_ID_END_POINT, POST_FOLLOWUP, PUT_TICKET_END_POINT, PUT_WOREK_ORDER_END_POINT, PUT_followUps_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';
import { environment } from "./../../../environments/environment";
import { TICKET2_New_PLAN_POPUP_TYPE, TICKET_New_PLAN_POPUP_TYPE, TICKET_PLAN_POPUP_TYPE, VALDTION_FOLLOWUPS_POPUP_TYPE, VALDTION_WORK_ORDER_POPUP_TYPE } from "../../popup/popup-type";
import { PostComponent } from './../../popup/post/post.component';
import { DetailsComponent } from './../..///popup/details/details.component';
import swal from 'sweetalert';

@Component({
  selector: 'app-followups-detailes',
  templateUrl: './followups-detailes.component.html',
  styleUrls: ['./followups-detailes.component.scss']
})
export class FollowupsDetailesComponent implements OnInit {
  page = 1;
  collectionSize: number = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  nbrItemPage = 5;
  workOrder: any;
  flouups: any;
  listFile: any = null;
  id: any;
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
  EmpoloyesFirstNameLastName = "null";
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

    // this.url_imguplode = environment.apiUrl + "/" + this.id + "/Logo/";
    if (!this.type_user) { this.disAdmin = false }
    if (this.type_user == "technician") { this.disTech = false }
    if (this.type_user == "client") { this.disClt = false }

    if (this.type_user == "technician") { this.user_tech = true }
    if (this.type_user == "client") { this.user_Client = true }
    if (this.type_user == "admin") { this.user_admin = true }
  }
  ngOnInit() {
    this.getOneFollowUpsById();
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
  upadeteEtaDesTEch() {
     this.updatdestech = !this.updatdestech 
    }



  async getOneFollowUpsById() {
    this.backendService.get(`${GET_FolloWUpsBYID}/${this.route.snapshot.paramMap.get("id")}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.workOrder = response.rows;
        
        console.log("--------------------------------------------------..");
        console.log(this.workOrder);
        console.log("--------------------------------------------------..");
        this.titleWorkOrder = this.workOrder.title;
        this.StatusWorkOrder = this.workOrder.status;
        if (this.workOrder.isFollowUp) {
          this.flouups = this.workOrder.followUpList;


        }



        if (this.workOrder.employeeId) { this.EmpoloyesFirstNameLastName = this.workOrder.employeeId.firstName + " " + this.workOrder.employeeId.lastName; }
        this.DescriptioneworkOrder = this.workOrder.description;
        if (this.workOrder.ticketId) { this.ticketDescription = this.workOrder.ticketId.description; } else { this.ticketDescription = null; }
        this.partName = this.workOrder.partName;
        this.serialNum = this.workOrder.serialNum;
        if (this.workOrder.logo) { this.logoFileName = this.workOrder.logo.fileName; } else { this.logoFileName = null; }
        this.tickettitle = this.workOrder.partName;
        // this.titleworkOrder = this.workOrder.;
        // console.log(this.workOrder.ticketId._id);
        if (response.rows.ticketId != null) { this.listFile = response.rows.ticketId.listOfFiles; };
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
    modalRef.componentInstance.type = TICKET2_New_PLAN_POPUP_TYPE;
    modalRef.componentInstance.payload = { _id: this.workOrder._id, clientId: this.workOrder.clientId._id, employeeId: this.workOrder.employeeId._id,type:"ok" } //;
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
        .post(PUT_followUps_END_POINT, {_id:id,status:status})
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
    modalRef.componentInstance.type = VALDTION_FOLLOWUPS_POPUP_TYPE;//
    modalRef.componentInstance.payload = { workOrderId: id,status:status} //;
  }
    
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }

  handlePageChange(currentPage: number) {
 
      this.getOneFollowUpsById();
    
  }

}
