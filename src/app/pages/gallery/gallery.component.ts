import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  selectedImage: string | null = null;

  images: string[] = [
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
    // 'https://images.unsplash.com/photo-1599058917212-d750089bc07d',
    'https://images.unsplash.com/photo-1594381898411-846e7d193883',
    'https://images.unsplash.com/photo-1605296867304-46d5465a13f1'
  ];

  openLightbox(img: string) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
