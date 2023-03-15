# nestjs-board-app

# 📖 목차 
 - [소개](#소개) 
 - [기능](#기능)
 - [프로젝트 구성](#프로젝트-구성)
 - [개발 환경](#개발-환경)
 - [Api 명세서](#api-명세서)
 - [사용 방법](#사용-방법)
---

# 소개 
 - 회원가입과 로그인으로 인증 후 게시물 CRUD 하는 간단한 게시판

```
💡 board-app
   로그인 후 jwt인증 방식으로 게시물을 생성, 조회, 삭제, 수정 등을 할 수
   있으며 공개/비공개 게시물을 작성할 수 있습니다.
```
---
# 기능

- Rest API
- DTO
- Middleware
    - Pipe
    - Guards
    - Filters
- TypeORM
- Repository
- JWT
- Passport
- Configuration
---
### 프로젝트 구성

![image](https://user-images.githubusercontent.com/47639565/225391831-ea737040-0783-4b7a-a86d-7d182c02dc28.png)

---        
# 개발 환경
- 언어
    - TypeScript
- 프레임워크
    - Nest JS
- Database
    - PostgresSQL
- API Test
    - Postman
---
# API 명세서
---
로그인 관련
```
/auth/signin        [Post]        // @Description  로그인
/auth/signup        [Post]        // @Description  회원가입 
```

게시물 관련
```
/boards         	[GET]        // @Description  (로그인한 유저의)모든 게시물 가져오기
/boards/:id         [GET]       // @Description  특정 id의 게시물 가져오기
/boards             [POST]      // @Description 게시물 생성
/boards/:id  		[DELETE]    // @Description (로그인한 유저의)특정 id의 게시물 삭제
/boards/:id/status  [PATCH]     // @Description 특정 게시물 수정
``` 
---
# 사용 방법
- 회원 가입
  - id와 password로 회원 가입시 비밀번호를 암호화하여 db에 저장
  - 솔트(salt) + 비밀번호(Plain Password)를 해시Hash로 암호화 해서 저장
  ![signup](https://user-images.githubusercontent.com/47639565/225394910-8d5a63ce-8280-4a2b-a8d3-2fda03f59633.gif)


- 로그인 
  - 로그인 성공시 jwt 토큰 생성 후 보관 & 클라이언트에게 응답
  ![signin](https://user-images.githubusercontent.com/47639565/225394986-9429e290-9638-4ab0-8a7d-e85aae758755.gif)


- 게시물 CRUD
  - 로그인한 유저가 서버에 각종 CRUD 요청시 jwt 토큰 인증후 처리
  ![create](https://user-images.githubusercontent.com/47639565/225395066-27e345e0-3ec1-494f-ab61-5a135a04854a.gif)

