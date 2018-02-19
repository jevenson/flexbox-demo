import { Component, OnInit } from '@angular/core';
import { KeyboardEventService } from './services/keyboard-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private keyboardEventService: KeyboardEventService) { }

  public ngOnInit(): void {
    this.keyboardEventService.initialize();
  }
}
