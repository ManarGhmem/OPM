import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { GET_USER_employers_BY_VALID_END_POINT, GET_USER_employers_END_POINT, PUT_USER_USER_employers_BY_VALIDE } from '../../services/endpoints';
import Observer from '../../services/observer';
@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {
  employerslist: [] = [];
  collectionSize: number = 0;
  p = 1;
  page = 1;
  nbrItemPage = 5;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  id_company: string;
  typeUserSelected:any ;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getAllEmployeesByAuthority("technician");
  }

  getAllEmployeesByAuthority(typeEmp: string) {
    this.backendService.get(`${GET_USER_employers_END_POINT}/${typeEmp}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.employerslist = response.rows;
        console.log(this.employerslist);

      })
    );
  }

  getAllEmployeesByValid(valide: string,userRolle:string) {
    this.backendService.get(`${GET_USER_employers_BY_VALID_END_POINT}/${valide}/${userRolle}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.employerslist = response.rows;
      })
    );
  }


  changeEtaEmpl(etat: boolean, email: string) {
    const payload = { valid: etat, email: email }
    this.backendService
      .put(PUT_USER_USER_employers_BY_VALIDE, payload)
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
    this.getAllEmployeesByValid(valid,this.typeUserSelected);
  }
  changeSelectedFile2(typeUser) {
    this.typeUserSelected=typeUser ;
    this.getAllEmployeesByAuthority(this.typeUserSelected);
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.nbrItemPage = event.target.value;
  }

  handlePageChange(currentPage: number) {
    this.page = currentPage;
  }


}
