import React from 'react';
import { connect } from 'react-redux';
import addSong from './Redux/actions';

// 리듀서로 들어가기 위해
const AddButton = ({ addSong }) => {
  const clickHandler = () => {
    addSong({ title: 'hello', duration: '1:30' });
  };

  return (
    <div className='main-right'>
      <button className='btn' onClick={clickHandler}>
        노래 추가!
      </button>
    </div>
  );
};

// 내가 넣어주고 싶은 액션은 두번째, 리덕스 스토어에서 값 꺼내줄 필요 없으면 null
// 두번째에 내가 객체 형태로 내가 넣고싶은 액션 넣기
// AddButton 이라는 컴포넌트에 props로 넘어감
// 커낵트가 묶어줘서 프롭스 형태로 줘야 넘어감
export default connect(null, { addSong })(AddButton);
