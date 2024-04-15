import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { sideMenu, userPanelSideMenu } from '../../../../../shared/data/user-panel';

@Component({
  selector: 'app-user-panel-side-menu',
  templateUrl: './user-panel-side-menu.component.html',
  styleUrls: ['./user-panel-side-menu.component.scss']
})
export class UserPanelSideMenuComponent {

  @Input() activeTab: string;

  public userPanelSideMenu = userPanelSideMenu;

  constructor(private router: Router){}

  getPage(data:sideMenu){
    this.activeTab = data.value;
    this.router.navigate([data.path])
  }
}
