import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{
  constructor(private formBuilder : FormBuilder){
  }

  anagraficaForm:FormGroup= this.formBuilder.group({anagrafica: this.formBuilder.group({
    nome: this.formBuilder.nonNullable.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    cognome: this.formBuilder.nonNullable.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]),
    dataNascita: this.formBuilder.nonNullable.control('', [Validators.required]),
    luogoNascita: this.formBuilder.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
    codiceFiscale: this.formBuilder.nonNullable.control('', [Validators.required, Validators.pattern("[A-Za-z0-9]{16}")])
  })
  })
  onSubmit(){
    
  }
}
