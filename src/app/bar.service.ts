import { Injectable } from '@angular/core';
import { DadosGerais } from './shared/dadosGerais.model';

@Injectable()
export class BarService {
  private dadosGerais: DadosGerais
  constructor() { }

  public setDadosGerais(dadosGerais) {
    this.dadosGerais = { ...dadosGerais }
  }

  public getDadosGerais(): DadosGerais {
    return this.dadosGerais
  }
}