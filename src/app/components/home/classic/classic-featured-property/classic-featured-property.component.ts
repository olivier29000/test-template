import { Component } from '@angular/core';
import { featuredProperty } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-classic-featured-property',
  templateUrl: './classic-featured-property.component.html',
  styleUrls: ['./classic-featured-property.component.scss'],
})
export class ClassicFeaturedPropertyComponent {

  public title = 'classic';
  public featuredProperty: featuredProperty[] = [];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty = response.featuredProperty.filter(
        (item) => item.type == this.title
      );
    });
  }

}
