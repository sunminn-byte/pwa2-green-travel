const swRegister = () => {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register( // 서비스워커 등록(비동기)
        '/sw.js', // 서비스워커의 경로
        {
          scope: '/',
        }
      )
      .then(registraion => {
        console.log('서비스 워커 등록 성공', registraion);
      })
      .catch(err => {
        console.log('서비스 워커 등록 실패', err);
      });
  }
}

export default swRegister;