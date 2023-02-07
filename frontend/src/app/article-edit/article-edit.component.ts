import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent {

  article: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getArticle(this.route.snapshot.paramMap.get('id'))
  }

  getArticle(id: any): void {
    this.apiService.getArticle(id).subscribe(data => {
      this.article = data;
    })
  }

  update() {
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to update this article`,
      confirmButtonText: 'OK',
      showCancelButton: true 
    }).then((willUpdate) => {
      if(willUpdate.value) {
        this.apiService.update(this.article.id, this.article)
          .subscribe(
            response => {
                this.getArticle(this.route.snapshot.paramMap.get('id'));
                (window as Window).location = '/'
            },
            error => {
            }
          )
        // Swal.fire("Success");
      } else {
        (window as Window).location = '/'
      }
    });
  }

}
