import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-treefilter',
  templateUrl: './treefilter.component.html',
  styleUrls: ['./treefilter.component.css']
})
export class TreefilterComponent implements OnInit {

  treeclass7: {child: number, caption: string}[]= [
    {
      child: 71,
    caption: "71..."
    },
    {
      child: 72,
    caption: "72..."
    },
    {
      child: 73,
    caption: "73..."
    },
    {
      child: 74,
    caption: "74..."
    },
    {
      child: 75,
    caption: "75..."
    }
  ]

  @Output() outputSearchCat = new EventEmitter<string>();


  treeElClick(child: number){
    this.outputSearchCat.emit(child.toString());
    console.log('trying to output ' + child.toString())
  }



  constructor() { }

  ngOnInit(): void {
  }

}
