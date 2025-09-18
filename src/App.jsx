import Header from './components/common/Header.jsx';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { localStorageUtil } from './utils/localStorageUtil.js';
import { dateFormatter } from './utils/dateFormatter.js';
import BeforeInstallPrompt from './components/BeforeInstallPrompt.jsx';

function App() {

  useEffect(() => {
    // 로컬스토리지에 저장된 날짜를 획득(지난 날짜)
    const clearDate = localStorageUtil.getClearDate();
    // 오늘 날짜 획득
    // const now = new Date();
    // const nowDate = dateFormatter.formatDateToYMD(now);
    const nowDate = dateFormatter.formatDateToYMD(new Date());

    // 로컬스토리지의 (저장된)날짜와 오늘 날짜가 다를 경우
    if(clearDate !== nowDate) {
      // 저장된 날짜와 오늘날짜를 비교해서 아래 처리 진행
      localStorageUtil.clearLocalStorage();
      localStorageUtil.setClearDate(nowDate);

      // state가 초기화되지 않는 현상을 해결하기 위해, 강제로 화면 새로고침
      window.location.reload();
    }
  }, []); // refresh 또는 처음 들어왔을 때 mount 됨

  return (
    <>
      <BeforeInstallPrompt />
      <Header></Header>
      <main>
        <Outlet />
      </main>

      {/* 스크롤 초기화, 최상위 컴포넌트에 한번만 추가 */}
      <ScrollRestoration></ScrollRestoration>
    </>
  )
}

export default App
