import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  name = "Kauan Souza";
  listItems = [1,2,3,4,5]

  @Input() minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  
  submit(){
    this.emitindoValorName.emit(this.name)
    this.enviaFormService.enviaInformacao("Enviou?")
  }
}
