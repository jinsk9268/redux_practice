const addSong = (song) => {
  return {
    // songList에 있는 switch case와 일치해야
    type: 'ADD_SONG',
    payload: song,
  };
};

export default addSong;
