질문사항

1. 데이터 fetching의 최적화
   이번에 프로젝트를 진행하면서 fetching을 어디서 하는 지가 가장 관건이었던 것 같습니다. 잘못된 fetching 방법으로 인해서 DB가 여러번 터졌습니다.
   이에 데이터 fetching을 해당 페이지에서 사용하는 컴포넌트들을 가장 상위에서 관리하는 page에서 관리한 것 같습니다. 데이터 송수신을 최적화하려면
   어떻게 데이터 fetching을 어떻게 해야 가장 트래픽을 최적화 할 수 있는 지 궁금합니다!!

2. NEXT JS 13에서 app routing과 page routing
   next js 13버전부터 app routing 기능이 생겨나서 next js 공부를 할 때 오히려 page routing보다 편리하게 사용했던 것 같습니다. 허나 아직 page routing보다 routing속도가 느리고
   page routing에 많은 레퍼런스들이 있기 때문에 app routing 버전을 사용하기 살짝 겁이나는 것 같습니다. 멘토님께서는 app routing과 page routing을 선택할 때 어떤 기준으로 선택하시는 지 궁금합니다!!

3. 로컬스토리지와 세션스토리지를 Auth 기능을 만들 때 활용하는 법
   이번에 프로젝트를 진행하면서 Auth기능을 만들어보았습니다. 하지만 access token을 로컬 스토리지나 세션 스토리지에 저장하는 과정에서 chrome 자체에서도 보안 에러가 났습니다. 웹 서비스에서 보안이 가장 우선시 되어야 생각합니다. 프론트엔드 입장에서 local storage를 사용해서, access token을 저장해 사용자 기록을 남겨서 활용하고 싶다면, 어떻게 안전하게 저장할 수 있는 지에 대해서 궁금합니다!! encrypt 같은 암호화 라이브러리를 사용해야 할 까요?

4. REACT의 STATE 관리 법
   리엑트를 공부하면서 가장 관리를 철저하게 해야 한다라고 생각하는 것이 State였던 것 같습니다. 공식 문서에서도 state를 관리하기 위해서 겹치는 state를 최대한 찾아내고 중복되는 state가 있다면 상위 파일을 하나 만들어서 state를 관리해야 한다고 나와있어서 배웠던 것 같습니다. 멘토님은 react로 작업할 때 state 관리를 어떻게 하시는 지 궁금합니다!!
