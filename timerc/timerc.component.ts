import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timerc',
  templateUrl: './timerc.component.html',
  styleUrls: ['./timerc.component.scss']
})
export class TimercComponent implements OnInit {
  @Input() dt;
  @Input() dtid;
  displayTime: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  constructor() { }

  ngOnInit() {
    console.log('timer componet');
    this.getTimer(this.dt, this.dtid);
  }
  public getTimer(time: string, timerId: string) {
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
      console.log(days, 'days', 'hours', hours, 'minutes', minutes, 'seconds', seconds);
      const ionicons = '<ion-icon src="/assets/icon/timppp.svg" style="zoom:1.4;  margin-top: 0px"></ion-icon>';
      // Output the result in an element with id="demo"
      console.log(timerId);
       document.getElementById('timer' + timerId + '').innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds + '&nbsp;' + ionicons;
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
         document.getElementById('timer' + timerId + '').innerHTML = '';
        }
    }, 1000);
  }
}

