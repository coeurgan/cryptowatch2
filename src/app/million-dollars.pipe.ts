import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'millionDollars'})
export class MillionDollarsPipe implements PipeTransform {
  transform(value: number): number {
    
    return value / 1000000;
  }
}