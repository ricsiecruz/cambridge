import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-article', component: ArticleAddComponent },
  { path: 'edit-article/:id', component: ArticleEditComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
