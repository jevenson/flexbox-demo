import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public emittedCode: number;

  public ngOnInit(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => this.onKeydown(event));
  }

  private onKeydown(event: KeyboardEvent): void {
    this.emitEvent(event);
    this.updateKey(event);
  }

  private emitEvent(event: KeyboardEvent): void {
    if (window.parent) {
      window.parent.postMessage({ eventType: 'keydown', keyCode: event.keyCode }, '*');
    }
  }

  private updateKey(event: KeyboardEvent): void {
    this.emittedCode = event.keyCode;
  }
}
