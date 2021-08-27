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

interface ActionType {
  type: String;
  payload?: any;
}

interface AlertType {
  isShow?: boolean;
  message?: string;
  title?: string;
  isConfirm?: boolean;
  callbackConfirm?: () => void;
}

export type {SongType, AlbumType, ActionType, AlertType};
