import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excludeDropdownValue'
})
export class ExcludeDropdownValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return  value.filter(function (item: { id: any; }) {
      console.log(args)
       return item.id != args; 
   });
   };
  

}
