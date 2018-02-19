import { Injectable } from '@angular/core';

@Injectable()
export class KeyboardEventService {

    public initialize(): void {
        document.addEventListener('keydown', (event: KeyboardEvent) => this.onKeydown(event));
    }

    private onKeydown(event: KeyboardEvent): void {
        this.emitEvent(event);
    }

    private emitEvent(event: KeyboardEvent): void {
      if (window.parent) {
        window.parent.postMessage({ eventType: 'keydown', keyCode: event.keyCode }, '*');
      }
    }
}
