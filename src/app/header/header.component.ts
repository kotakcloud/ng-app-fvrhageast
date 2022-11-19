import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  openDropdown = false;
  openModal = false;
  croppedImage = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500';

  ngOnInit(): void {
  }

  openProfileModal() {
    this.openDropdown = false;
    this.openModal = true;
  }

  updateProfile(_croppedImage: string) {
    if(_croppedImage) {
      this.croppedImage = _croppedImage;
      console.log('this.croppedImage', this.croppedImage);
      // save to BE call
    }
    this.openModal = false;
  }

}
