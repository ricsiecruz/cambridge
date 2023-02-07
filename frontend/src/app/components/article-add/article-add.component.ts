import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Article } from '../../article';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent {

  articleForm = {} as FormGroup;
  article!: Article;
  userId: string = 'test';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.article = {} as Article;
    this.articleForm = new FormGroup({
      userId: new FormControl(this.article.userId),
      title: new FormControl(this.article.title),
      body: new FormControl(this.article.body),
      date: new FormControl(this.article.date)
    })
  }

  public validate(): void {
    // if (this.productForm.invalid) {
    //   for (const control of Object.keys(this.productForm.controls)) {
    //     this.productForm.controls[control].markAsTouched();
    //   }
    //   return;
    // }
    this.test()
    this.article = this.articleForm.value;
  }

  onFormSubmit() {
    console.log("test")
    const data = {
      userId: this.userId = "test",
      title: this.title.value,
      body: this.body.value,
      date: this.date.value
    }

    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to add this article`,
      confirmButtonText: 'OK',
      showCancelButton: true 
    }).then((willAdd) => {
        if(willAdd.value) {
          this.http.post<any>(`http://localhost:3000/articles`, data).subscribe(
            (res) => {
              this.test()
              // this.loading = false;
              if(res.errorCode===1){
                this.error(res.errorMessage)
              }
              else{
                this.test()
              }
            },
            (err) => {
              // this.loading = false;
            }
          );
      }
      else{
        return;
      }
  
    });
  }

  error(message:any){
    Swal.fire({
      title: message,
      confirmButtonText: 'OK'
    }).then(function() {
  });
  }

  // get userId() {
  //   return this.articleForm.get('userId')!;
  // }

  get title() {
    return this.articleForm.get('title')!;
  }

  get body() {
    return this.articleForm.get('body')!;
  }

  get date() {
    return this.articleForm.get('date')!;
  }

  test(){
    Swal.fire({
      title: 'Success!',
      text: 'Article added',
      confirmButtonText: 'OK'
    }).then(function() {
      (window as Window).location = '/'
  });
  }

}
