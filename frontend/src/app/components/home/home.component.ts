import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ApiService } from 'src/app/services/api.service';
import { ArticleAddComponent } from '../article-add/article-add.component';
// import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public jsonData: any;

  constructor(
    private apiService: ApiService,
    private modalService: NzModalService
  ) {

  }

  ngOnInit() {
    this.apiService.getArticles().subscribe((data: any) => {
      this.jsonData = data;
    })
  }

  createComponentModal(): void {
    const modal = this.modalService.create({
      // nzTitle: 'Title',
      nzContent: ArticleAddComponent
    });

  }
  
}
