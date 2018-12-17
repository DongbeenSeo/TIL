# Hooks

함수형 컴포넌트에서도 상태 관리 및 클래스형 컴포넌트에서만 할 수 있는 다른 작업들을 구현 할 수 있게 해주는 기능

---

## State Hook: useState

State Hook은 함수형 컴포넌트에서 변화 할 수 있는 상태를 사용할 수 있게 해주는 기능

`useState`함수의 파라미터로는 사용하고 싶은 상태의 기본값을 넣어준다.

```js
const [value, setValue] = useState(0);
```

예시에서는 0을 기본값으로 사용하고 있다. `useState`를 호출하면 배열을 반환하는데 , 이 배열의 첫번째 원소는 현재 상태값과, 두번째 원소는 이 값을 설정해주는 setter함수이다.

---

## Effect Hook: useEffect

컴포넌트가 마운트 되거나 리렌더링이 마치고 나서 실행

`componentDidMount`와 `componentDidUpdate`와 비슷

`useEffect`에 넣은 함수는 컴포넌트가 render함수를 마침 다음에 실행

```js
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // 이 함수는 render 가 마치고 난 다음에 실행됩니다!
    console.log('rendered:', value);
  });

  console.log('rendering: ', value);
  return (
    <div>
      <p>
        <b>{value}</b>번 누르셨습니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

**`useEffect`를 사용할 때 주의할 점**은 설정해준 함수가 render가 될때마다 실행된다, 즉 props나 state가 바뀌지 않고 부모 컴포넌트가 리렌더링 될때에도 호출이 일어난다.

만약 특정상황에만 이 함수가 실행되게끔 하고 싶다면, `useEffect`의 두번째 파라미터로 주시하고 싶은 값들을 배열 형태로 전달해주면 된다.

```js
  useEffect(() => {
    console.log('rendered:', value);
  }, [value]);
```

---

## Hooks의 사용 규칙

리액트 매뉴얼에서는 Hooks사용에 있어서 두가지 준수해야 할 규칙을 규정하였다.

1. Hooks를 컴포넌트의 Top-level에서만 사용할 것
   - Hooks는 반복문이나, 조건문이나, 감싸진 함수에선 사용하면 안된다.
2. 리액트 함수 에서만 사용할 것
   -    Hooks는 리액트 함수형 컴포넌트 내부에서만 사용해야 한다. 일반 javascript함수에서 사용하면 안된다. 하지만 Custom Hook에서는 사용 가능.

> 위 규칙을 준수하기 위해 ESLint 플러그인도 만들어졌다. 아마 이 플러그인은 Hooks가 공식 릴리즈가 된다면 CRA로 만든 프로젝트에 자동으로 적용될 것이다.