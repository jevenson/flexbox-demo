import { AfterContentInit, Component, EventEmitter, Input, Output, QueryList, ContentChildren } from '@angular/core';
import { PropertyButtonComponent } from './../property-button/property-button.component';

@Component({
  moduleId: module.id,
  selector: 'prop-button-container',
  template: `
    <div class="container button-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['property-button-container.component.scss']
})
export class PropertyButtonContainerComponent implements AfterContentInit {

  @Input() public propertyName: string;

  @Output() public propertyValueChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(PropertyButtonComponent) propButtons: QueryList<PropertyButtonComponent>;

  public ngAfterContentInit(): void {
    this.propButtons
      .forEach(c => c.click.subscribe(
        (value) => {
          this.propButtons.forEach(btn => btn.isActive = false);
          this.propertyValueChange.emit({ propertyName: this.propertyName, propertyValue: value });
          this.propButtons.find(btn => btn.propertyValue === value).isActive = true;
        }));
  }
}
