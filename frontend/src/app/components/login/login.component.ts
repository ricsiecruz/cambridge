import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  
  constructor(
    public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
    });
  }
  
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    // this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    this.authenticationService.login(this.f['username'].value, this.f['email'].value)
        .pipe(first())
        .subscribe(
            data => {
                // this.isLoginFailed = false;
                this.router.navigate(['/']);
                console.log("success", data)
            },
            error => {
                console.log("error")
            });

    // this.authenticationService.login(this.f['userName'].value, this.f['password'].value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             // this.isLoginFailed = false;
    //             // this.router.navigate([this.returnUrl]);
    //             console.log("success", data)
    //         },
    //         error => {
    //             console.log("error")
    //         });
}
}
