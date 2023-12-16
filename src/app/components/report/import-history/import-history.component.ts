import { Component, OnInit } from '@angular/core';
import {ImportServiceService} from "../../../store/services/importHistory.service"
import * as _ from 'lodash';
@Component({
  selector: 'app-import-history',
  templateUrl: './import-history.component.html',
  styleUrls: ['./import-history.component.scss']
})
export class ImportHistoryComponent implements OnInit {

  listData : any = []
  constructor(
    private importHistoryService : ImportServiceService
  ){

  }

  ngOnInit(){
  this.onLoadImportHistory();
  }

  onLoadImportHistory(){
    this.importHistoryService.getAllImportHistory().subscribe((response : any) =>{
      this.listData = _.cloneDeep(response);
    })
  }
}
