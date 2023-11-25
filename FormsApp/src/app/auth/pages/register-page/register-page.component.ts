import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


  public myForm: FormGroup = this.fb.group({
  name:['',[Validators.required, Validators.pattern( this.validatorsServiice.firstNameAndLastnamePattern)]],
  email:['',[Validators.required, Validators.pattern(this.validatorsServiice.emailPattern) ]],
  username:['',[Validators.required, this.validatorsServiice.cantBeStrider]],
  password:['',[Validators.required, Validators.minLength(6)]],
  password2:['',[Validators.required]],
});

  constructor( private fb: FormBuilder,
    private validatorsServiice: ValidatorsService
    ) {}

  isValidField( field: string ) {
    return this.validatorsServiice.isValidField( this.myForm, field );

  }

onSubmit(){
  this.myForm.markAllAsTouched();
}

}
