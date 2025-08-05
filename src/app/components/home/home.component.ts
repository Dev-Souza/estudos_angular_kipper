import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  deveMostrarTitulo = true

  submit() {

  }

  listItems = [1,2,3,4,5]
}
