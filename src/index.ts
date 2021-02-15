import { aTag, commentTag } from './tags';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function htmlish(string: string) {
  return {
    a: aTag(string),
    comment: commentTag(string),
  };
}
