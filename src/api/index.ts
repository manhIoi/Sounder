import callApi from '../utils/callApi';

const endpoint = 'https://app-music-server.herokuapp.com';

const getAllAlbums = async () => {
  try {
    const result = await callApi('GET', `${endpoint}/albums`);
    if (result.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

const getSongByAlbum = async (idAlbum: any) => {
  try {
    const result = await callApi(
      'GET',
      `${endpoint}/songs/getSongsByIdAlbum/${idAlbum}`,
    );
    console.log(result);
    if (result.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

const rootApi = {
  getAllAlbums,
  getSongByAlbum,
};

export default rootApi;
