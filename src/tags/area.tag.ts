import { injecter } from '../helper';

import { AreaHTMLAttributes } from '../index.d';

export default function area(string: string): (attributes: AreaHTMLAttributes) => string {
  return (attributes) => {
    return injecter('address', string);
  };
}
