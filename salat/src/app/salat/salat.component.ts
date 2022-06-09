import { Component, OnInit } from '@angular/core';
import { Salat } from './salat';
import { SalatService } from './salat.service';

@Component({
  selector: 'app-salat',
  templateUrl: './salat.component.html',
  styleUrls: ['./salat.component.css'],
})
export class SalatComponent implements OnInit {
  salats!: Salat[];
  constructor(private _salatService: SalatService) {}

  ngOnInit(): void {
    this.getSalatController()
  }

  getSalatController() {
    this._salatService.getSalet().subscribe((data) => {
      console.log(data)
      this.salats = data;
    });
  }
}
