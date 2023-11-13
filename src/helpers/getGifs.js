export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zw0E2WoHQ9tZReKoaq7Aw0rD8BLRjopa&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title ? img.title : 'No title',
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};