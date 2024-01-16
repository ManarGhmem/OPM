import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service';
import { PostComponent } from '../post/post.component';
import {  PART_ADD_BON_COMMANDE_POPUP_TYPE, PART_ADD_RESIEN_POPUP_TYPE, PART_ORDER_POPUP_TYPE } from '../popup-type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input('title') title:string;
  @Input('type') type:string;

  @Input('payload') payload:any;
  userRole
  constructor(public actifmodal:NgbActiveModal,    private sharedService: SharedService,
    private modalService: NgbModal,
    
    ) { 
    this.userRole= this.sharedService.getDecodedAccessToken(sessionStorage.getItem("accessToken")).authority ;
  }

  ngOnInit() {

    // console.log(JSON.stringify())
    // alert(this.userRole)
  }
  openFile() {
    // alert(url)
    window.open("http://127.0.0.1:3000/"+this.payload.devise[0].path);

  }
  openFile2() {
    // alert(url)
    window.open("http://127.0.0.1:3000/"+this.payload.bon_commande[0].path);

  }
  A
  AcceotDevis(title: string,id){
    this.actifmodal.close();
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = PART_ADD_BON_COMMANDE_POPUP_TYPE;
    modalRef.componentInstance.payload = {"_id":id};
  }
  RefuseDevis(title,id){
    this.actifmodal.close();
    const modalRef = this.modalService.open(PostComponent ,{ size: "lg", backdrop: "static" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = PART_ADD_RESIEN_POPUP_TYPE;
    modalRef.componentInstance.payload = {"_id":id};

  }
}
