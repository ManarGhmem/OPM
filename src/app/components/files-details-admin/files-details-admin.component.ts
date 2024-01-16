import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import { GET_LIST_FILES_BY_CLIENTS } from '../../services/endpoints';
import { ActivatedRoute } from '@angular/router';
import Observer from '../../services/observer';

@Component({
  selector: 'app-files-details-admin',
  templateUrl: './files-details-admin.component.html',
  styleUrls: ['./files-details-admin.component.scss']
})
export class FilesDetailsAdminComponent implements OnInit {
  filesListe: [] = [];
  collectionSize: number = 0;
  page = 1;
  p: number = 1;
  pageSize = 5;
  pageSizes = [5, 10,20,40];
  id_company:string;
  id_user:any;
  id:any ;
  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    this.id=this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
        this.getListFilesByClients();
  }

  getListFilesByClients() {
    this.backendService.get(`${GET_LIST_FILES_BY_CLIENTS}/${this.id}`).subscribe(
      new Observer().OBSERVER_GET((response) => {
    console.log(response);
         this.filesListe = response.rows;
      })
    );
  }



openFile(url :string){
  const filesUrl = "E:/project/OPM-main/OPM-Backend/"+url ;
  window.open(url, '_blank');
}



  changeSelectedFile(valid) {
    // this.getListFolderByValid(valid);

  }
  handlePageSizeChange(event: any): void {

    this.pageSize = event.target.value;
    console.log(this.pageSize+"rrrrrrrrrrrr")
    this.page = 1;
  }

  handlePageChange(currentPage: number) {
    if(this.id_company){
      // this.getListFolder();
    }
    this.page = currentPage;
  }


}
