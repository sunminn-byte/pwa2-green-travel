import { useDispatch, useSelector } from 'react-redux';
import './StayList.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { stayIndex } from '../../store/thunks/stayThunk';
import { setScrollEventFlg } from '../../store/slices/stayListSlice';

function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stayList = useSelector(state => state.stayList.list);
  // const page = useSelector(state => state.festival.page);
  const scrollEventFlg = useSelector(state => state.stayList.scrollEventFlg);
  
  useEffect(() => {
    
    window.addEventListener('scroll', addNextPage);

    if(stayList.length === 0) {
      dispatch(stayIndex());
    }
    
    return () => {
      window.removeEventListener('scroll', addNextPage);
    }
  }, []);

  function addNextPage() {
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const nowHeight = Math.ceil(window.scrollY);
  const viewHeight = docHeight - winHeight;

  if(viewHeight === nowHeight && scrollEventFlg ) {
    dispatch(setScrollEventFlg(false));
    dispatch(stayIndex());
  }
}

// 상세(detail)페이지로 이동
function redirectDetail(item) {
  navigate(`/stays/${item.contentid}`);
}

function redirectFestivalList() {
  navigate(`/festivals`);
}

function redirectStayList() {
  navigate(`/stays`);
}

  return (
    <>
      <button type="button" onClick={redirectFestivalList}>축제 정보</button>
      <button type="button" onClick={redirectStayList}>숙박 정보</button>

      <div className="card-container">
        {
          stayList.map(item => {
            return(
              <div className="card" onClick={() => { redirectDetail(item) }} key={item.contentid + item.createdtime}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className="card-title">{item.title}</p>
                <p className="card-addr">{item.addr1}</p>
              </div>
            )
          })
        }
      </div>    
    </>
  )
}

export default StayList;