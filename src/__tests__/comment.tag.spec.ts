import htmlish from '../index';

describe('comment Tag', () => {
  test('comment tag', () => {
    const commentTag = htmlish('Hello World').comment();
    expect(commentTag).toEqual('/* Hello World */');
  });

  test('single line commit tag', () => {
    const commentTag = htmlish('Hello World').comment('single');
    expect(commentTag).toEqual('// Hello World');
  });

  test('double line comment tag', () => {
    const commentTag = htmlish('Hello World').comment('multi');
    expect(commentTag).toEqual('/*\nHello World\n*/');
  });
});
