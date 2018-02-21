import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'flex-container',
  templateUrl: 'flex-container.component.html',
  styleUrls: ['flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit {

  @Input() public childCount: number = 5;
  @Input() public enableFlex: boolean = true;
  @Input() public mismatch: boolean = false;

  public numbers: number[];

  public selectedStyle: any;
  public childStyle: any;

  constructor(private elRef: ElementRef) { }

  public ngOnInit(): void {
    this.numbers = Array(this.childCount).fill(0).map((v, i) => ++i);
  }

  public applyStyle(propertyName: string, propertyValue: string, childStyle: boolean = false, childSelector?: string): void {
    if (childStyle) {
      const elementArray = this.elRef.nativeElement.querySelectorAll(childSelector || '.child:nth-child(2)');

      elementArray.forEach(element => {
        element.style[propertyName] = propertyValue;
      });
    }
    else {
      this.selectedStyle = { [propertyName]: propertyValue };
    }
  }
}
