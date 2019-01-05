import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'timerc',
  templateUrl: './timerc.component.html',
  styleUrls: ['./timerc.component.css']
})
export class TimercComponent implements OnInit {
  @Input() dt;
  displayTime: any;
  constructor() { }

  ngOnInit() {
    this.getTimer(this.dt);
  }
  public getTimer(time: string) {
 const countDownDate = new Date(time).getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(now, 'now', 'countDownDate', countDownDate, 'distance', distance, 'days', days);

      // Output the result in an element with id="demo"
      document.getElementById('timer').innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds + '';

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
}
