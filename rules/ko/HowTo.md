# 전제 조건

1.  [마크다운 언어](https://www.markdownguide.org/basic-syntax/)에 대한 기본적인 이해.

2.  아직 계정이 없다면 무료 [깃허브](https://github.com/) 계정을 생성해야 합니다. RPG 이름을 사용하는 것을 권장합니다. 이는 사람들이 SRD에 접속할 때 사용할 URL의 일부가 되기 때문입니다.

3.  git에 대한 지식 없이도 브라우저를 통해 이 모든 과정을 진행할 수 있습니다. 하지만 깃허브 데스크톱을 배우면 변경 사항을 전 세계에 배포하기 전에 로컬에서 테스트할 수 있습니다.

> 도메인 이름이 등록되어 있다면, 이 과정을 통해 제가 만든 것과 같은 SRD를 생성할 수 있습니다: https://srd.7thextinctionrpg.com

# 과정

## 깃허브에 저장소 생성

1.  깃허브에 로그인합니다.

2.  공개 템플릿 https://github.com/7thExtinctionrpg/RPG_SRD_Template 로 이동합니다.

3.  "이 템플릿 사용"을 클릭합니다.

![Step3](/_media/Step3.png)

4.  "새 저장소 생성"을 선택합니다.

5.  저장소 이름을 입력합니다.

![Step5](/_media/Step5.png)

6.  '비공개'를 선택합니다.

7.  '저장소 생성'을 선택합니다.

템플릿을 복사하는 데 5-30초가 소요되며, 그 후 자신만의 복사본을 갖게 됩니다.

8.  ".nojekyll" 파일이 있는지 확인하세요. 이 파일은 깃허브에서 웹사이트를 호스팅할 때 필요한 빈 파일이며, 이 파일이 없으면 SRD가 제대로 표시되지 않습니다. *(깃허브 페이지에 게시된 파일을 Jekyll을 통해 실행하지 말라고 지시합니다.)*

## 콘텐츠 추가

### *.md 파일

.md 파일은 마크다운 파일이며, 마크다운은 서식 요소를 일반 텍스트 문서에 추가하는 데 사용할 수 있는 경량 마크업 언어입니다. 콘텐츠의 크기에 따라 게임의 모든 정보를 단일 *.md 파일에 넣거나, 제가 [7thextinctionrpg.com](https://srd.7thextinctionrpg.com)에서 한 것처럼 각 챕터별로 별도의 파일을 만들 수 있습니다. "sample.md" 파일은 몇 가지 서식 예시를 제공합니다.

마크다운 언어는 배우기 매우 쉽습니다. 위에 있는 전제 조건 2번 항목에 제공된 링크를 사용하여 전체 구문 목록을 확인하세요.

### _Sidebar.md

이것은 웹사이트 왼쪽에 있는 메뉴, 내비게이션 창입니다. 저장소에 마크다운 파일을 추가한 후, 해당 내용이 포함되도록 여기에 파일을 추가해야 합니다. 기존 서식을 따르세요.

## 깃허브 페이지를 활성화하여 저장소를 웹사이트로 전환

1.  저장소에서 '설정'을 클릭합니다.

![Website-Step1](/_media/Website-Step1.png)

2.  왼쪽 메뉴에서 '페이지'를 선택합니다.

![Website-Step2](/_media/Website-Step2.png)

3.  저장소를 '공개'로 설정하지 않았다면 두 가지 선택지가 있습니다.
    a. 저장소를 공개로 설정하여 깃허브 페이지를 통해 SRD 웹사이트를 무료로 호스팅할 수 있습니다.
    b. 깃허브 계정을 업그레이드합니다 (이 글을 쓰는 시점에서 월 $4 또는 연회비 $48).

4.  '브랜치' 아래에서 'main'을 선택하고 저장을 클릭합니다.

5.  10-20초 기다린 다음 페이지를 새로고침합니다.

6.  이제 https://coweater.github.io/mysrd/와 같은 URL을 볼 수 있습니다.

![Website-Step6](/_media/Website-Step6.png)

## 글꼴 변경

1.  /_assets/style.css 파일을 편집합니다.

2.  'body section' 아래에서 siteFont 및 headingFont를 찾을 수 있습니다.

3.  이것들을 사용하고 싶은 글꼴로 변경합니다.

## Fontawesome 및/또는 Material Icons 플러그인을 사용하여 SRD에 무료 아이콘 표시

### Fontawesome

Fontawesome을 사용하여 무료 아이콘 및 애니메이션 아이콘을 얻으세요. 구독자는 Pro 아이콘을 사용할 수 있습니다.

1.  [Fontawesome](https://fontawesome.com/icons)에서 아이콘을 찾습니다.
2.  아이콘을 선택합니다.
3.  팝업 창의 HTML 탭에서 " " 사이의 모든 내용을 복사합니다.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4.  복사한 텍스트를 `:` 사이에 공백 없이 붙여넣습니다.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

더 많은 무료 아이콘을 위해 Material Icons를 사용하세요.

1.  [Material Icons](https://fonts.google.com/icons)에서 아이콘을 찾습니다.
2.  웹 스팬 링크를 복사하여 마크다운 파일에 직접 삽입합니다.

```markup
<span class="material-icons">face</span>
```