import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { GET_LIST_CLIENTS_All, GET_LIST_CLIENTS_BAY_Type, GET_LIST_CLINT_PART_ORDERS_All, GET_LIST_FOLDERS_All, GET_USER_employers_BY_VALID_END_POINT, GET_USER_employers_END_POINT, PUT_USER_USER_CLIENTS_BY_VALIDE, PUT_USER_USER_employers_BY_VALIDE } from '../../services/endpoints';
import Observer from '../../services/observer';

@Component({
  selector: 'app-work-order-from-client-list',
  templateUrl: './work-order-from-client-list.component.html',
  styleUrls: ['./work-order-from-client-list.component.scss']
})
export class WorkOrderFromClientListComponent implements OnInit {

  clientList: [] = [];
  collectionSize: number = 0;
  p=1;
  page = 1;
  nbrItemPage = 5;
  pageSize = 5;
  pageSizes = [5, 10, 20];

  id_company:string;
  id_user:any;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
        this.getListClientForWorekorder();
  }

  getListClientForWorekorder() {

    this.backendService.get(`${GET_LIST_CLINT_PART_ORDERS_All}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
         this.clientList = response.rows;
      })
    );
  }

  getListFolderByValid(valide:string ) {

    this.backendService.get(`${GET_LIST_CLIENTS_BAY_Type}/${valide}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);

        // this.collectionSize=response.totalItems;
         this.clientList = response.rows;
      })
    );
  }




  changeEtaClient(etat:boolean,email:string){
    const payload ={valid:etat,email:email}
     this.backendService
     .put(PUT_USER_USER_CLIENTS_BY_VALIDE, payload)
     .subscribe(
       new Observer(
         this.router,// just un class dans angular
         null,//target : lin eli machilou
         true,//relode
         true,//swwet alert
         this.sharedService,//obligtour si ona reload
       ).OBSERVER_EDIT()
     );
       }

  changeSelectedFile(valid) {
    this.getListFolderByValid(valid);

  }
  handlePageSizeChange(event: any): void {

    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }
  handlePageChange(currentPage: number) {
 
    this.getListClientForWorekorder();

  this.page = currentPage;
}


}
