import { useNavigate, useParams } from "react-router-dom";
import './FestivalShow.css';
import { useDispatch, useSelector } from "react-redux";
import { dateFormatter } from "../../utils/dateFormatter.js";
import { useEffect } from "react";
import { setFestivalInfo } from "../../store/slices/festivalShowSlice";

function FestivalShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const festivalList = useSelector(state => state.festival.list);
  
  // console.log(festivalList, params.id);
  
  useEffect(() => {
    const item = festivalList.find(item => params.id === item.contentid);
    dispatch(setFestivalInfo(item));
  }, []);
  
    // 전체 리스트 정보 => festivalSlice.festivalList
      // const festivalList = useSelector(state => state.festival.list);
    // 클릭한 카드의 정보를 특정할 수 있는 값 => 세그먼트 파라미터
      // const item = festivalList.find(item => params.id === item.contentid);
    // info스테이트에 저장할 값 => 클릭한 카드의 정보 1개
    // show에서 info스테이트 저장
      // const dispatch = useDispatch();
      // dispatch(setFestivalInfo(item));

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      {
        festivalInfo.title &&  
        <div className="show-container">
          <button type="button" onClick={redirectBack}>되돌아가기</button>
          <p className="show-title">{festivalInfo.title}</p>
          <p className="show-period">{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
          <img className="show-img" src={festivalInfo.firstimage} alt={`${festivalInfo.title}사진`} />
          <p className="show-addr">{`${festivalInfo.addr1}, ${festivalInfo.addr2}`}</p>
        </div>
      }
    </>
  )
}

export default FestivalShow;