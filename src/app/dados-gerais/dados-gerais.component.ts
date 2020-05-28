import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.css']
})
export class DadosGeraisComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    quantidadeComercio: new FormControl(0),
    textoComercio: new FormControl(''),
    quantidadeIndustria: new FormControl(0),
    textoIndustria: new FormControl(''),
    quantidadeTransferencia: new FormControl(0),
    textoTransferencia: new FormControl(''),
    quantidadePorte: new FormControl(0),
    textoPorte: new FormControl(''),
    quantidadeSegundaViaCRAF: new FormControl(0),
    textoSegundaViaCRAF: new FormControl(''),
    quantidadeStatus: new FormControl(0),
    textoStatus: new FormControl(''),
    quantidadeManutencao: new FormControl(0)
  })
  constructor(private service: BarService) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.service.setDadosGerais(this.form.value)
    console.log(this.service.getDadosGerais())
  }

}