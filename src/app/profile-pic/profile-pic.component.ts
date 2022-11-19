import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
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
    this.update.emit(this.croppedImage);
  }
  cancel() {
    this.update.emit(null);
  }
}
