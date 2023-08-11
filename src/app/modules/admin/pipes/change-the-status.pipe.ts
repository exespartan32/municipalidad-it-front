import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTheStatus'
})
export class ChangeTheStatusPipe implements PipeTransform {

    transform(status: boolean): string {
      return status ? 'Deshabilitar' : 'Habilitar';
    }

}
