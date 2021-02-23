import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotline',
  templateUrl: './hotline.component.html',
  styleUrls: ['./hotline.component.css']
})
export class HotlineComponent implements OnInit {
  bgImage="assets/images/banner-bg.jpg";
  bgLabel="assets/images/banner-bg.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
