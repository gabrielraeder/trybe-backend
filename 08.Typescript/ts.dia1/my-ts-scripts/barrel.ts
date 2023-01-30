import * as area from './area';
import * as capacity from './capacity';
import * as length from './length';
import * as mass from './mass';
import * as volume from './volume';

export default function barrel(choice: string) {
  switch (choice) {
    case 'area':
      return area;
    case 'capacity':
      return capacity;
    case 'length':
      return length;
    case 'mass':
      return mass;
    default:
      return volume;
  }
}
