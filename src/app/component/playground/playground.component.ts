import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('New Main Commit')
    console.log('Commit #1')
    console.log('Commit #2')
    console.log('Commit #3')
    console.log('Commit #4')
  }

}
