interface SongType {
  type: String;
  _id: String;
  url: String;
  title: String;
  album: {
    _id: String;
    name: String;
    suggestion: String;
  };
  artwork: any;
  artist: String;
  __v: number;
}

interface AlbumType {
  _id: String;
  image: String;
  name: String;
  typeAlbum: String;
  suggestion: {
    _id: String;
    title: String;
  };
  artist: String;
  __v: number;
}

export type {SongType, AlbumType};
