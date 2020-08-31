const INITIAL_STATE = [];

// songList 는 리듀서
// 인자로 INITIAL_STATE (state), action (action creator가 반환하는 객체)
const songList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      // 스프레드 연산자
      return [...state, action.payload];
    default:
      return state;
  }
};

export default songList;
