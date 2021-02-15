import { injecter } from '../helper';

export default function a(string: string): () => string {
  return () => injecter('a', string);
}
