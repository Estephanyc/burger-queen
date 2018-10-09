import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {
  @Input() item
  @Output() valueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  addItem(){
    this.valueChange.emit(this.item)
  }
}
