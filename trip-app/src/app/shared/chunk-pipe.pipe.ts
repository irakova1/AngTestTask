import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../model/Trip';

@Pipe({
  name: 'chunkPipe'
})
export class ChunkPipePipe implements PipeTransform {
  transform(items: Trip[], currentIndex: number): any[] {
      return items.slice(currentIndex, currentIndex+3)
  }
}
