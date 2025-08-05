import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacao(info: string) {
    console.log(info)
  }
}
