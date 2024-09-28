import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
    standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Front-end': return 'css';
      case 'Back-end': return 'code';
      case 'DevOps': return 'terminal';
      case 'Redes': return 'public';
      case 'UX/UI': return 'video_label';
      case 'Full-Stack': return 'data_object'
    }
    return 'devices';
  }

}
