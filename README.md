# nestjs-board-app

# 📖 목차 
 - [소개](#소개) 
 - [기능](#기능)
 - [개발 환경](#개발-환경)
 - [Api 명세서](#api-명세서)
        
# 소개 
 - 회원가입과 로그인으로 인증 후 게시물 CRUD 하는 간단한 게시판

```
💡 board-app
   로그인 후 jwt인증 방식으로 게시물을 생성, 조회, 삭제, 수정 등을 할 수
   있으며 공개/비공개 게시물을 작성할 수 있습니다.
```

### 기능

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


### 개발 환경
- 언어
    - TypeScript
- 프레임워크
    - Nest JS
- Database
    - PostgresSQL
- API Test
    - Postman

### API 명세서
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

