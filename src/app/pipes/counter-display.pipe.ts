import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counterDisplay',
  standalone: true
})
export class CounterDisplayPipe implements PipeTransform {

  transform(value: number, counterSize: number = 3): string {

    let output:string = '0'
    for(let i = 1; i < counterSize; i++){
      output += '0'
    }


    const valueSize:number = value.toString().length -1
    output = output.slice(0,(output.length -1 ) - valueSize) + value
    return output;
  }

}
