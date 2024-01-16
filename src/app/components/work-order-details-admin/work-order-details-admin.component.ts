import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import {  DELETE_USER_WORK_ORDER_END_POINT, GET_HANDLED_WORK_ORDERS_BY_ID_END_POINT, GET_LIST_FILES_BY_CLIENTS, GET_LIST_Ticket_BY_CLIENTS, GET_LIST_Work_Orders_BY_CLIENTS, GET_USER_WORK_ORDER_BY_STATUS_END_POINT } from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';
import { DetailsComponent } from './../../popup/details/details.component';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { WORK_ORDER_POPUP_TYPE } from '../../popup/popup-type';
import swal from 'sweetalert';


@Component({
  selector: 'app-work-order-details-admin',
  templateUrl: './work-order-details-admin.component.html',
  styleUrls: ['./work-order-details-admin.component.scss']
})
export class WorkOrderDetailsAdminComponent implements OnInit {
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
  folderName
  namCLient
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id=this.route.snapshot.paramMap.get("id");
    this.folderName=this.route.snapshot.paramMap.get("folderName");
    this.namCLient=this.route.snapshot.paramMap.get("clientName");
    this.authority = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority;

    // alert(this.id)
  }

  ngOnInit() {
        this.getListWorkorderList();
        
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


changeSelectedFile(valid) {
  this.change = true ;
  this.value_change= valid ;
  if(valid != 'All'){this.getListWorkorderListByStatus(valid);}else{this.getListWorkorderList()}
  
}
// 00000
  getListWorkorderList() {
  this.WorekOrderList = [];
      this.backendService.get(`${GET_HANDLED_WORK_ORDERS_BY_ID_END_POINT}/${this.id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
         this.WorekOrderList = response.rows;
      })
    );
  }
  OpenModal(title: string) {
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {"clientId":this.id};
  }
  OpenModalUp(title: string,item?) {
    const modalRef = this.modalService.open(PutComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {...item,"clientId":this.id};
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
      this.getListWorkorderListByStatus(this.value_change);
    }else    {this.getListWorkorderList()}

    this.page = currentPage;
  }

}
