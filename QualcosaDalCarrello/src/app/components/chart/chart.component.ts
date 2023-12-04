import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProductService } from '../../retrieve.services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  totaleProdottiVenduti: number = 0;
  totaleNumeroReclami: number = 0;

  @ViewChild('pieChartCanvas') private pieChartCanvas!: ElementRef;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => {
      this.calcolaTotali(data);
      this.creaGraficoTorta();
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
  }

  creaGraficoTorta(): void {
    const ctx: CanvasRenderingContext2D = this.pieChartCanvas.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Prodotti Venduti', 'Numero Reclami'],
        datasets: [{
          data: [this.totaleProdottiVenduti, this.totaleNumeroReclami],
          backgroundColor: ['blue', 'red']
        }]
      }
    });
  }
}
