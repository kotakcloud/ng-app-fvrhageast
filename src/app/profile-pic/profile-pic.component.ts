import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {

  @Output() update = new EventEmitter();

  constructor() { }

  imageChangedEvent: any = '';
  @Input()
  croppedImage: any = '';
  isEdit = false;

  ngOnInit(): void {
    // if (this.croppedImage) {
    //   this.imageChangedEvent = {
    //     "isTrusted": true
    //   };

    // }
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      // this.croppedImage = event.base64;
      this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  save() {
    this?.croppedImage && this.update.emit(this.croppedImage);
  }
  cancel() {
    this.update.emit(null);
  }
}
