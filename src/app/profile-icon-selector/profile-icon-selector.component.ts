import { Component, forwardRef, Provider } from '@angular/core';
import { profileIconNames } from './profile-icon-names';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const ICON_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
};

@Component({
  selector: 'con-profile-icon-selector',
  imports: [CommonModule],
  templateUrl: './profile-icon-selector.component.html',
  styleUrl: './profile-icon-selector.component.scss',
  providers: [ICON_VALUE_PROVIDER],
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {
  profileIcons: string[] = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon: string = '';

  onChange!: Function;
  onTouched!: Function;

  iconSelected(icon: string) {
    this.showAllIcons = false;
    this.selectedIcon = icon;
    this.onChange(icon);
  }

  ShowIcons() {
    this.showAllIcons = true;
  }

  writeValue(icon: string): void {
    this.selectedIcon = icon;

    if (icon && icon !== '') {
      this.showAllIcons = false;
      return;
    }
    this.showAllIcons = true;
  }

  registerOnChange(fn: Function): void {
    this.onChange = (icon: string) => {
      fn(icon);
    };
  }
  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
