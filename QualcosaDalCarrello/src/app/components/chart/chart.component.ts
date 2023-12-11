import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from '../../data.services';
import { ProductService, reclamiService } from '../../retrieve.services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  totaleProdottiVenduti: number = 0;
  totaleNumeroReclami: number = 0;
  percentualeReclami: number = 0;
  tempoMedioRisposta: number = 0;

  @ViewChild('barChartCanvas') private barChartCanvas!: ElementRef;
  @ViewChild('categoryChartCanvas') private categoryChartCanvas!: ElementRef;

  constructor(
    private productService: ProductService,
    private reclamiService: reclamiService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => {
      this.calcolaTotali(data);
      this.calcolaTempoMedioRisposta();
      const prodottiPerCategoria =
        this.dataService.calcolaProdottiVendutiPerCategoria();
      this.creaGraficoBarrePerCategoria(prodottiPerCategoria);
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
    this.percentualeReclami =
      (this.totaleNumeroReclami / this.totaleProdottiVenduti) * 100;
  }

  calcolaTempoMedioRisposta(): void {
    this.reclamiService.getReclami().subscribe((data) => {
      let Tempo1: number = 0;
      let Tempo2: number = 0;
      let sommaTempi: number = 0;

      data.forEach((i) => {
        Tempo1 += new Date(i.dataInvio).getTime();
        Tempo2 += new Date(i.dataRisposta).getTime();
      });

      sommaTempi = Tempo2 - Tempo1;

      sommaTempi = Math.floor((sommaTempi / (1000 * 60 * 60)) % 24);
      this.tempoMedioRisposta = sommaTempi / data.length;
      this.creaGraficoBarre();
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

  creaGraficoBarrePerCategoria(prodottiPerCategoria: any): void {
    const ctx: CanvasRenderingContext2D =
      this.categoryChartCanvas.nativeElement.getContext('2d');

    // Utilizza colori diversi per ciascuna barra
    const colors = ['red', 'blue', 'purple', 'yellow', 'gray', 'pink', 'brown'];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Totale Prodotti Venduti',
          ...Object.keys(prodottiPerCategoria),
        ],
        datasets: [
          {
            data: [
              this.totaleProdottiVenduti,
              ...Object.values(prodottiPerCategoria),
            ],
            backgroundColor: colors,
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
