import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  itDevice = true;
  title = 'more213.github.io';
  ngOnInit(): void {
    this.thisDevice();
  }

  thisDevice(): void {
    this.itDevice = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

}
