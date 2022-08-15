import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  image1 = 'https://picsum.photos/200/300';
  image2 = 'https://picsum.photos/200/200';
  image3 = 'https://picsum.photos/200/100';

  constructor() { }

  ngOnInit(): void {
  }
}
