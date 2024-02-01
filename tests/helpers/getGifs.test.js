import { getGifs } from "../../src/helpers/getGifs";

describe('Tests on getGifs()', () => {

    test('Must return a gift array', async () => {

        const gifs = await getGifs('dragon');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});