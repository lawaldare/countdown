import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public countdown = signal<number>(0);

  targetDate: Date = new Date('April 12, 2025 23:59:59');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.updateCountdown();
  }

  updateCountdown() {
    const now = new Date();
    const timeRemaining = this.targetDate.getTime() - now.getTime();

    this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setTimeout(() => {
      this.updateCountdown();
    }, 1000);
  }
}
