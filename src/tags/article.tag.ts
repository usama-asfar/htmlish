import { injecter } from '../helper';

import { AddressHTMLAttributes } from '../index.d';

export default function article(string: string): (attributes: AddressHTMLAttributes) => string {
  return (attributes) => {
    return injecter('address', string);
  };
}
