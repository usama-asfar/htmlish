import { injecter } from '../helper';

import { AnchorHTMLAttributes } from '../index.d';

export default function a(string: string): (attributes: AnchorHTMLAttributes) => string {
  return () => {
    return injecter('a', string);
  };
}
