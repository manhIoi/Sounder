import {SongType} from '../types';
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

const login = async (email: string, password: string) => {
  try {
    const body = await callApi('post', `${endpoint}/users/login`, {
      email,
      password,
    });
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const register = async (newAccount: {
  displayName: string;
  email: string;
  password: string;
}) => {
  try {
    const body = await callApi(
      'post',
      `${endpoint}/users/register`,
      newAccount,
    );
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};
const createMyFavorite = async (idUser: string) => {
  try {
    const body = await callApi(
      'post',
      `${endpoint}/myFavorite/create/${idUser}`,
    );
    console.log(body);
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const addToMyFavorite = async (idUser: string, newSong: SongType) => {
  try {
    const body = await callApi(
      'put',
      `${endpoint}/myFavorite/update/addToMyFavorite/${idUser}`,
      newSong,
    );

    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const removeFromMyFavorite = async (idUser: string, idSong: string) => {
  try {
    const body = await callApi(
      'put',
      `${endpoint}/myFavorite/update/removeFromMyFavorite/${idUser}`,
      {idSong},
    );

    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const getSongFromMyFavorite = async (idUser: string) => {
  try {
    const body = await callApi(
      'get',
      `${endpoint}/myFavorite/getOne/${idUser}`,
    );
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const updateInfoUser = async (idUser: string, data: any, authToken: string) => {
  try {
    const body = await callApi('put', `${endpoint}/users/updateInfo`, {
      idUser,
      data,
      authToken,
    });

    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const rootApi = {
  getAllAlbums,
  getSongByAlbum,
  login,
  register,
  createMyFavorite,
  addToMyFavorite,
  removeFromMyFavorite,
  getSongFromMyFavorite,
  updateInfoUser,
};

export default rootApi;
