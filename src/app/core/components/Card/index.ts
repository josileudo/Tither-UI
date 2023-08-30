import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  inject
} from '@angular/core';

import { ChartModule } from 'primeng/chart';

import { Incoming, Expense, Amount } from '../../models/enum/card.enum';
import { CardType } from '../../models/interface/card.interface';
import {
  DataChartModel,
  OptionsChartModel
} from '../../models/interface/chart.interface';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, ChartModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex min-w-full flex-row__media align-items-center justify-content-around scalein animation-duration-1000"
    >
      <div class="flex align-items-center gap-3">
        <div [ngClass]="'bg-' + configs()?.color" class="border-circle">
          <i [ngClass]="configs()?.icon" class="pi p-2 text-0"></i>
        </div>
        <div class="py-2 flex flex-column">
          <span class="mb-2 text-sm text-600">{{ cardLabel }}</span>
          <span class="font-bold text-3xl ">{{ cardValue | currency }}</span>
        </div>
      </div>

      <div class="max-w-7rem">
        <p-chart type="line" [data]="data" [options]="options" />
      </div>
    </div>
  `,
  styles: [
    `
      .flex-row__media {
        @media (max-width: 400px) {
          flex-direction: column;
          text-overflow: ellipse;
        }
      }
    `
  ]
})
export class CardComponent implements OnInit, AfterViewInit {
  private changeDetectorRef = inject(ChangeDetectorRef);

  @ViewChild('cardComponent', { static: true }) cardComponent!: ElementRef;

  @Input({ required: true, alias: 'label' }) cardLabel!: string;
  @Input({ required: true, alias: 'value' }) cardValue!: number;
  @Input({ required: true, alias: 'type' }) cardType!: string;
  @Input({ required: true, alias: 'transactions' })
  cardTransactions: number[] = [];

  cardConfig = [Incoming, Expense, Amount];
  configs = signal<CardType | undefined>(Incoming);
  data?: DataChartModel;
  options?: OptionsChartModel;

  ngOnInit(): void {
    this.configs.set(
      this.cardConfig.find(config => config.type === this.cardType)
    );
  }

  ngAfterViewInit(): void {
    // TODO: Timeout for emulate loading
    setTimeout(() => {
      this.chartConfig();
      this.changeDetectorRef.detectChanges();
    }, 1);
  }

  chartConfig(): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: this.cardTransactions,
      datasets: [
        {
          data: this.cardTransactions,
          borderColor: documentStyle.getPropertyValue(
            `--${this.configs()?.color}`
          ),
          tension: 0.5
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 4,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      }
    };
  }
}
