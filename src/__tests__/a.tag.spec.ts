import htmlish from '../index';

describe('a Tag', () => {
  test('a tag', () => {
    const aTag = htmlish('Hello').a();
    expect(aTag).toEqual('<a>Hello</a>');
  });
});
