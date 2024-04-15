import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-typed-image-home-section',
  templateUrl: './typed-image-home-section.component.html',
  styleUrls: ['./typed-image-home-section.component.scss'],
})
export class TypedImageHomeSectionComponent {
  public view: { type: string; } = { type: '' };
  public wordList: string[] = ['Live', 'Work', 'Wonder'];

  ngOnInit() {
    let idx = 0;
    let n = 0;
    let up = true;

    interval(200).subscribe(() => {
      const word = this.wordList[idx];
      const ln = word.length;

      if (up) {
        this.view.type = word.slice(0, n);
        n++;
      }
      if (n === ln + 1) {
        up = false;
      }
      if (!up) {
        this.view.type = word.slice(0, n);
        n--;
      }
      if (n === 0) {
        up = true;
        idx++;
      }
      if (idx === this.wordList.length) {
        idx = 0;
      }
    });
  }
}
