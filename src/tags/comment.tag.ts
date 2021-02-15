export default function a(string: string): (line?: 'single' | 'multi') => string {
  return (line) => {
    if (line === 'single') return '// ' + string;
    else if (line === 'multi') return '/*\n' + string + '\n*/';
    else return '/* ' + string + ' */';
  };
}
