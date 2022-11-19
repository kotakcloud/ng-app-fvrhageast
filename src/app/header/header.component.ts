import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  isEditable = false;

  openDropdown = false;
  openModal = false;
  croppedImage: string = '';

  constructor() { }
  ngOnInit(): void {
    this.toDataUrl('http://localhost:4200/assets/user.jpg', (myBase64: string) => {
      this.croppedImage = myBase64;
    });
  }

  toDataUrl(src: string, callback: Function){
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function(){
       var canvas = document.createElement('canvas');
       var context: any = canvas.getContext('2d');
       canvas.height = 400;
       canvas.width = 400;
       context.drawImage(this, 0, 0);
       var dataURL = canvas.toDataURL('image/jpeg');
       callback(dataURL);
    };
    image.src = src;
 }



  openProfileModal() {
    if (!this.isEditable) return;
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
