# javascript-racingcar-precourse

- 자동차의 이름은 `/a-zA-Z/`만을 포함할까?
- 자동차의 이름에 `,`가 들어갈 수 있을까?
- Testing을 용이하게 하기 위해서는 IOHandler의 종속성을 최소화해야 한다.
- 어떻게 하면 Promise를 포함하는 함수를 mocking 할 수 있을까?

## App Class

## 자동차 Class

### Properties

- name: 자동차가 생성될 때 가지는 이름
- position: 자동차의 현재 위치

### Methods

- move: 자동차를 이동시키는 함수

## 게임 Class

### Properties

- cars: 게임에 참가한 자동차
- maxTurn: 게임의 최대 단계
- currentTurn: 게임의 현재 단계
- history: 각 단계마다 게임의 기록

### Methods

- play: 게임을 끝까지 시뮬레이션
- playOneTurn: 게임을 한 단계 진행
- getWinner: 게임의 현재 우승자를 반환

## IO handler class

### Methods

- getCarNames: 입력으로부터 자동차의 이름들을 반환
- getTurns: 입력으로부터 시도 횟수를 반환
- printWinner: 우승자 출력
- printGameHistory: 게임 전체 기록 출력

## 에러 Class

- InvalidCarName: 자동차의 이름의 길이가 5자 초과, 0자일 경우
- InvalidTurn: 입력으로 들어온 전체 턴의 개수가 0이 아닐 경우
- generateErrorMessage: 에러 메시지를 포멧에 맞게 생성해주는 함수
