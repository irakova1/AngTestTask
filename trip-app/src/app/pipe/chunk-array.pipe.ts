import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunkArray' })
export class ChunkArrayPipe implements PipeTransform {
  transform(arr: any[], chunkSize: number): any[][] {
    if (!arr || !chunkSize) return [];
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
