import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades'

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl)
  }

  pegarOportunidade(id: any) {
    return this.httpClient.get(this.apiUrl + `/${id}`)
  }

  atualiza(oportunidade: any) {
    return this.httpClient.put(this.apiUrl, oportunidade)
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade)
  }

  deletar(id: any) {
    return this.httpClient.delete(this.apiUrl + `/${id}`)
  }
}
