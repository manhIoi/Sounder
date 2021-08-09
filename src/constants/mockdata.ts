const mockAlbums = [
  {
    _id: '60b87e70fe4a583ed0108b22',
    image: 'https://i.ytimg.com/vi/SWZCrCKfSpY/maxresdefault.jpg',
    name: 'MOT NGUOI VI EM',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87db3fe4a583ed0108b1e',
      title: 'Hip-hop Việt Nam',
    },
    artist: 'Wean',
    __v: 0,
  },
  {
    _id: '60b87edffe4a583ed0108b23',
    image:
      'https://avatar-ex-swe.nixcdn.com/song/share/2020/10/19/b/2/4/b/1603078558209.jpg',
    name: 'Một mình có buồn không',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87db3fe4a583ed0108b1e',
      title: 'Hip-hop Việt Nam',
    },
    artist: 'Thiều Bảo Trâm',
    __v: 0,
  },
  {
    _id: '60b87f01fe4a583ed0108b24',
    image: 'https://i1.sndcdn.com/artworks-000644684335-tvswce-t500x500.jpg',
    name: 'Thuận theo ý trời',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87db3fe4a583ed0108b1e',
      title: 'Hip-hop Việt Nam',
    },
    artist: 'Bùi Anh tuấn',
    __v: 0,
  },
  {
    _id: '60b87ff3fe4a583ed0108b25',
    image: 'https://e.dowload.vn/data/image/2021/05/15/Song-1.jpg',
    name: 'Nghe nhiều nhất',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87dc4fe4a583ed0108b1f',
      title: 'Đang thịnh hành',
    },
    __v: 0,
  },
  {
    _id: '60b88057fe4a583ed0108b26',
    image:
      'https://seami.vn/wp-content/uploads/2017/10/the-loai-nhac-dong-que.jpg',
    name: 'Phổ biến trong nước',
    suggestion: {
      _id: '60b87dc4fe4a583ed0108b1f',
      title: 'Đang thịnh hành',
    },
    __v: 0,
  },
  {
    _id: '60b8831620ba1617680df97b',
    image:
      'https://avatar-ex-swe.nixcdn.com/topic/share/2020/08/13/e/9/1/9/1597291430873.jpg',
    name: 'Phổ biến',
    suggestion: {
      _id: '60b8824520ba1617680df979',
      title: 'Âu mỹ',
    },
    artist: 'Justin Bieber, Alan Walker, ...',
    __v: 0,
  },
  {
    _id: '60b9961d88d42f3d0c50104a',
    image: 'https://tiasang.com.vn/Portals/0/Images/Beethoven-at-piano.jpg',
    name: 'Cổ điển',
    suggestion: {
      _id: '60b8824520ba1617680df979',
      title: 'Âu mỹ',
    },
    artist: 'Nhiều ca sĩ',
    __v: 0,
  },
  {
    _id: '60b9966b88d42f3d0c50104b',
    image: 'https://i.scdn.co/image/ab67706c0000bebb362beaecd0d7358e2e090f4c',
    name: 'R&B',
    suggestion: {
      _id: '60b8824520ba1617680df979',
      title: 'Âu mỹ',
    },
    artist: 'Nhiều ca sĩ',
    __v: 0,
  },
  {
    _id: '60b99b1388d42f3d0c50104f',
    image:
      'https://tt24h.vn/img/2021/04/son-tung-mtp-tung-mv-vao-khung-gio-ky-la-dan-tinh-lai-tim-ra-1-chi-tiet-lien-quan-den-ga-cung-hai-tu1.jpg',
    name: 'Muộn rồi mà sao còn',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87dd1fe4a583ed0108b20',
      title: 'Album phổ biến',
    },
    artist: 'Sơn Tùng M-TP',
    __v: 0,
  },
  {
    _id: '60b9a1e288d42f3d0c501054',
    image:
      'https://i.pinimg.com/originals/fd/9a/5f/fd9a5f8f532d59e524104080e55f0142.jpg',
    name: 'JB Album',
    typeAlbum: 'Album',
    suggestion: {
      _id: '60b8824520ba1617680df979',
      title: 'Âu mỹ',
    },
    artist: 'Justin Bieber',
    __v: 0,
  },
  {
    _id: '60d94244afa2a22b207be60d',
    image:
      'https://thegioidienanh.vn/stores/news_dataimages/thanhtan/062021/17/14/in_article/2453_Wren_TEHNteaser01.jpg?rt=20210617142500',
    name: 'Thích em hơi nhiều',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87dd1fe4a583ed0108b20',
      title: 'Album phổ biến',
    },
    artist: 'Wren evans',
    __v: 0,
  },
  {
    _id: '60d94df6afa2a22b207be610',
    image: 'https://i.ytimg.com/vi/57LbVkW5Gbw/maxresdefault.jpg',
    name: 'Tell me (What is love)',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94d89afa2a22b207be60f',
      title: 'K-Pop',
    },
    artist: 'D.O (Exo)',
    __v: 0,
  },
  {
    _id: '60d94e4fafa2a22b207be611',
    image:
      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1585376254/fbk5h5h7dplnlwecdjnj.jpg',
    name: 'Stay With Me',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94d89afa2a22b207be60f',
      title: 'K-Pop',
    },
    artist: 'Chanyeol, Punch',
    __v: 0,
  },
  {
    _id: '60d94eecafa2a22b207be613',
    image: 'https://i.ytimg.com/vi/RgKAFK5djSk/maxresdefault.jpg',
    name: 'See you again',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94ebdafa2a22b207be612',
      title: 'Tâm trạng',
    },
    artist: 'Wiz Khalifa, Charlie Puth',
    __v: 0,
  },
  {
    _id: '60d94f50afa2a22b207be614',
    image: 'https://i.ytimg.com/vi/vE1kg4R47N0/maxresdefault.jpg',
    name: 'Smile',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94ebdafa2a22b207be612',
      title: 'Tâm trạng',
    },
    artist: 'Johnny Stimson',
    __v: 0,
  },
  {
    _id: '60d94fe4afa2a22b207be615',
    image:
      'https://bloganchoi.com/wp-content/uploads/2018/05/bigbang-haru-haru-1.jpg',
    name: 'Haru Haru',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94d89afa2a22b207be60f',
      title: 'K-Pop',
    },
    artist: 'Big Bang',
    __v: 0,
  },
  {
    _id: '60d9502cafa2a22b207be616',
    image: 'https://i.ytimg.com/vi/86htdJAHF-E/maxresdefault.jpg',
    name: "Ex's Hate Me 2",
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60b87dc4fe4a583ed0108b1f',
      title: 'Đang thịnh hành',
    },
    artist: 'AMEE, Bray',
    __v: 0,
  },
  {
    _id: '60d950a2afa2a22b207be617',
    image: 'https://i.ytimg.com/vi/aMyO6GNkfpo/maxresdefault.jpg',
    name: 'Beside You',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94ebdafa2a22b207be612',
      title: 'Tâm trạng',
    },
    artist: 'keshi',
    __v: 0,
  },
  {
    _id: '60d950f9afa2a22b207be618',
    image: 'https://pbs.twimg.com/media/DB41o98UAAEcxsB.jpg',
    name: "4 o'clock",
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94ebdafa2a22b207be612',
      title: 'Tâm trạng',
    },
    artist: 'RM, V (BTS)',
    __v: 0,
  },
  {
    _id: '60d95150afa2a22b207be619',
    image: 'https://i1.sndcdn.com/artworks-000431210955-o0jojl-t500x500.jpg',
    name: 'Untitled 2014',
    typeAlbum: 'Đĩa đơn',
    suggestion: {
      _id: '60d94d89afa2a22b207be60f',
      title: 'K-Pop',
    },
    artist: 'G-Dragon',
    __v: 0,
  },
];

export {mockAlbums};
