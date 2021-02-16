import { commentTag, aTag, abbreviationTag, addressTag, areaTag } from './tags';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function htmlish(string: string) {
  return {
    comment: commentTag(string),
    a: aTag(string),
    abbr: abbreviationTag(string),
    address: addressTag(string),
    area: areaTag(string),
  };
}
