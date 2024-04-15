import { Component, Input } from '@angular/core';
import { homeSectionSlider } from '../../../../../shared/interface/property';

@Component({
  selector: 'app-slider-one',
  templateUrl: './slider-one.component.html',
  styleUrls: ['./slider-one.component.scss'],
})
export class SliderOneComponent {
  
  @Input() homeSectionSliderData: homeSectionSlider[] = [];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
