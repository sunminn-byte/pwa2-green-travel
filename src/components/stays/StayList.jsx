import './StayList.css';

function StayList() {
  return (
    <>
      {/* <div className="btn-container"> */}
        <button type="button">축제 정보</button>
        <button type="button">숙박 정보</button>
      {/* </div> */}
      <div className="card-container">
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/00/2626200_image2_1.jpg')`}}></div>
          <p className="card-title">가경재</p>
          <p className="card-addr">경상북도 안동시 하회남촌길 69-5</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/00/2626200_image2_1.jpg')`}}></div>
          <p className="card-title">가경재</p>
          <p className="card-addr">경상북도 안동시 하회남촌길 69-5</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/00/2626200_image2_1.jpg')`}}></div>
          <p className="card-title">가경재</p>
          <p className="card-addr">경상북도 안동시 하회남촌길 69-5</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/00/2626200_image2_1.jpg')`}}></div>
          <p className="card-title">가경재</p>
          <p className="card-addr">경상북도 안동시 하회남촌길 69-5</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/00/2626200_image2_1.jpg')`}}></div>
          <p className="card-title">가경재</p>
          <p className="card-addr">경상북도 안동시 하회남촌길 69-5</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/00/2626200_image2_1.jpg')`}}></div>
          <p className="card-title">가경재</p>
          <p className="card-addr">경상북도 안동시 하회남촌길 69-5</p>
        </div>
      </div>    
    </>
  )
}

export default StayList;