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
  // beginningTime = moment().format("hh:mm a");
  // endTime = this.salats[0].fajr
  // options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
  //dateArab = this.today.toLocaleDateString("ar-EG")

  constructor(private _salatService: SalatService) {}

  ngOnInit(): void {
    this.getSalatController();
    
    
  }

  getSalatController() {
    this._salatService.getSalet().subscribe((data) => {
      console.log('data : ', data);
      this.salats = data;
      console.log('salat : ', this.salats);
      console.log(this.salats[0]);
//fajr
      var a = moment(Date.now());
      var t = moment(this.salats[0].fajr, 'HH:mm A');
      this.fajr = t.diff(a, 'minutes');
      this.tt = moment(this.fajr, 'HH:mm:ss');
      console.log(`fajr:  ${this.fajr}`);
     const minut= Math.abs(moment.duration(Number(this.fajr), "minutes").asMinutes())
     var minutes = minut % 60;
     var hours = (minut-minutes)/60;
     var output = hours + ':' + minutes;
     console.log(output);

     console.log(minut);
     
      console.log('difference: ', moment.duration(Number(this.fajr), "minutes").asMinutes());

      var a = moment(Date.now());
      var t = moment(this.salats[0].shurooq, 'HH:mm A');
      this.shurooq = t.diff(a, 'minutes');
      this.tt = moment(this.shurooq, 'HH:mm:ss');
      console.log(`shurooq :  ${this.shurooq}`);


      var a = moment(Date.now());
      var t = moment(this.salats[0].dhuhr, 'HH:mm A');
      this.dhuhr = t.diff(a, 'minutes');
      this.tt = moment(this.dhuhr, 'HH:mm:ss');
      

    
      console.log(`dhuhr : ${this.dhuhr}`);
     

      var a = moment(Date.now());
      var t = moment(this.salats[0].asr, 'HH:mm A');
      this.asr = t.diff(a, 'minutes');
      this.tt = moment(this.asr, 'HH:mm:ss');
      console.log(`asr: ${this.asr}`);
   console.log('difference: ', moment.duration(Number(this.asr), "minutes").asMinutes());


      var a = moment(Date.now());
      var t = moment(this.salats[0].maghrib, 'HH:mm A');
      this.maghrib = t.diff(a, 'minutes');
      this.tt = moment(this.maghrib, 'HH:mm:ss');
      console.log(`maghrib: ${this.maghrib}`);
      const minute= Math.abs(moment.duration(Number(this.maghrib), "minutes").asMinutes())
      var minutes = minute % 60;
      var hours = (minute-minutes)/60;
      var output = hours + ':' + minutes;
      console.log('maghrib reste :',output);

      var a = moment(Date.now());
      var t = moment(this.salats[0].isha, 'HH:mm A');
      this.isha = t.diff(a, 'minutes');
      this.tt = moment(this.isha, 'HH:mm:ss').format('LTS');



      console.log(`isha: ${this.isha}`);
      const minuteIsha= Math.abs(moment.duration(Number(this.isha), "minutes").asMinutes())
      var minutes = minuteIsha % 60;
      var hours = (minuteIsha-minutes)/60;
      var magh = hours + ':' + minutes;
      console.log('Isha reste :',magh);



    });
  }
  compareTime() {
   
  }
}

//   difheure(dateNow: string,heurefin: string){
//     const hd=dateNow.split(":");
//     const hf=heurefin.split(":");
//     hd[0]=eval(hd[0]);hd[1]=eval(hd[1]);hd[2]=eval(hd[2]);
//     hf[0]=eval(hf[0]);hf[1]=eval(hf[1]);hf[2]=eval(hf[2]);
//     if(hf[2]<hd[2]){hf[1]=hf[1]-1;hf[2]=hf[2]+60;}if(hf[1]<hd[1]){hf[0]=hf[0]-1;hf[1]=hf[1]+60;}
//     if(hf[0]<hd[0]){hf[0]=hf[0]+24;}//return((hf[0]-hd[0]) + ":" + (hf[1]-hd[1])); // + ":" + (hf[2]-hd[2]));return((hf[0]-hd[0])*60 + (hf[1]-hd[1]));

// }
