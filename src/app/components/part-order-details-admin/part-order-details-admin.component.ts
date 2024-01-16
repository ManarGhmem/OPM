import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { DELETE_PART_ORDER_END_POINT, GET_PART_ORDER_BY_CLIENTSTATUS_ID_END_POIN, GET_PART_ORDER_BY_CLIENT_ID_END_POIN} from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';
import { DetailsComponent } from './../../popup/details/details.component';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { PART_ADD_BON_COMMANDE_POPUP_TYPE, PART_ADD_DEVIS_POPUP_TYPE, PART_ORDER_POPUP_TYPE } from '../../popup/popup-type';
import swal from 'sweetalert';

@Component({
  selector: 'app-part-order-details-admin',
  templateUrl: './part-order-details-admin.component.html',
  styleUrls: ['./part-order-details-admin.component.scss']
})
export class PartOrderDetailsAdminComponent implements OnInit {
  partOrderList;
  page = 1;
  collectionSize: number = 0;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  nbrItemPage = 5;
  change = false ;
  value_change :any ;
  p=1
  userRole:any ;
  id_user_connected
  id;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
   this.id_user_connected= this.route.snapshot.paramMap.get("id");
  this.userRole= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority ;
  }
  ngOnInit() {
        this.getListPartOrder();
  }
getListWorkorderListByStatus(status:any,url?) {

  this.partOrderList = [];
  this.backendService.get(`${GET_PART_ORDER_BY_CLIENTSTATUS_ID_END_POIN}/${this.id_user_connected}/${status}`).subscribe(
    new Observer().OBSERVER_GET((response) => {
      console.log(response.rows);
       this.partOrderList = response.rows;
    })
  );
}
changeSelectedFile(valid) {
  this.change = true ;
  this.value_change= valid ;
  if(valid != 'All'){this.getListWorkorderListByStatus(valid);}else{}

if(valid == 'All'){this.getListPartOrder()}else{
  console.log(valid);
}
 
}
  getListPartOrder() {
  this.partOrderList = [];
      this.backendService.get(`${GET_PART_ORDER_BY_CLIENT_ID_END_POIN}/${this.id_user_connected}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response.rows);
         this.partOrderList = response.rows;
      })
    );
  }
  OpenModal(title: string) {
   
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = PART_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {"clientId":this.id_user_connected};

  }
  addDevis(id:string) {
  //  alert(id)  PART_ADD_BON_COMMANDE_POPUP_TYPE
  let title =""
  let type =""
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    if(this.userRole == 'commercial') 
    {
      modalRef.componentInstance.type = PART_ADD_DEVIS_POPUP_TYPE ;
      title = 'Add purchase quote (commercial)';
      // type ='technician';
    } ;
    if(this.userRole == 'client') {
      modalRef.componentInstance.type = PART_ADD_BON_COMMANDE_POPUP_TYPE;
      title = 'Purchase order'
      // type ='client';
    
    } ;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.payload = {"id":id};

  }
  // addBnCommande(title: string,id:string) {
  //   //  alert(id)  
  //     const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
  //     modalRef.componentInstance.title = title;
  //     modalRef.componentInstance.type =  ;
  //     modalRef.componentInstance.payload = {"id":id};
  
  //   }
  // 
  OpenModalUp(title: string,item?) {
    const modalRef = this.modalService.open(PutComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = PART_ORDER_POPUP_TYPE;
    modalRef.componentInstance.payload = {...item,"clientId":""};
  }
  OpenDetails(title: string, payload:any){
    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = "part_order_detalise";
    modalRef.componentInstance.payload = { ...payload };
  }
  deleteWork(id_part_order: string) {
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
          .delete(`${DELETE_PART_ORDER_END_POINT}/${id_part_order}`)
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
    }else    {this.getListPartOrder()}

    this.page = currentPage;
  }
}
