import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { GET_LIST_CLIENTS_All, GET_LIST_CLIENTS_BAY_Type, GET_USER_employers_BY_VALID_END_POINT, GET_USER_employers_END_POINT, PUT_USER_USER_CLIENTS_BY_VALIDE, PUT_USER_USER_employers_BY_VALIDE } from '../../services/endpoints';


import Observer from '../../services/observer';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  clientList: [] = [];
  collectionSize: number = 0;
  p=1;
  page = 1;
  nbrItemPage = 5;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  id_company:string;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
        this.getListClient();
  }

  getListClient() {

    this.backendService.get(`${GET_LIST_CLIENTS_All}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);

        // this.collectionSize=response.totalItems;
         this.clientList = response.rows;
      })
    );
  }

  getListClientByValid(valide:string ) {

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
    this.getListClientByValid(valid);

  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  this.nbrItemPage =event.target.value ;
  }

  handlePageChange(currentPage: number) {
 
      this.getListClient();

    this.page = currentPage;
  }


}
