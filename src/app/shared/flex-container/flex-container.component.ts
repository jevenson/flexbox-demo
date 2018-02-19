import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'flex-container',
  templateUrl: 'flex-container.component.html',
  styleUrls: ['flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit {

  @Input() public childCount: number = 5;
  @Input() public enableFlex: boolean = true;

  public numbers: number[];

  public selectedStyle: any;

  public ngOnInit(): void {
    this.numbers = Array(this.childCount).fill(0).map((v, i) => ++i);
  }

  public applyStyle(propertyName: string, propertyValue: string): void {
    this.selectedStyle = { [propertyName]: propertyValue };
  }
}
