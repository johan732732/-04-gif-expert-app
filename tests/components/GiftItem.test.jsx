const { render, screen } = require('@testing-library/react');
const { GifItem } = require('../../src/components/GifItem');

describe('Test in <GiftItem/>', () => {
  const title = 'Hola, soy goku';
  const url = 'http://dragon-ball/goku.jpg';

  test('Must match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Must show the image with the title', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Must to show the tile in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
