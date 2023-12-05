import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { Reclamo } from 'src/app/models/reclamo.module';
import { ProductService, reclamiService } from '../../retrieve.services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, AfterViewChecked {
  totaleProdottiVenduti: number = 0;
  totaleNumeroReclami: number = 0;
  percentualeReclami: number = 0;
  tempoMedioRisposta: number = 0;

  @ViewChild('barChartCanvas') private barChartCanvas!: ElementRef;

  constructor(
    private productService: ProductService,
    private reclamiService: reclamiService
  ) {}

  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => {
      this.calcolaTotali(data);
      this.calcolaTempoMedioRisposta();
      this.creaGraficoBarre();
    });
  }

  ngAfterViewChecked(): void {}

  calcolaTotali(prodotti: any[]): void {
    this.totaleProdottiVenduti = prodotti.reduce(
      (acc, prodotto) => acc + prodotto.quantitàProdottiVenduti,
      0
    );

    this.totaleNumeroReclami = prodotti.reduce(
      (acc, prodotto) => acc + prodotto.numeroReclami,
      0
    );
    this.percentualeReclami =
      (this.totaleNumeroReclami / this.totaleProdottiVenduti) * 100;
  }

  calcolaTempoMedioRisposta(): void {
    let sommaTempi: number = 0;
    const reclami = this.reclamiService.getReclami().subscribe((data) => {
      data.forEach((i) => {
        sommaTempi =
          sommaTempi +
          (new Date(i.dataRisposta).getTime() -
            new Date(i.dataInvio).getTime());
        console.log(sommaTempi);
      });
      this.tempoMedioRisposta = sommaTempi / data.length;
      console.log(this.tempoMedioRisposta);
    });
  }

  creaGraficoBarre(): void {
    const ctx: CanvasRenderingContext2D =
      this.barChartCanvas.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: 'Prodotti Venduti',
            data: [this.totaleProdottiVenduti],
            backgroundColor: 'blue',
          },
          {
            label: 'Numero Reclami',
            data: [this.percentualeReclami],
            backgroundColor: 'red',
          },
          {
            label: 'Tempo Medio Risposta (ore)',
            data: [this.tempoMedioRisposta],
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
