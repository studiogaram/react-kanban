# React - Kanban
**React - Kanban** is my assignment based on React (with Flux).

###Specification
1. 앱은 하나의 보드로 구성되며, 보드에는 여러 개의 리스트가, 리스트에는 여러 개의 카드가 들어갈 수 있다.
3. 리스트의 순서를 마우스 또는 터치로 드래그해서 바꿀 수 있다.
4. 새 리스트를 추가하거나 기존의 리스트를 삭제할 수 있다.
5. 열 안에서 카드를 드래그해서 순서를 바꿀 수 있다.
6. 새 카드를 만들 수 있다.
7. 카드에는 아래와 같은 내용들이 들어가게 된다.	- 이슈 번호 (**Issue No** : *Int*)	- 이슈 제목 (**Issue Title** : *Text*)
	- 이슈 유형 (**Issue Type** : *String* / Defect, Improvement)
	- 생성 시간 (**Issue Birth Time** : *TimeStamp*)

###Additional Features
1. 카드를 다른 리스트로 드래그해서 옮길 수 있다.
2. 반응형 디자인을 적용한다.
3. 아카이빙
	- 카드 하나를 아카이브할 수 있다.
	- 리스트 안에 들은 모든 카드를 아카이브할 수 있다.
4. 리스트를 아카이브할 수 있다.
5. 보드의 상태를 저장한다. 브라우저를 완전히 종료하고 다시 실행해도 마지막에 저장한 칸반이 남아있도록 한다.
6. 카드에 제목 외에 본문, 태그, 댓글 등의 부가 정보를 넣을 수 있다.



##1일차 : Overview


Dependency

