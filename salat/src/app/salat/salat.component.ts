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
  dhuhrOut!:string
  // beginningTime = moment().format("hh:mm a");
  // endTime = this.salats[0].fajr
  // options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
  //dateArab = this.today.toLocaleDateString("ar-EG")

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
      var t = moment(this.salats[0].dhuhr, 'HH:mm A');
      this.dhuhr = t.diff(a, 'minutes');
      this.tt = moment(this.dhuhr, 'HH:mm:ss');
      const minuteFajr = Math.abs(
        moment.duration(Number(this.dhuhr), 'minutes').asMinutes()
      );
      console.log('minutes dhuhr',minuteFajr);

      var minutes = minuteFajr % 60;
      var hours = (minuteFajr - minutes) / 60;
      this.dhuhrOut = hours + ':' + minutes;

      //shurooq
      var a = moment(Date.now());
      var t = moment(this.salats[0].shurooq, 'HH:mm A');
      this.shurooq = t.diff(a, 'minutes');
      this.tt = moment(this.shurooq, 'HH:mm:ss');

      //dhuhr
      var a = moment(Date.now());
      var t = moment(this.salats[0].dhuhr, 'HH:mm A');
      this.dhuhr = t.diff(a, 'minutes');
      this.tt = moment(this.dhuhr, 'HH:mm:ss');
      const minuteDuhr = Math.abs(
        moment.duration(Number(this.dhuhr), 'minutes').asMinutes()
      );
      console.log('minutes dhuhr',minuteDuhr);

      var minutes = minuteDuhr % 60;
      var hours = (minuteDuhr - minutes) / 60;
      this.dhuhrOut = hours + ':' + minutes;

      //asr
      var a = moment(Date.now());
      var t = moment(this.salats[0].asr, 'HH:mm A');
      this.asr = t.diff(a, 'minutes');
      this.tt = moment(this.asr, 'HH:mm:ss');
      console.log(`asr: ${this.asr}`);
      const minuteAsr = Math.abs(
        moment.duration(Number(this.asr), 'minutes').asMinutes()
      );
      var minutes = minuteAsr % 60;
      var hours = (minuteAsr - minutes) / 60;
      this.asrOut = hours + ':' + minutes;
      console.log('asr reste :', this.asrOut);
      //maghrib

      var a = moment(Date.now());
      var t = moment(this.salats[0].maghrib, 'HH:mm A');
      this.maghrib = t.diff(a, 'minutes');
      this.tt = moment(this.maghrib, 'HH:mm:ss');
      console.log(`maghrib: ${this.maghrib}`);
      const minute = Math.abs(
        moment.duration(Number(this.maghrib), 'minutes').asMinutes()
      );
      var minutes = minute % 60;
      var hours = (minute - minutes) / 60;
      this.magh = hours + ':' + minutes;
      console.log('maghrib reste :', this.magh);
      //isha
      var a = moment(Date.now());
      var t = moment(this.salats[0].isha, 'HH:mm A');
      this.isha = t.diff(a, 'minutes');
      this.tt = moment(this.isha, 'HH:mm:ss').format('LTS');
      console.log(`isha: ${this.isha}`);
      const minuteIsha = Math.abs(
        moment.duration(Number(this.isha), 'minutes').asMinutes()
      );
      var minutes = minuteIsha % 60;
      var hours = (minuteIsha - minutes) / 60;
      this.ish = hours + ':' + minutes;
      console.log('Isha reste :', this.ish);
      ///setinterval
    });
  }
}
