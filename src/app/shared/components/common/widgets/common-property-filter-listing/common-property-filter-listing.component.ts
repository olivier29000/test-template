import { Component, Input } from '@angular/core';
import { pagination } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { PropertyService } from '../../../../../shared/services/property.service';

@Component({
  selector: 'app-common-property-filter-listing',
  templateUrl: './common-property-filter-listing.component.html',
  styleUrls: ['./common-property-filter-listing.component.scss']
})
export class CommonPropertyFilterListingComponent {

  @Input() listView!: boolean;
  @Input() filterStyle: string;
  @Input() gridClass: string;
  @Input() gridType: string;
  @Input() filter: boolean;
  @Input() gridImages: boolean;
  @Input() sidebarType: string;
  @Input() mapButton: boolean;
  @Input() mapType: string;
  @Input() viewMap: boolean;
  @Input() isList: boolean;
  @Input() thumbnail: boolean;
  @Input() thumbnail_video: boolean;
  @Input() grid: boolean = true;

  public categoryValue: string;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue : string;

  constructor(public propertyService: PropertyService) {}

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getPaginationData(pagination: pagination) {
    this.paginationData = pagination;
  }

  sortFilter(value: string) {
    this.filterValue = value
  }
}
