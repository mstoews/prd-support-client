import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  constructor() { }
  image1 = 'https://picsum.photos/200/300';
  title= 'The Catalyzer';
  likes = 6;
  reviews = '1.3K';
  description = 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.';

  ngOnInit(): void {
  }

}
