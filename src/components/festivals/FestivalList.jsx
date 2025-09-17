import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './FestivalList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk.js';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { setScrollEventFlg } from '../../store/slices/festivalSlice.js';
// import { setFestivalInfo } from '../../store/slices/festivalShowSlice.js';

function FestivalList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const festivalList = useSelector(state => state.festival.list);
  // const page = useSelector(state => state.festival.page);
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);

  useEffect(() => {
    
    window.addEventListener('scroll', addNextPage);

    if(festivalList.length === 0) {
      dispatch(festivalIndex());
    }
    
    return () => { // 해당 컴포넌트(FestivalList)가 unmount될 때 제거해줘야 함.
      window.removeEventListener('scroll', addNextPage);
    }
  }, []);

  // 다음 페이지 가져오기
  function addNextPage() {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = Math.ceil(window.scrollY); // 현재 스크롤의 Y축 위치, 소수점 문제로 math.ceil적용
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치

    if(viewHeight === nowHeight && scrollEventFlg ) {
      dispatch(setScrollEventFlg(false));
      dispatch(festivalIndex());
    }
  }

  // 상세(Show)페이지로 이동
  function redirectShow(item) {
    // dispatch(setFestivalInfo(item));
    navigate(`/festivals/${item.contentid}`);
  }

  return (
    <>
      <div className="container">
        {
          // festivalList && festivalList.map(item => {
          // festivalList.length > 0 && festivalList.map(item => {
          festivalList.map(item => {
            return (
              <div className="card" onClick={() => { redirectShow(item) }} key={item.contentid + item.createdtime}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className="card-title">{item.title}</p>
                <p className="card-period">{dateFormatter.withHyphenYMD(item.eventstartdate)} ~ {dateFormatter.withHyphenYMD(item.eventenddate)}</p>
              </div>
            );
          })
        }
      </div>
      {/* <button type="button" onClick={addNextPage}>더 보기</button> */}
    </>
  )
}

export default FestivalList;