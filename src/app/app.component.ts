import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Concession Kiosk - Menu!';
  Form = new FormGroup({
    hotdog: new FormControl(''),
    hamburger: new FormControl(''),
    salad: new FormControl(''),
    pizza: new FormControl(''),
    soda: new FormControl('')
  });

  onSubmit() {
    console.warn(this.Form.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    this.Form.controls['nombreControl']
  }

}
