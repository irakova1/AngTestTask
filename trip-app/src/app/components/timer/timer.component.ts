import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../model/Weather";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  @Input() targetDate!: Date; // Set the target date
  remainingTime!: number; // Remaining time in seconds
  timer!: {days: string, hours: string, minutes: string, seconds: string}
  constructor() {
  }

  calculateRemainingTime() {
    const currentTime = new Date();
    this.remainingTime = Math.max(0, Math.floor((this.targetDate.getTime() - currentTime.getTime()) / 1000));
    this.timer=this.formatTime(this.remainingTime);
  }

  formatTime(timeInSeconds: number): {days: string, hours: string, minutes: string, seconds: string} {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return { days: this.padNumber(days), hours: this.padNumber(hours), minutes: this.padNumber(minutes), seconds: this.padNumber(seconds)}
  }

  padNumber(num: number): string {
    // Helper function to pad single digits with leading zero
    return num.toString().padStart(2, '0');
  }

  ngOnInit(): void {
    this.calculateRemainingTime();
    setInterval(() => this.calculateRemainingTime(), 1000); // Update the timer every second
  }
}
