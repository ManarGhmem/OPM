import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import {  DELETE_USER_WORK_ORDER_END_POINT, GET_WOREK_ORDER_FOR_CLT_BY_STATUS_END_POINT, GET_WOREK_ORDER_FOR_CLTe_END_POINT, GET_WOREK_ORDER_FOR_TECH_BY_STATUS_END_POINT, GET_WOREK_ORDER_FOR_Te_END_POINT } from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';
import { DetailsComponent } from './../../popup/details/details.component';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { WORK_ORDER_POPUP_TYPE } from '../../popup/popup-type';
import swal from 'sweetalert';


@Component({
  selector: 'app-tech-workorder',
  templateUrl: './tech-workorder.component.html',
  styleUrls: ['./tech-workorder.component.scss']
})
export class TechWorkorderComponent implements OnInit {
  WorekOrderList;
  page = 1;
  collectionSize: number = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  nbrItemPage = 5;
  change = false ;
  value_change :any ;
  p=1
  userRole:any ;
  tech_id
  id;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {

   this.tech_id= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken"))._id ;
  this.userRole= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority ;

  // alert(this.userRole)
  }
  ngOnInit() {
        this.getListWorkorderList();
  }
getListWorkorderListByStatus(status:any,url?) {
  let endpoint
  if(this.userRole == 'client'){
    endpoint =  GET_WOREK_ORDER_FOR_CLT_BY_STATUS_END_POINT
  }
  //
// 
  if(this.userRole == 'technician'){
    endpoint =  GET_WOREK_ORDER_FOR_TECH_BY_STATUS_END_POINT
  }
  this.WorekOrderList = [];
  this.backendService.get(`${endpoint}/${this.tech_id}/${status}`).subscribe(
    new Observer().OBSERVER_GET((response) => {
      console.log(response.rows);
       this.WorekOrderList = response.rows;
    })
  );
}
changeSelectedFile(valid) {
  this.change = true ;
  this.value_change= valid ;
  if(valid != 'All'){this.getListWorkorderListByStatus(valid);}else{}

//   All
// 
// 
// 
if(valid == 'All'){this.getListWorkorderList()}else{
  console.log(valid);
  
  // this.getListWorkorderListByStatus(valid);
}

  console.log(valid);
  
}
  getListWorkorderList() {
    let endpoint
    if(this.userRole == 'client'){
      endpoint =  GET_WOREK_ORDER_FOR_CLTe_END_POINT
    }
    if(this.userRole == 'technician'){
      endpoint =  GET_WOREK_ORDER_FOR_Te_END_POINT
    }
  this.WorekOrderList = [];
      this.backendService.get(`${endpoint}/${this.tech_id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response.rows);
         this.WorekOrderList = response.rows;
      })
    );
  }
  OpenModal(title: string) {
   
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {"clientId":""};

  }
  OpenModalUp(title: string,item?) {
   
    const modalRef = this.modalService.open(PutComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {...item,"clientId":""};
  }
  OpenDetails(title: string, payload:any){

    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = "tiket_detalise";
    modalRef.componentInstance.payload = { ...payload };
  }
  deleteWork(id_work_order: string) {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this !",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons:["Cancel", "Confirm"],
    }).then((result) => {
      if (result) {
        this.backendService
          .delete(`${DELETE_USER_WORK_ORDER_END_POINT}/${id_work_order}`)
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
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }
  handlePageChange(currentPage: number) {
    if(this.change){
      this.getListWorkorderListByStatus(this.value_change);//getWorkOrderByClientIdByStatus
    }else    {this.getListWorkorderList()}

    this.page = currentPage;
  }
}
