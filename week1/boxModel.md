* Box Model
  * Box Basic
      * padding: box와 text사이의 간격
      * margin: box와 box사이의 간격
---
   * block level element tag
      * 화면 전체를 쓰는 tag
      * ex) ```<div>```
   * inline element tag
      * 자기 content만큼 크기를 가지는 tag
      * ex) ```<span>```
---
* Box-sizing
  * content-box
      * 이 값은 CSS 표준에 의해 정의된 기본 스타일이다. width와 height 속성은 오로지 콘텐츠만을 포함하여 측정되며, padding, border, margin을 포함하지 않는다.
> 참고: padding, border, margin은 박스 외부에 존재한다. 이를테면, .box {width: 350px}; 인 요소에 {border: 10px solid black;} 를 적용하면 결과적으로 {브라우저에서 렌더링되는 것은} .box {width: 370px;}이다.
  * border-box
    * width 와 height 속성이 padding 및 border를 포함하며, margin을 포함하지 않는다. 이 box model 은 인터넷 익스플로러에서 문서가 쿽스 모드일 때 사용된다. 
> 참고: padding 과  border는 박스 안에 존재한다. 이를테면 .box {width: 350px}; 인  요소에  {border: 10px solid black;} 를 적용하면 결과적으로 {브라우저에서 렌더링되는 것은} .box {width: 350px;}이다.