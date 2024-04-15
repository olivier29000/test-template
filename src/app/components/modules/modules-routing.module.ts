import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesButtonComponent } from './modules-button/modules-button.component';
import { ModulesLabelComponent } from './modules-label/modules-label.component';
import { ModulesTitleComponent } from './modules-title/modules-title.component';
import { ModulesImageRatioComponent } from './modules-image-ratio/modules-image-ratio.component';
import { ModulesFooterComponent } from './modules-footer/modules-footer.component';
import { ModulesBlogComponent } from './modules-blog/modules-blog.component';
import { ModulesBrandComponent } from './modules-brand/modules-brand.component';
import { ModulesTestimonialComponent } from './modules-testimonial/modules-testimonial.component';
import { ModulesFullBannerComponent } from './modules-full-banner/modules-full-banner.component';
import { ModulesAboutComponent } from './modules-about/modules-about.component';
import { ModulesServiceComponent } from './modules-service/modules-service.component';
import { ModulesPropertyComponent } from './modules-property/modules-property.component';
import { ModulesFeatureComponent } from './modules-feature/modules-feature.component';
import { ModulesOthersComponent } from './modules-others/modules-others.component';

const routes: Routes = [
  {
    path: 'button',
    component: ModulesButtonComponent,
  },
  {
    path: 'label',
    component: ModulesLabelComponent,
  },
  {
    path: 'title',
    component: ModulesTitleComponent,
  },
  {
    path: 'image-ratio',
    component: ModulesImageRatioComponent,
  },
  {
    path: 'footer',
    component: ModulesFooterComponent,
  },
  {
    path: 'blog',
    component: ModulesBlogComponent,
  },
  {
    path: 'brand',
    component: ModulesBrandComponent,
  },
  {
    path: 'testimonial',
    component: ModulesTestimonialComponent,
  },
  {
    path: 'full-banner',
    component: ModulesFullBannerComponent,
  },
  {
    path: 'about',
    component: ModulesAboutComponent,
  },
  {
    path: 'service',
    component: ModulesServiceComponent,
  },
  {
    path: 'property',
    component: ModulesPropertyComponent,
  },
  {
    path: 'feature',
    component: ModulesFeatureComponent,
  },
  {
    path: 'others',
    component: ModulesOthersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
