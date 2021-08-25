import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import plantas from './Data/plantas.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pvutracker';
  page_size:number = 25
  page_number = 1
  public pvu_data = plantas.sort((a:any,b:any) => {
    for (let index = 0; index < a.activeTools.length; index++) {
      if(a.activeTools[index].type=="WATER"){
        for (let j = 0; j < b.activeTools.length; j++) {
          if(b.activeTools[j].type=="WATER")
          return a.activeTools[index].endTime.localeCompare(b.activeTools[j].endTime)
        }
      }
    }
    return
  })

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  getWater(tools:any){
    if(tools.type=="WATER"){
      return tools.endTime
    }
  }


}
