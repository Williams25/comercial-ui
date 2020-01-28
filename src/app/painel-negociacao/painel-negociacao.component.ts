import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {
  atualizar: boolean = false
  adiciona: boolean = true
  id: any

  oportunidade = {}
  oportunidades = []

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.consultar()
  }

  consultar() {
    this.oportunidadeService.listar().subscribe(resposta => this.oportunidades = <any>resposta)
  }

  cancel(){
    this.adiciona = true
    this.atualizar = false
    this.oportunidade = {}
  }
  
  pegarOportunidade(id: any) {
    this.oportunidadeService.pegarOportunidade(id).subscribe(res => this.oportunidade = <any>res)
    this.adiciona = false
    this.atualizar = true
  }

  atualiza() {
    this.oportunidadeService.atualiza(this.oportunidade).subscribe(() => {
      this.adiciona = true
      this.atualizar = false
      this.oportunidade = {}
      this.consultar()

      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade alterada'
      })
    },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente!'

        if (resposta.error.message) {
          msg = resposta.error.message
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        })
      })
  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade).subscribe(() => {
      this.oportunidade = {}
      this.consultar()

      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade cadastrada'
      })
    },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente!'

        if (resposta.error.message) {
          msg = resposta.error.message
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        })
      })
  }

  deletar(id: any) {
    this.oportunidadeService.deletar(id).subscribe(() => {
      this.consultar()

      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade apagada'
      })
    }, resposta => {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro inesperado. Tente novamente!'
      })
    })
  }

  showConfirm(id: any, oportunidade: any) {
    this.id = id
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Deseja apagar está oportunidade?', detail: `( ${oportunidade} )` });
  }
  onConfirm(id: any) {
    id = this.id
    this.deletar(id)
    this.messageService.clear('c');
  }
  onReject() {
    this.messageService.clear('c');
  }
}
