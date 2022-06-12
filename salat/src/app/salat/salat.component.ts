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
  result2!: string ;
  resultFajr!: string;
  fajrIq!:string
  asrIq!:string
  maghribIq!:string
  ishaIq!:string
  fajrIqMin!: string;
  asrIqMin!: string;
  ishaIqMin!: string;
  maghribIqMin!: string;
  resultAsr!:string
  resultMagh!:string
  resultIsha!:string
  ttdh!:any
  ttasr!:any
  ttmagh!:any
  ttsh!:any
  ttish!:any
  shorukIqMin!:any
  shorukIq!:any
  resultShur!:string
  constructor(private _salatService: SalatService) {

  }

  ngOnInit(): void {

    this.getSalatController();
    //Observable interval
    this.setIntervalDhuhr()
    this.setIntervalAsr()
    this.setIntervalFajr()
    this.setIntervalIsha()
    this.setIntervalMagh()
    this.setIntervalShur()

  }
    //salat shurouq dans
    setIntervalShur() {
      const obs$ = interval(1000)
      obs$.subscribe((d) => {

        var now = new Date().getTime();
        var dtMon = this.today.toLocaleString('en-US', { month: 'short' })
        var dtYear = this.today.getFullYear()
        var dtDay = this.today.getDate()
        var dt = moment(this.shorukIqMin, ["h:mm a"]).format("HH:mm:ss");
        var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (minutes >= 0 && seconds >= 0) {
          var result = minutes + "m " + seconds + "s ";
          this.resultShur = result
        } else if (minutes < 0 && seconds < 0) {
          var result = dt;
          this.resultShur = result
        }
      })
    }
  //salat dhuhr dans
  setIntervalDhuhr() {
    const obs$ = interval(1000)
    obs$.subscribe((d) => {

      var now = new Date().getTime();
      var dtMon = this.today.toLocaleString('en-US', { month: 'short' })
      var dtYear = this.today.getFullYear()
      var dtDay = this.today.getDate()
      var dt = moment(this.dhuhrIqMin, ["h:mm p"]).format("HH:mm:ss");

      var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (minutes >= 0 && seconds >= 0) {
        var result = minutes + "m " + seconds + "s ";
        this.result2 = result
      } else if (minutes < 0 && seconds < 0) {
        var result = dt;
        this.result2 = result
      }
    })
  }
  //salat asr dans
  setIntervalAsr() {
    const obs$ = interval(1000)
    obs$.subscribe((d) => {

      var now = new Date().getTime();
      var dtMon = this.today.toLocaleString('en-US', { month: 'short' })
      var dtYear = this.today.getFullYear()
      var dtDay = this.today.getDate()
      var dt = moment(this.asrIqMin, ["h:mm p"]).format("HH:mm:ss");

      var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (minutes >= 0 && seconds >= 0) {
        var result = minutes + "m " + seconds + "s ";
        this.resultAsr = result
      } else if (minutes < 0 && seconds < 0) {
        var result = dt;
        this.resultAsr = result


      }
    })
  }
//salat maghrib dans
setIntervalMagh() {
  const obs$ = interval(1000)
  obs$.subscribe((d) => {

    var now = new Date().getTime();
    var dtMon = this.today.toLocaleString('en-US', { month: 'short' })
    var dtYear = this.today.getFullYear()
    var dtDay = this.today.getDate()
    var dt = moment(this.maghribIqMin, ["h:mm p"]).format("HH:mm:ss");

    var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (minutes >= 0 && seconds >= 0) {
      var result = minutes + "m " + seconds + "s ";
      this.resultMagh = result
    } else if (minutes < 0 && seconds < 0) {
      var result = dt;
      this.resultMagh = result
    }
  })
}
//salat isha dans
setIntervalIsha() {
  const obs$ = interval(1000)
  obs$.subscribe((d) => {

    var now = new Date().getTime();
    var dtMon = this.today.toLocaleString('en-US', { month: 'short' })
    var dtYear = this.today.getFullYear()
    var dtDay = this.today.getDate()
    var dt = moment(this.ishaIqMin, ["h:mm p"]).format("HH:mm:ss");
    var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (minutes >= 0 && seconds >= 0) {
      var result = minutes + "m " + seconds + "s ";
      this.resultIsha = result
    } else if (minutes < 0 && seconds < 0) {
      var result = dt;
      this.resultIsha = result
    }
  })
}
//salat fajr dans
setIntervalFajr() {
  const obs$ = interval(1000)
  obs$.subscribe((d) => {

    var now = new Date().getTime();
    var dtMon = this.today.toLocaleString('en-US', { month: 'short' })
    var dtYear = this.today.getFullYear()
    var dtDay = this.today.getDate()
    var dt = moment(this.fajrIqMin, ["h:mm a"]).format("HH:mm:ss");
    var countDownDate = new Date(`${dtMon} ${dtDay}, ${dtYear} ${dt}`).getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (minutes >= 0 && seconds >= 0) {
      var result = minutes + "m " + seconds + "s ";
      this.resultFajr = result
    } else if (minutes < 0 && seconds < 0) {
      var result = dt;
      this.resultFajr = result
    }
  })
}
  getSalatController() {
    //get data controller
    this._salatService.getSalet().subscribe((data) => {
      this.salats = data;
      //fajr
      var a = moment(Date.now());
      var t = moment(this.salats[0].fajr, 'HH:mm a');

      this.fajr = t.diff(a, 'minutes');
      this.tt = moment(this.fajr, 'HH:mm:ss');
      const minuteFajr = moment
        .duration(Number(this.fajr), 'minutes')
        .asMinutes();
        this.fajrIq = this.salats[0].fajr;
        var mints = (Number(this.fajrIq.split(':')[1].split(' ')[0]) + 15).toString()
        var heure = (Number(this.fajrIq.split(':')[0].split(' ')[0])).toString()
        this.fajrIqMin = heure + ':' + mints + ' ' + ((this.fajrIq.split(':')[1]).split(' ')[1])
      if (minuteFajr < 0) {
        var minutes = 60 + (minuteFajr % 60);
        var hours = 24 + (minuteFajr - minutes) / 60;
        this.fajrOut = hours + ':' + minutes;
      } else if (minuteFajr > 0) {
        var minutes = minuteFajr % 60;
        var hours = (minuteFajr - minutes) / 60;
        this.fajrOut = hours + ':' + minutes;
      }

      //dhuhr//dhuhrIq
      var tdh = moment(this.salats[0].dhuhr, 'HH:mm p');
      this.dhuhr = tdh.diff(a, 'minutes');
      this.ttdh = moment(this.dhuhr, 'HH:mm:ss');
      const minuteDuhr = moment
        .duration(Number(this.dhuhr), 'minutes')
        .asMinutes();
      this.dhuhrIq = this.salats[0].dhuhr;
      var mints = (Number(this.dhuhrIq.split(':')[1].split(' ')[0]) + 15).toString()
      var heure = (Number(this.dhuhrIq.split(':')[0].split(' ')[0])).toString()
      this.dhuhrIqMin = heure + ':' + mints + ' ' + ((this.dhuhrIq.split(':')[1]).split(' ')[1])
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
      var tasr = moment(this.salats[0].asr, 'HH:mm p');
      this.asr = tasr.diff(a, 'minutes');
      this.ttasr = moment(this.asr, 'HH:mm:ss');
      const minuteAsr = moment
        .duration(Number(this.asr), 'minutes')
        .asMinutes();
        this.asrIq = this.salats[0].asr;

        var mints = (Number(this.asrIq.split(':')[1].split(' ')[0]) + 15).toString()
        var heure = (Number(this.asrIq.split(':')[0].split(' ')[0])).toString()
        this.asrIqMin = heure + ':' + mints + ' ' + ((this.asrIq.split(':')[1]).split(' ')[1])
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
      var tmagh = moment(this.salats[0].maghrib, 'HH:mm p');
      this.maghrib =tmagh.diff(a, 'minutes');
      this.ttmagh = moment(this.maghrib, 'HH:mm:ss');
      const minute = moment
        .duration(Number(this.maghrib), 'minutes')
        .asMinutes();
      const seconde = moment
        .duration(Number(this.maghrib), 'seconds')
        .asSeconds();
        this.maghribIq = this.salats[0].maghrib;

        var mints = (Number(this.maghribIq.split(':')[1].split(' ')[0]) + 15).toString()
        var heure = (Number(this.maghribIq.split(':')[0].split(' ')[0])).toString()
        this.maghribIqMin = heure + ':' + mints + ' ' + ((this.maghribIq.split(':')[1]).split(' ')[1])

      if (minute < 0) {
        var minutes = 60 + (minute % 60);
        var hours = 24 + (minute - minutes) / 60;
        this.magh = hours + ':' + minutes;
        this.magh = hours + ':' + minutes;
      } else if (minute > 0) {
        var minutes = minute % 60;
        var hours = (minute - minutes) / 60;
        this.magh = hours + ':' + minutes;

      }
 //shurooq
 var tsh = moment(this.salats[0].shurooq, 'HH:mm a');
 this.shurooq = tsh.diff(a, 'minutes');
 this.ttsh = moment(this.shurooq, 'HH:mm:ss');
 const minuteShq = moment
   .duration(Number(this.shurooq), 'minutes')
   .asMinutes();
   this.shorukIq = this.salats[0].isha;
   var mints = (Number(this.shorukIq.split(':')[1].split(' ')[0]) + 15).toString()
   var heure = (Number(this.shorukIq.split(':')[0].split(' ')[0])).toString()
   this.shorukIqMin = heure + ':' + mints + ' ' + ((this.shorukIq.split(':')[1]).split(' ')[1])
 if (minuteShq < 0) {
   var minutes = 60 + (minuteShq % 60);
   var hours = 24 + (minuteShq - minutes) / 60;
   this.shourOut = hours + ':' + minutes;
 } else if (minuteShq > 0) {
   var minutes = minuteShq % 60;
   var hours = (minuteShq - minutes) / 60;
   this.shourOut = hours + ':' + minutes;
 }
      //isha
      var tish = moment(this.salats[0].isha, 'HH:mm p');
      this.isha = tish.diff(a, 'minutes');
      this.ttish = moment(this.isha, 'HH:mm:ss').format('LTS');
      const minuteIsha = moment
        .duration(Number(this.isha), 'minutes')
        .asMinutes();
        this.ishaIq = this.salats[0].isha;
        var mints = (Number(this.ishaIq.split(':')[1].split(' ')[0]) + 15).toString()
        var heure = (Number(this.ishaIq.split(':')[0].split(' ')[0])).toString()
        this.ishaIqMin = heure + ':' + mints + ' ' + ((this.ishaIq.split(':')[1]).split(' ')[1])
      if (minuteIsha < 0) {
        var minutes = 60 + (minuteIsha % 60);
        var hours = 24 + (minuteIsha - minutes) / 60;
        this.ish = hours + ':' + minutes;
      } else if (minuteIsha > 0) {
        var minutes = minuteIsha % 60;
        var hours = (minuteIsha - minutes) / 60;
        this.ish = hours + ':' + minutes;
      }

    });



  }


}

