import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsServiice.firstNameAndLastnamePattern )  ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ new EmailValidator() ]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorsServiice.emailPattern )], [ this.emailVaidator ]],
    username: ['', [ Validators.required, this.validatorsServiice.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }, {
    validators: [
      this.validatorsServiice.isFieldOneEqualFieldTwo('password','password2')
    ]
  });

  constructor( private fb: FormBuilder,
    private validatorsServiice: ValidatorsService,
    private emailVaidator:EmailValidator
    ) {}

  isValidField( field: string ) {
    return this.validatorsServiice.isValidField( this.myForm, field );

  }

onSubmit(){
  this.myForm.markAllAsTouched();
}

}
