import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProductService } from '../../retrieve.services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  totaleProdottiVenduti: number = 0;
  totaleNumeroReclami: number = 0;
  percentualeReclami: number = 0;

  @ViewChild('barChartCanvas') private barChartCanvas!: ElementRef;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => {
      this.calcolaTotali(data);
      this.creaGraficoBarre();
    });
  }

  calcolaTotali(prodotti: any[]): void {
    this.totaleProdottiVenduti = prodotti.reduce(
      (acc, prodotto) => acc + prodotto.quantitàProdottiVenduti,
      0
    );

    this.totaleNumeroReclami = prodotti.reduce(
      (acc, prodotto) => acc + prodotto.numeroReclami,
      0
    );
    this.percentualeReclami = (this.totaleNumeroReclami / this.totaleProdottiVenduti) * 100;
  }

<<<<<<< HEAD
  creaGraficoBarre(): void {
    const ctx: CanvasRenderingContext2D = this.barChartCanvas.nativeElement.getContext('2d');
=======
  creaGraficoTorta(): void {
    const ctx: CanvasRenderingContext2D =
      this.pieChartCanvas.nativeElement.getContext('2d');
>>>>>>> 5ce666ad87125d6adc1480719b962f83b6ccf1c2

    new Chart(ctx, {
      type: 'bar',
      data: {
<<<<<<< HEAD
        labels: [''],
        datasets: [
          {
            label: 'Prodotti Venduti',
            data: [this.totaleProdottiVenduti],
            backgroundColor: 'blue',
          },
          {
            label: 'Percentuale Reclami',
            data: [this.percentualeReclami],
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
=======
        labels: ['Prodotti Venduti', 'Numero Reclami'],
        datasets: [
          {
            data: [this.totaleProdottiVenduti, this.totaleNumeroReclami],
            backgroundColor: ['blue', 'red'],
          },
        ],
      },
>>>>>>> 5ce666ad87125d6adc1480719b962f83b6ccf1c2
    });
  }
}
