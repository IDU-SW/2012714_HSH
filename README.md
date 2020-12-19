# movie app hsh
# 영화 리스트, 디테일페이지
# 사용 패키지 및 api
    axios (v.0.21.0)
    gh-pages (v.3.1.0)
    prop-types (v.15.7.2)
    react-router-dom (v.5.2.0)
    npx (v.6.14.5)
    List movies api - > api규약 : https://yts.mx/api#list_movies
                            json파일 : https://yts.mx/api/v2/list_movies.json
# 프로젝트 설명
    영화리스트가 담긴 api를 호출해 리스트, 디테일페이지를 구현
# 작동 순서 설명
    1. npm start 를 통해 구동
    2. index.html-> index.js -> App.js 순서로 Html에 담길 React Component오픈 
    3. App.js 에서 Home(리스트), About(일반html) 버튼 구현 각 버튼으로 네비게이션 기능
    4. HOME버튼 클릭시 Movie.js 컴포넌트 동작 영화 리스트 호출
    5. 영화리스트 페이지에서 영화 클릭시 해당 영화 id값을 통해 디테일 페이지 호출
# 미흡한점
 About 페이지에 담을 기능 구현하지못함, Router의 기능을 구현하다가 css가 깨졌는데 복구하지 못함

React JS Fundamentals