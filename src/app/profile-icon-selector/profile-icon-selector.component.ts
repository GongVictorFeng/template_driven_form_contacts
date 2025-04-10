import { Component } from '@angular/core';
import { profileIconNames } from './profile-icon-names';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'con-profile-icon-selector',
  imports: [CommonModule],
  templateUrl: './profile-icon-selector.component.html',
  styleUrl: './profile-icon-selector.component.scss',
})
export class ProfileIconSelectorComponent {
  profileIcons: string[] = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon: string = '';

  iconSelected(icon: string) {
    this.showAllIcons = false;
    this.selectedIcon = icon;
  }

  ShowIcons() {
    this.showAllIcons = true;
  }
}
