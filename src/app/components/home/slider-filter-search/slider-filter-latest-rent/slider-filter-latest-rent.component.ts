import { Component, Input } from '@angular/core';
import { latestForRent, latestForRentData } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-slider-filter-latest-rent',
  templateUrl: './slider-filter-latest-rent.component.html',
  styleUrls: ['./slider-filter-latest-rent.component.scss'],
})
export class SliderFilterLatestRentComponent {

  @Input() propertyClass: boolean;
  @Input() tagClass: string = '';
  @Input() total: number;
  @Input() title: string = '';
  @Input() listView: boolean = false;
  @Input() titleClass: string = 'title-1';
  @Input() type: string = 'simple';
  @Input() heading: string = 'Latest For Sale';
  @Input() desc: string = '';

  public latestForRentData: latestForRent[] = [];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
