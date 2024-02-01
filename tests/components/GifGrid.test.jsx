import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on <GifGrid/>', () => {
  const category = 'Dragon ball';

  test('Must to show the loading test initially', () => {
    const loadingText = 'Loading...';

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText(loadingText));
    expect(screen.getByText(category));
  });

  test('Must to show gifs when the images are loaded through useFetchGifs function', () => {
    const gifs = [
      {
        id: '1234',
        title: 'Dragon ball',
        url: 'https://localhost/dragon-ball.jpg',
      },
      {
        id: '12345',
        title: 'Demon Slayer',
        url: 'https://localhost/demon-slayer.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
