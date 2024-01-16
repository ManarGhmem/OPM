import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import {  DELETE_USER_WORK_ORDER_END_POINT,   GET_ALL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT,   GET_LIST_Work_Orders_BY_CLIENTS, GET_USER_WORK_ORDER_BY_STATUS_END_POINT } from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';
import { DetailsComponent } from './../../popup/details/details.component';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { ADD_TECH_WORK_ORDER_POPUP_TYPE, WORK_ORDER_POPUP_TYPE } from '../../popup/popup-type';
import swal from 'sweetalert';


@Component({
  selector: 'app-unhandled-work-orders-detail-admin',
  templateUrl: './unhandled-work-orders-detail-admin.component.html',
  styleUrls: ['./unhandled-work-orders-detail-admin.component.scss']
})
// GET_ALL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT
export class UnhandledWorkOrdersDetailAdminComponent implements OnInit {
  WorekOrderList;
  page = 1;
  collectionSize: number = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  nbrItemPage = 5;
  id:any ;
  change = false ;
  value_change :any ;
  p=1
  authority
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id=this.route.snapshot.paramMap.get("id");
    //  
    this.authority = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority;
    // alert(this.authority)

  }

  ngOnInit() {
        this.getListWorkorderListUnhandled();
        
  }

getListWorkorderListByStatus(status:any) {
  this.WorekOrderList = [];
  this.backendService.get(`${GET_USER_WORK_ORDER_BY_STATUS_END_POINT}/${this.id}/${status}`).subscribe(
    new Observer().OBSERVER_GET((response) => {
      console.log(response.rows);
       this.WorekOrderList = response.rows;
    })
  );
}


  getListWorkorderListUnhandled() {
  this.WorekOrderList = [];
      this.backendService.get(`${GET_ALL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT}/${this.id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
         this.WorekOrderList = response.rows;
      })
    );
  }
  addtech(tech){
    alert("ok")
  }

  OpenDetails(title: string, id:any){
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = ADD_TECH_WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {"_id":id};  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }

  handlePageChange(currentPage: number) {
    if(this.change){
      this.getListWorkorderListByStatus(this.value_change);
    }else    {this.getListWorkorderListUnhandled()}

    this.page = currentPage;
  }

}
