import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  deveMostrarTitulo = true
  private enviaFormService = inject(EnviaFormularioService);

  listItems = [1,2,3,4,5]

  submit(){
    this.enviaFormService.enviaInformacao("Enviou?")
  }
}
