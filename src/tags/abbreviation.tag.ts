import { injecter } from '../helper';

import { AbbreviationHTMLAttributes } from '../index.d';

export default function abbreviation(string: string): (attributes: AbbreviationHTMLAttributes) => string {
  return (attributes) => {
    return injecter('abbr', string);
  };
}
