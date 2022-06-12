import { Component, OnInit } from '@angular/core';
import { Salat } from './salat';
import { SalatService } from './salat.service';
import * as moment from 'moment';
import { GlobalResult } from './result';
import { interval } from 'rxjs';
@Component({
  selector: 'app-salat',
  templateUrl: './salat.component.html',
  styleUrls: ['./salat.component.css'],
})
export class SalatComponent implements OnInit {
  salats!: Salat[];
  counter = new Array(5);
  today = new Date();
  time = new Date().getTime();
  dateNow = moment().format('hh:mm a');
  timeAgo!: String;
  fajr!: number;
  shurooq!: number;
  dhuhr!: number;
  asr!: number;
  maghrib!: number;
  isha!: number;
  tt!: any;
  ss: any;
  ish!: string;
  magh!: string;
  asrOut!: string;
  dhuhrOut!: string;
  dhuhrIq!: string
  fajrOut!: string;
  shourOut!: string;
  timer = 15
  dhuhrIqMin!: string;
  diffMin!: number;
  result2: any=0;
  constructor(private _salatService: SalatService) {

  }

  ngOnInit(): void {

    this.getSalatController();
    const obs$=interval(1000)
    obs$.subscribe((d)=>{

         var now = new Date().getTime();


         var dtMon=this.today.toLocaleString('en-US', { month: 'short' })
         var dtYear=this.today.getFullYear()
         var dtDay=this.today.getDate()
        // console.log('nowMonth--',dtDay);

         var dt = moment(this.dhuhrIqMin, ["h:mm a"]).format("HH:mm:ss");
         var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
         // Find the distance between now an the count down date
         var distance = countDownDate - now;

         // Time calculations for days, hours, minutes and seconds
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         if(minutes>=0 && seconds>=0){
           var result = minutes + "m " + seconds + "s ";
        this.result2=result
         }else if (minutes<0 && seconds<0){
            var result = dt;
         this.result2=result
         

         }


         // Output the result in an element with id="demo"

       //  console.log((result));
//console.log(GlobalResult.result1);

         // If the count down is over, write some text

    }


    )



  }



  getSalatController() {
    //get data controller
    this._salatService.getSalet().subscribe((data) => {
      this.salats = data;
      //fajr
      var a = moment(Date.now());
      var t = moment(this.salats[0].fajr, 'HH:mm A');

      this.fajr = t.diff(a, 'minutes');
      this.tt = moment(this.fajr, 'HH:mm:ss');
      const minuteFajr = moment
        .duration(Number(this.fajr), 'minutes')
        .asMinutes();
      if (minuteFajr < 0) {
        var minutes = 60 + (minuteFajr % 60);
        var hours = 24 + (minuteFajr - minutes) / 60;
        this.fajrOut = hours + ':' + minutes;
      } else if (minuteFajr > 0) {
        var minutes = minuteFajr % 60;
        var hours = (minuteFajr - minutes) / 60;
        this.fajrOut = hours + ':' + minutes;
      }
      //shurooq
      var a = moment(Date.now());
      var t = moment(this.salats[0].shurooq, 'HH:mm A');
      this.shurooq = t.diff(a, 'minutes');
      this.tt = moment(this.shurooq, 'HH:mm:ss');
      const minuteShq = moment
        .duration(Number(this.shurooq), 'minutes')
        .asMinutes();
      if (minuteShq < 0) {
        var minutes = 60 + (minuteShq % 60);
        var hours = 24 + (minuteShq - minutes) / 60;
        this.shourOut = hours + ':' + minutes;
      } else if (minuteShq > 0) {
        var minutes = minuteShq % 60;
        var hours = (minuteShq - minutes) / 60;
        this.shourOut = hours + ':' + minutes;
      }
      //dhuhr//dhuhrIq
      var a = moment(Date.now());


      var t = moment(this.salats[0].dhuhr, 'HH:mm A');

      this.dhuhr = t.diff(a, 'minutes');
      this.tt = moment(this.dhuhr, 'HH:mm:ss');
      const minuteDuhr = moment
        .duration(Number(this.dhuhr), 'minutes')
        .asMinutes();
      // console.log(Number((this.salats[0].dhuhr).charAt(3) + (this.salats[0].dhuhr).charAt(4)));
      //  console.log('nowThuhr',moment(this.salats[0].dhuhr,'HH:mm a').format())
      this.dhuhrIq = this.salats[0].dhuhr;


      //   console.log(this.dhuhrIq);

      //  console.log((Number(this.dhuhrIq.split(':')[1].split(' ')[0]) + 15));
      var mints = (Number(this.dhuhrIq.split(':')[1].split(' ')[0]) + 15).toString()
      // console.log(mints);
      var heure = (Number(this.dhuhrIq.split(':')[0].split(' ')[0])).toString()
      // console.log(((this.dhuhrIq.split(':')[1]).split(' ')[1]));

      this.dhuhrIqMin = heure + ':' + mints + ' ' + ((this.dhuhrIq.split(':')[1]).split(' ')[1])

      // var a = moment(Date.now());


      // var t = moment(this.salats[0].dhuhr, 'HH:mm A');

      // this.dhuhr = t.diff(a, 'minutes');
      // this.tt = moment(this.dhuhr, 'HH:mm:ss');
      // const minuteDuhr = moment
      //   .duration(Number(this.dhuhr), 'minutes')
      //   .asMinutes();
      // // console.log(Number((this.salats[0].dhuhr).charAt(3) + (this.salats[0].dhuhr).charAt(4)));
      // //  console.log('nowThuhr',moment(this.salats[0].dhuhr,'HH:mm a').format())
      // this.dhuhrIq = this.salats[0].dhuhr;


      var t2 = moment(this.dhuhrIqMin, 'HH:mm A')
      this.diffMin = t2.diff(t, 'minutes');
    //  console.log('t', t, typeof (t));
  //    console.log('dist', this.diffMin + ' min');
      var dist = this.diffMin
      var y = setInterval(function () {
        var minutes = dist % 60;
      var minins= minutes + ':' + '00'
        //  console.log('minins',minins);  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     //   console.log('distance=',Number( dist-1));

      }, 1000)


    //  console.log('t2', t2, typeof (t2));

      if (minuteDuhr < 0) {
        var minutes = 60 + (minuteDuhr % 60);
        var hours = 24 + (minuteDuhr - minutes) / 60;

        this.dhuhrOut = hours + ':' + minutes;


      } else if (minuteDuhr > 0) {
        var minutes = minuteDuhr % 60;
        var hours = (minuteDuhr - minutes) / 60;
        this.dhuhrOut = hours + ':' + minutes;

      }
      //asr
      var a = moment(Date.now());
      var t = moment(this.salats[0].asr, 'HH:mm A');
      this.asr = t.diff(a, 'minutes');
      this.tt = moment(this.asr, 'HH:mm:ss');
      const minuteAsr = moment
        .duration(Number(this.asr), 'minutes')
        .asMinutes();
      if (minuteAsr < 0) {
        var minutes = 60 + (minuteAsr % 60);
        var hours = 24 + (minuteAsr - minutes) / 60;
        this.asrOut = hours + ':' + minutes;
      } else if (minuteAsr > 0) {
        var minutes = minuteAsr % 60;
        var hours = (minuteAsr - minutes) / 60;
        this.asrOut = hours + ':' + minutes;
      }
      //maghrib
      var a = moment(Date.now());
      var t = moment(this.salats[0].maghrib, 'HH:mm A');
      this.maghrib = t.diff(a, 'minutes');
      this.tt = moment(this.maghrib, 'HH:mm:ss');
      const minute = moment
        .duration(Number(this.maghrib), 'minutes')
        .asMinutes();
      const seconde = moment
        .duration(Number(this.maghrib), 'seconds')
        .asSeconds();
      //  console.log(seconde%60);
      //    console.log(minute);

      if (minute < 0) {
        var minutes = 60 + (minute % 60);
        var hours = 24 + (minute - minutes) / 60;
        this.magh = hours + ':' + minutes;
        var secondes = minute % 3600
        this.magh = hours + ':' + minutes;
      } else if (minute > 0) {
        var minutes = minute % 60;
        var hours = (minute - minutes) / 60;
        var secondes = minutes % 3600
        this.magh = hours + ':' + minutes;

      }

      //isha
      var a = moment(Date.now());
      var t = moment(this.salats[0].isha, 'HH:mm A');
      this.isha = t.diff(a, 'minutes');
      this.tt = moment(this.isha, 'HH:mm:ss').format('LTS');
      const minuteIsha = moment
        .duration(Number(this.isha), 'minutes')
        .asMinutes();
      if (minuteIsha < 0) {
        var minutes = 60 + (minuteIsha % 60);
        var hours = 24 + (minuteIsha - minutes) / 60;
        this.ish = hours + ':' + minutes;
      } else if (minuteIsha > 0) {
        var minutes = minuteIsha % 60;
        var hours = (minuteIsha - minutes) / 60;
        this.ish = hours + ':' + minutes;
      }
      ///setinterval


      //calcul du compteur
     // var countDownDate = new Date("12/06/2022 " + this.dhuhrIqMin).getTime();

      //console.log(this.dhuhrIqMin);
     // console.log(countDownDate);
     // console.log(this.salats[0].dhuhr);
      //var countDownDatedh = moment(countDownDate).format('HH:mm a')

    //  var now = this.dhuhr;

    //----------------------------------------------------------------------------------------------
       // console.log(this.today);
        var dtMon=this.today.toLocaleString('en-US', { month: 'short' })
        var dtYear=this.today.getFullYear()
        var dtDay=this.today.getDate()
       // console.log('nowMonth--',dtDay);

        var dt = moment('14:30 am', ["h:mm a"]).format("HH:mm:ss");
        var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
     //   console.log('cout',(countDownDate));
      //  console.log((this.dhuhrIqMin));


      //  console.log(this.today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric',hour12: false }));




     var x = setInterval(() =>{

            // Get todays date and time
            var now = new Date().getTime();



            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
           var result = minutes + "m " + seconds + "s ";
          //  console.log((result));
//console.log(GlobalResult.result1);

            // If the count down is over, write some text
            if (distance < 0) {
               clearInterval(x);
                result = "EXPIRED";
            }

        }, 1000);
       // console.log('rer:',GlobalResult.result1);
        this.result2=GlobalResult.result1
     //   console.log(this.result2);

      // console.log('countDownDate:',moment(countDownDate).format('HH:mm a'))
      // Update the count down every 1 second
      //var x = setInterval(function () {
      // var now = this.salats[0].dhuhr;
      // Get today's date and time

      // var nowdh = moment(now).format('HH:mm a')
      //  console.log(nowdh);
      // var distance = countDownDate - now;

      //  var distancedh = moment(distance).format('HH:mm a')
      //  console.log(distancedh);
      //  console.log('nowww',moment(now).format('HH:mm a'))
      // Find the distance between now and the count down date

      //  console.log('distance:',moment(distance).format('HH:mm a'))

      // Time calculations for days, hours, minutes and seconds
      // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // var minins = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      //  console.log('minins',minins);

      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      // }
      //}, 1000);


    });



  }


}

