import { isDef, isObject } from '.';

type ObjectIndex = Record<string, any>;

const { hasOwnProperty } = Object.prototype;

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
  Object.keys(from).forEach((key) => {
    const val = from[key];

    if (!isDef(val)) {
      return;
    }

    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
      to[key] = val;
    } else {
      to[key] = deepAssign(Object(to[key]), from[key]);
    }
  });

  return to;
}


export function deepClone(obj: Record<string, any>): Record<string, any> {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj);
  }

  return obj;
}
