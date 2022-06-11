import { Component, OnInit } from '@angular/core';
import { Salat } from './salat';
import { SalatService } from './salat.service';
import * as moment from 'moment';
import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
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
  dhuhrIq!:string
  fajrOut!: string;
  shourOut!: string;
  shourOut2!: string;
  constructor(private _salatService: SalatService) {}

  ngOnInit(): void {
    this.getSalatController();
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
console.log(Number((this.salats[0].dhuhr).charAt(3)+(this.salats[0].dhuhr).charAt(4)));

        this.dhuhrIq =this.salats[0].dhuhr ;
        console.log((Number(this.dhuhrIq.split(':')[1].split(' ')[0])+15));


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
        var secondes=minute%3600
        this.magh = hours + ':' + minutes ;
      } else if (minute > 0) {
        var minutes = minute % 60;
        var hours = (minute - minutes) / 60;
        var secondes=minutes%3600
        this.magh = hours + ':' + minutes  ;

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

    });
  }
}
