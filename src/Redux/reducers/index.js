// 실제 바닐라js에서 씀 combineReducers
import { combineReducers } from 'redux';
import songList from './songList';
// if 2개라면
// import songList2 from './songList2';

// 바닐라 js에서는 combineReducers({ songList: songList }) 대신 ({songList}) 가능
const rootReducer = combineReducers({ songList });
export default rootReducer;

// export default combineReducers({ songList });
