import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { DELETE_PART_ORDER_END_POINT, GET_CONTRACT_END_POIN, GET_PART_ORDER_BY_CLIENTSTATUS_ID_END_POIN, GET_PART_ORDER_BY_CLIENT_ID_END_POIN} from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';
import { DetailsComponent } from './../../popup/details/details.component';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { AFFECTE_COMMERCIALE_TO_CONTRACT, PART_ORDER_POPUP_TYPE } from '../../popup/popup-type';
import swal from 'sweetalert';

@Component({
  selector: 'app-contract-users',
  templateUrl: './contract-users.component.html',
  styleUrls: ['./contract-users.component.scss']
})
export class ContractUsersComponent implements OnInit {
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
   this.id_user_connected= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken"))._id ;
  this.userRole= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority ;
  }
  ngOnInit() {
        this.getListPartOrder();
  }


  getListPartOrder() {
  this.partOrderList = [];
      this.backendService.get(`${GET_CONTRACT_END_POIN}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response.rows);
         this.partOrderList = response.rows;
      })
    );
  }
  OpenModalUp(title: string,item) {
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = AFFECTE_COMMERCIALE_TO_CONTRACT;
    if(item.employeeId){modalRef.componentInstance.payload = {"_id":item._id,"sla":item.sla,"employeeId":item.employeeId._id};}
    if(!item.employeeId){modalRef.componentInstance.payload = {"_id":item._id,"sla":item.sla};}
// console.log({"_id":item._id,"sla":item.sla,"employeeId":item.employeeId._id});
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }
  handlePageChange(currentPage: number) {
    if(this.change){
      this.getListPartOrder();//getWorkOrderByClientIdByStatus
    }else    {this.getListPartOrder()}

    this.page = currentPage;
  }
}
