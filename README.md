# CS 전공 지식

도서명 : 면접을 위한 CS 전공지식노트
예제소스 : https://github.com/gilbutITbook/080326

# 1 - 디자인 패턴과 프로그래밍 패러다임

## 1.1 디자인 패턴

- 프로그램을 설계할 때 발생했던 문제점들을 객체 간의 상호 관계 등을 이용하여 해결할 수 있도록 하나의 '규약' 형태로 만들어 놓은 것을 의미

### 1.1.1 싱글톤 패턴 (Singletone pattern)

- 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴
- 장점 : 하나의 인스턴스를 만들어 놓고 해당 인스턴스를 다른 모듈들이 공유하며 사용하기 때문에 인스턴스를 생성할 때 드는 비용이 줄어듦
- 단점 : 의존성이 높아짐, 독립적인 인스턴스를 만들기가 어려워 TDD(Test Driven Development)를 할 때 걸림돌이 됨

#### 의존성 주입 (DI, Dependency Injection)

싱글톤 패턴은 사용하기가 쉽고 굉장히 실용적이지만 모듈 간의 결합을 강하게 만들 수 있다는 단점이 있기에 모듈 간의 결합을 조금 더 느슨하게 만들어 해결이 가능함, 이를 통해 메인 모듈은 하위 모듈에 대한 의존성이 떨어지며 이를 '디커플링 된다'고도 함

**장점**

- 모듈을 쉽게 교체할 수 있는 구조가 되어 테스팅하기 쉽고 마이그레이션 하기도 수월함
- 구현할 때 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어 주기 때문에 앱 의존성 방향이 일관되고 앱을 쉽게 추론할 수 있으며 모듈 간의 관계들이 조금 더 명확해짐

**단점**

- 모듈들이 더욱더 분리되므로 클래스 수가 늘어나 복잡성이 증가될 수 있으며 약간의 런타임 패널티가 생기기도 함

**원칙**

- 상위 모듈은 하위 모듈에서 어떠한 것도 가져오지 않아야 함
- 둘 다 추상화에 의존해야 하며, 이때 추상화는 세부 사항에 의존하지 말아야 함

### 1.1.2 팩토리 패턴 (Factory pattern)

객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴이자 상속 관계에 있는 두 클래스에서 상위 클래스가 중요한 뼈대를 결정하고, 하위 클래스에서 객체 생성에 관한 구체적인 내용을 결정하는 패턴

**장점**

- 클라이언트 코드로부터 서브 클래스의 인스턴스화를 제거하여 서로 간의 종속성을 낮춤
- 결합도를 느슨하게 하며 확장을 쉽게 함

**단점**

- 새로 생성할 객체가 늘어날 때마다, Factory 클래스에 추가해야하므로 클래스가 많아짐

### 1.1.3 전략 패턴 (Strategy pattern)

객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 전략이라고 부르는 '캡슐화한 알고리즘'을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴

**장점**

- 공통 로직이 부모 클래스에 있지 않고 Context라는 별도의 클래스에 존재하기 때문에 구현체들에 대한 영향도가 적음
- Strategy라는 인터페이스에 의존하고 있기 때문에 구현체를 갈아끼우기 쉬움

**단점**

- 로직이 늘러날 때마다 구현체 클래스가 늘어남
- Context와 Strategy를 한번 조립하면 전략을 변경하기 힘듦

#### Passport

전략 패턴을 활용한 라이브러리
Node.js에서 인증 모듈을 구현할 때 쓰는 미들웨어 라이브러리로 OAuth 전략 등을 지원

### 1.1.4 옵저버 패턴 (Observer pattern)

어떤 객체의 상태 변화를 관찰하다가 상태 변화가 있을 때마다 메서드 등을 통해 옵저버 목록에 있는 옵저버들에게 변화를 알려주는 디자인 패턴

주로 이벤트 기반 시스템에 사용하며 MVC(Model-View-Controller) 패턴에도 사용

**장점**

- 실시간으로 한 객체의 변경사항을 다른 객체에 전파할 수 있음
- 느슨한 결합으로 시스템이 유연하고 객체 간의 의존성을 제거함

**단점**

- 사용량이 과하면 상태 관리가 힘듦
- 데이터 배분에 문제가 생기면 위험성이 커질 수 있음

#### 프록시 객체 (Proxy Object)

프록시 객체는 어떠한 대상의 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 작업을 가로챌 수 있는 개체를 뜻하며, JS에서 프록시 객체는 두 개의 매개변수를 가짐

- target : 프록시할 대상
- handler : 프록시 객체의 target 동작을 가로채서 정의할 동작들이 정해져 있는 함수

### 1.1.5 프록시 패턴과 프록시 서버

#### 프록시 패턴

대상 객체에 접근하기 전에 그 접근에 대한 흐름이 가로채 대상 객체 앞단의 인터페이스 역할을 하는 디자인 패턴

#### 프록시 서버

서버와 클라이언트 사이에서 클라이언트가 자신을 통해 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용 프로그램을 가리킴

**프록시 서버로 쓰는 nginx**

nginx는 비동기 이벤트 기반의 구조와 다수의 연결을 효과적으로 처리 가능한 웹서버이며, 주로 nodejs 서버 앞단의 프록시 서버로 활용됨

**프록시 서버로 쓰는 CloudFlare**

CloudFlare는 전 세계적으로 분산도니 서버가 있고 이를 통해 어떻나 시스템의 콘텐츠 전달을 빠르게 할 수 있는 CDN 서비스로 CDN 뿐만 아니라 DDOS 공격 방어, HTTPS 구축 등의 이점이 있음

- DDOS 공격 방어 : 의심스러운 트래픽, 특히 사용자가 접속하는 것이 아닌 시스템을 통해 오는 트래픽을 자동으로 차단함

- HTTPS 구축 : 서버에서 HTTPS를 구축할 때 인증서를 기반으로 구축할 수도 있지만, CloudFlare를 사용하면 별도의 인증서 설치 없이 좀 더 손쉽게 구축이 가능

**CORS와 프록시 서버**

프론트엔드 서버 앞단에 프록시 서버를 놓아 로컬 내에서 API 요청시 발생하는 CORS 에러를 해결할 수 있음
