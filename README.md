# DENO

<img src="./gitImages/DenoLogo.png">

## 설치 방법

choco 설치 기준

```javascript
choco install deno
```

```javascript
deno run https://deno.land/std@0.81.0/examples/welcome.ts
// console.log("Welcome to Deno 🦕");
```

설치가 되었다면 위 구문을 실행해보자

## 왜 만들어졌나요??

<img src="./gitImages/RyanDahl.png">

노드를 만든 RyanDahl 은 기존 NodeJs 의 미흡한 부분들이 아쉬웠지만

충분히 많이 개발되어버린 NodeJs 를 개선하기 힘들어 새로운 언어인

Deno 를 만들게 된 것이다. 아래 기존 NodeJs 의 단점들을 알아보자

1. node_modules 파일 하나에 모든 모듈이 집중되어 있는것은 브라우저에 특화되지 않았다.

2. 많은 legacy API 들이 있지만 지원되지 않는다.

3. 보안성이 취약하다.

## 무엇이 좋은가요??

위 방법들을 개선한 것이 Deno 이기 때문에 먼저

1. npm 을 더 이상 Deno 에서는 사용하지 않고 자체적인 모듈들을 불러오며
   이는 최신 import 문법을 사용하기 때문에 require 를 사용하지 않는다.

2. Deno 에서 수정 , 삭제 한 내용들은 직접적으로 실제 시스템의 내용을 변화시키지 않는다.

3. Permission 된 명령어를 사용을 필수화 함으로써 보안을 강화한다.
