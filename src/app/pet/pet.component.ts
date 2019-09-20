import { Component } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  petName = 'puppie';
  petImage = 'https://znews-photo.zadn.vn/w1024/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg';
  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }
}