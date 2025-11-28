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
  ukTime!: string;
  edmontonTime!: string;
  nigeriaTime!: string;
  intervalId: any;

  ngOnInit(): void {
    this.updateTimes();
    this.intervalId = setInterval(() => this.updateTimes(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateTimes() {
    const now = new Date();

    // Format options
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };

    // UK
    this.ukTime = new Intl.DateTimeFormat('en-CA', {
      ...options,
      timeZone: 'Europe/London',
    }).format(now);

    // Canada - Edmonton
    this.edmontonTime = new Intl.DateTimeFormat('en-CA', {
      ...options,
      timeZone: 'America/Edmonton',
    }).format(now);

    // Nigeria
    this.nigeriaTime = new Intl.DateTimeFormat('en-CA', {
      ...options,
      timeZone: 'Africa/Lagos',
    }).format(now);
  }
}
