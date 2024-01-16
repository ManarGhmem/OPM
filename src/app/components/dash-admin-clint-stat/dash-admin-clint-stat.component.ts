import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";
import Observer from "../../services/observer";
import { GET_COUNTL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT, GET_LIST_FOLDERS_All, GET_USER_COUNT_files_BY_VALID_END_POINT, GET_USER_COUNT_tickrt_END_POINT, GET_USER_USER_COUNT_worekorder_BY_VALIDE} from "../../services/endpoints";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dash-admin-clint-stat',
  templateUrl: './dash-admin-clint-stat.component.html',
  styleUrls: ['./dash-admin-clint-stat.component.scss']
})
export class DashAdminClintStatComponent implements OnInit {
  id_company: string;
  ticket: number;
  files: number;
  id:string ;
  workorder: number;
namCLient:any;
folderName:any;
UnhandledWorkorder: number;
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id =""
    this.folderName =""
    this.namCLient =""
    this.workorder = 0 ;
    this.ticket = 0 ;
    this.files = 0 ;
    this.UnhandledWorkorder = 0 ;

this.id=this.route.snapshot.paramMap.get("id");
this.folderName=this.route.snapshot.paramMap.get("folderName");
this.namCLient=this.route.snapshot.paramMap.get("clientName");
  }
  ngOnInit() {
    this.getTicket(this.id);
    this.getFiles(this.id);
    this.getWorkorder(this.id);
    this.getWorkorderUnhandled(this.id)
  }

  getTicket(id:string) {
    // alert(id)

    this.backendService.get(`${GET_USER_COUNT_tickrt_END_POINT}/${id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    // alert(response.rows.count);

        // this.collectionSize=response.totalItems;
         this.ticket = response.rows.count;
      })
    );
  }
  getFiles(id:string) {


    this.backendService.get(`${GET_USER_COUNT_files_BY_VALID_END_POINT}/${id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    // alert(response.rows.count);

        // this.collectionSize=response.totalItems;
         this.files = response.rows.count;
      })
    );
  }

  getWorkorder(id:string) {
    this.workorder = 0 ;

    this.backendService.get(`${GET_USER_USER_COUNT_worekorder_BY_VALIDE}/${id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    // alert(response.rows.count);

         this.workorder = response.rows.count;
      })
    );
  }

  getWorkorderUnhandled(id:string) {

    this.backendService.get(`${GET_COUNTL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT}/${id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {

         this.UnhandledWorkorder = response.rows.count;
      })
    );
  }
  // 

}
