export default function tag(tag: string, value: string): string {
  return `<${tag}>` + value + `</${tag}>`;
}
