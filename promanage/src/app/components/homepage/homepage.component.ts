import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  path1: String = "assets/images/image1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
