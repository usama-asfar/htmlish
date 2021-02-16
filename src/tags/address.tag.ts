import { injecter } from '../helper';

import { AddressHTMLAttributes } from '../index.d';

export default function address(string: string): (attributes: AddressHTMLAttributes) => string {
  return (attributes) => {
    return injecter('address', string);
  };
}
