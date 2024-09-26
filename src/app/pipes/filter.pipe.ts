import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true 
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, field: string): any[] {
    if (!items || !searchText) return items;  // Si no hay ítems o no hay texto de búsqueda, devuelve los ítems originales.

    searchText = searchText.toLowerCase();  // Convierte el texto de búsqueda a minúsculas.

    return items.filter(it => {
      // Desglosa el campo en caso de que sea una propiedad anidada (por ejemplo, 'empresa.nombre').
      return field.split('.').reduce((obj, key) => obj[key], it).toLowerCase().includes(searchText);
    });
  }
}
