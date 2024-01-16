import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";
import swal from "sweetalert";
import Observer from "../../services/observer";
import { GET_DASHBORD_CONTRACT_END_POINT, GET_Technisien_WORK_ORDERS_bay_id_END_POINT, GET_USERUNHANDLING_WORK_ORDERS_END_POINT, GET_USER_ALL_EMPLOYEES_END_POINT, GET_USER_AllWorekOrders_END_POINT, GET_USER_BY_AUTHORTY_END_POINT, GET_USER_COUNT_Ticket_END_POINT, GET_USER_WOREKORDERS_BY_STATUS_END_POINT, GET_Unhandled_WORK_ORDERS__Client_END_POINT, GET_WORK_ORDERS_bayStatus_Client_END_POINT, USER_DASHBOARD_END_POINT } from "../../services/endpoints";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
nbr_workoederAll
nbr_workoederInprogres
nbr_workoederValied
nbr_workoederDon
nbr_workoederUnhandled
nbr_workoederExpired
nbr_tikets
nbr_contra
nb_usersClient
nb_usersCOMMERSIALE
nb_usersTechnisien
nb_allEmployees
role_users:any ;
user_id:any ;
user_work_in_progres
user_work_don
user_work_valied
user_work_orderexpired
user_work_unhandled

technisien_work_don
technisien_work_valied
technisien_work_orderexpired
technisien_work_in_progres
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService
  ) {
    this.nbr_workoederAll = 0;
    this.nbr_workoederInprogres=0;
    this.nbr_workoederValied =0;
    this.nbr_workoederDon=0;
    this.nbr_workoederExpired=0;
    this.nbr_workoederUnhandled=0;
this.nbr_tikets = 0 ;
    this.nbr_contra=0;
    this.nb_usersClient=0;
    this.nb_usersCOMMERSIALE=0;
    this.nb_usersTechnisien=0;
    this.nb_allEmployees = 0 ;

    this.user_work_in_progres=0;
    this.user_work_don=0;
    this.user_work_valied=0;
    this.user_work_orderexpired=0;
    this.user_work_unhandled=0;

    this.technisien_work_don=0;
    this.technisien_work_valied=0;
    this.technisien_work_orderexpired=0;
    this.technisien_work_in_progres=0;

    this.role_users = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority ;
    this.user_id= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken"))._id ;
  }

  ngOnInit() {
    // alert(this.role_users)
    if(this.role_users == 'admin'){
    this.CountUserBayAutorty("client")
    this.CountUserBayAutorty("technician")
    this.CountUserBayAutorty("commercial")
    this.countContract()
    this.CoutAllEmployees();
    this.CountWorekOrdersAll();
    this.CountWorkOrderBayStatus("In progress")
    this.CountWorkOrderBayStatus("Done")
    this.CountWorkOrderBayStatus("Valid")
    this.CountWorkOrderBayStatus("Expired")
    this.CountTickets()
    this.CountUnhandliingWorkOrders()
  }if(this.role_users == 'client'){
    this.CountWorkOrderBayClientIDAndStatus(this.user_id,"In progress")
    this.CountWorkOrderBayClientIDAndStatus(this.user_id,"Done")
    this.CountWorkOrderBayClientIDAndStatus(this.user_id,"Valid")
    this.CountWorkOrderBayClientIDAndStatus(this.user_id,"Expired")
    this.CountUnhandlingWorkOrderFroClient(this.user_id)

  }if(this.role_users == 'technician'){

this.CountWorkOrderBayTechnisienIDAndStatus(this.user_id,"In progress")
this.CountWorkOrderBayTechnisienIDAndStatus(this.user_id,"Done")
this.CountWorkOrderBayTechnisienIDAndStatus(this.user_id,"Valid")
this.CountWorkOrderBayTechnisienIDAndStatus(this.user_id,"Expired")
  }
    
  }
  CountUserBayAutorty(authority:string) {
    this.backendService
      .get(`${GET_USER_BY_AUTHORTY_END_POINT}/${authority}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
        if(response.rows.authority == 'client'){this.nb_usersClient = response.rows.count}
        if(response.rows.authority == 'technician'){this.nb_usersTechnisien = response.rows.count}
        if(response.rows.authority == 'commercial'){this.nb_usersCOMMERSIALE = response.rows.count}
        })
      );
  }
  countContract() {
    this.backendService
      .get(`${GET_DASHBORD_CONTRACT_END_POINT}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
           this.nbr_contra=response.rows.count ;

        })
      );
  }
  CoutAllEmployees() {
    this.backendService
      .get(`${GET_USER_ALL_EMPLOYEES_END_POINT}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {

          this.nb_allEmployees=response.rows.count ;
        })
      );
  }
  CountWorekOrdersAll() {
    this.backendService
      .get(`${GET_USER_AllWorekOrders_END_POINT}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {

            this.nbr_workoederAll=response.rows.count ;

        })
      );
  }
  CountWorkOrderBayStatus(operation: string) {
    this.backendService
      .get(`${GET_USER_WOREKORDERS_BY_STATUS_END_POINT}/${operation}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
// 'In progress', 'Done','Valid' , 'Expired'
            if(operation == 'In progress'){this.nbr_workoederInprogres = response.rows.count }
            if(operation == 'Done'){this.nbr_workoederDon = response.rows.count }
            if(operation == 'Valid'){this.nbr_workoederValied = response.rows.count }
            if(operation == 'Expired'){this.nbr_workoederExpired = response.rows.count }

        })
      );
  }
  CountTickets() {
    this.backendService
      .get(`${GET_USER_COUNT_Ticket_END_POINT}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          this.nbr_tikets=response.rows.count ;
        })
      );
  }
  CountUnhandliingWorkOrders() {
    this.backendService
      .get(`${GET_USERUNHANDLING_WORK_ORDERS_END_POINT}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {

            this.nbr_workoederUnhandled=response.rows.count ;

        })
      );
  }
  // 
  CountWorkOrderBayClientIDAndStatus(clientId: string,status:string) {
    this.backendService
      .get(`${GET_WORK_ORDERS_bayStatus_Client_END_POINT}/${clientId}/${status}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {



          if(status == 'In progress'){this.user_work_in_progres = response.rows.count }
          if(status == 'Done'){this.user_work_don = response.rows.count }
          if(status == 'Valid'){this.user_work_valied = response.rows.count }
          if(status == 'Expired'){this.user_work_orderexpired = response.rows.count }
       
            // this.nb_usersClient=response.rows.count ;

        })
      );
  }
  CountUnhandlingWorkOrderFroClient(Id_Client: string) {
    this.backendService
      .get(`${GET_Unhandled_WORK_ORDERS__Client_END_POINT}/${Id_Client}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {

            this.user_work_unhandled=response.rows.count ;
            console.log("this.user_work_unhandled"+this.user_work_unhandled);
            

        })
      );
  }
  CountWorkOrderBayTechnisienIDAndStatus(employeeId: string,status:string) {
    this.backendService
      .get(`${GET_Technisien_WORK_ORDERS_bay_id_END_POINT}/${employeeId}/${status}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          if(status == 'In progress'){this.technisien_work_in_progres = response.rows.count }
          if(status == 'Done'){this.technisien_work_don = response.rows.count }
          if(status == 'Valid'){this.technisien_work_valied = response.rows.count }
          if(status == 'Expired'){this.technisien_work_orderexpired = response.rows.count }
          console.log("-----------------------------------------------");
          console.log(response);
          console.log("-----------------------------------------------");

          
          
        })
      );
  }
}
