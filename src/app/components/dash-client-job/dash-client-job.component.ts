import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";
import Observer from "../../services/observer";
import { GET_USER_USER_COUNT_worekorder_BY_VALIDE, GET_Unhandled_WORK_ORDERS__Client_END_POINT, GET_WORK_ORDERS_bay_CLIENT_id_END_POINT} from "../../services/endpoints";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dash-client-job',
  templateUrl: './dash-client-job.component.html',
  styleUrls: ['./dash-client-job.component.scss']
})
export class DashClientJobComponent implements OnInit {
  id:string ;
  authority
  myWorekorder
  myWorekorderunhndled
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken"))._id;
    this.authority = this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority;
    this.myWorekorder =0
    this.myWorekorderunhndled =0

// 
  }
  ngOnInit() {
this.CountUnhandlingWorkOrderFroClient(this.id)
this.getWorkorderUnhandled(this.id)
  }
  getWorkorderUnhandled(id:string) {

    this.backendService.get(`${GET_WORK_ORDERS_bay_CLIENT_id_END_POINT}/${id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {

         this.myWorekorder = response.rows.count;
      })
    );
  }

  CountUnhandlingWorkOrderFroClient(Id_Client: string) {
    this.backendService
      .get(`${GET_Unhandled_WORK_ORDERS__Client_END_POINT}/${Id_Client}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {

            this.myWorekorderunhndled=response.rows.count ;

            

        })
      );
  }

}
