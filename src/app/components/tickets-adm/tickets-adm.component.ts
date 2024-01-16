import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import {  DELETE_USER_WORK_ORDER_END_POINT, GET_LIST_Work_Orders_BY_CLIENTS } from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';
import { DetailsComponent } from './../../popup/details/details.component';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { WORK_ORDER_POPUP_TYPE } from '../../popup/popup-type';
import swal from 'sweetalert';

@Component({
  selector: 'app-tickets-adm',
  templateUrl: './tickets-adm.component.html',
  styleUrls: ['./tickets-adm.component.scss']
})
export class TicketsAdmComponent implements OnInit {
  WorekOrderList;
  collectionSize: number = 0;
  page = 1;
  p: number = 1;
  pageSize = 5;
  pageSizes = [5, 10, 20, 40];
  id_company: string;
  id_user: any;
  id: any;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    this.getListWorkorderList();
  }
  getListWorkorderList() {
    this.backendService.get(`${GET_LIST_Work_Orders_BY_CLIENTS}/${this.id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        console.log(response.rows);
        this.WorekOrderList = response.rows;
      })
    );
  }
  OpenModal(title: string) {
    const modalRef = this.modalService.open(PostComponent, { size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = { "clientId": this.id };

  }

  OpenModalUp(title: string, item?) {
    const modalRef = this.modalService.open(PutComponent, { size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = WORK_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = { ...item, "clientId": this.id };
  }
  OpenDetails(title: string, payload: any) {
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
      buttons: ["Cancel", "Confirm"],
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

  changeSelectedFile(valid) {
    // this.getListFolderByValid(valid);
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }
  handlePageChange(currentPage: number) {
    if (this.id_company) {
      // this.getListFolder();
    }
    this.page = currentPage;
  }
}
