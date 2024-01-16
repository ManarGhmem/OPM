import { Component, OnInit } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { BackendService } from "../../../services/backend.service";
import { GET_USER_By_ID_END_POINT, UPDATE_PAGE_END_POINT} from "../../../services/endpoints";
import { SharedService } from "../../../services/shared.service"; 
import { Router } from "@angular/router";
import Observer from "../../../services/observer";
import { DatePipe } from '@angular/common'

@Component({
  selector: "app-update-page", // Anciennement "app-signup"
  templateUrl: "./update-page.component.html",
  styleUrls: ["./update-page.component.scss"],
})
export class UpdatePageComponent implements OnInit {
 date
  authority: string;
  formUpdate:FormGroup
  obj_user
  objectUpdate
    selectedImage: File = null;
    selectedImageURL: string = null;
  constructor(
    public datepipe: DatePipe,
    private backendService: BackendService,
    private sharedService: SharedService,
    public router: Router
  ) {
    this.obj_user= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")) ;
// console.log(this.obj_user);


  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      this.selectedImageURL = URL.createObjectURL(this.selectedImage);
    }
  }

  ngOnInit() {
this.authority = this.sharedService.getItem("role");
this.getUserById();

 }
 getUserById(){
   
   
   this.backendService.get(`${GET_USER_By_ID_END_POINT}/${this.obj_user._id}/${this.obj_user.authority}`).subscribe(
     new Observer().OBSERVER_GET((response) => {
       // console.log(response.rows[0]);
       this.objectUpdate = response.rows[0];
       this.date=new Date(response.rows[0].birthDate);
       this.objectUpdate.birthDate=this.datepipe.transform(this.date, 'dd-MM-yyyy')
      console.log('++++++++++++++++++++++++');
      console.log(this.objectUpdate.birthDate);
      console.log('++++++++++++++++++++++++');

    })
    );

 }

onSubmit(form: NgForm) { 
  let endpoint: string = "";
  let payload = { ...form.value };
  switch(this.obj_user.authority){
    case "client":
      endpoint ="getUserByIdByAuthority" ;
      payload = { ...payload, UserId: "" };
      break;
    case "commercial":
       endpoint ="getUserByIdByAuthority" ;
       payload = { ...payload, UserId: "" };
       break;
    case "technicien":
       endpoint ="getUserByIdByAuthority" ;
       payload = { ...payload, UserId: "" };
       break; 
  }
  this.backendService.put(endpoint, payload)
  .subscribe(
    new Observer(
      this.router,
      null,
      true,
      true,
      this.sharedService,
    ).OBSERVER_POST()
  );

}

}


