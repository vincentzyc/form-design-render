import { isNaN } from './number';
import { getType } from './dataType'

export function isDate(val: Date): val is Date {
  return (
    getType(val) === 'Date' &&
    !isNaN(val.getTime())
  );
}
