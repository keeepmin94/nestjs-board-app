# nestjs-board-app

# ๐ ๋ชฉ์ฐจ 
 - [์๊ฐ](#์๊ฐ) 
 - [๊ธฐ๋ฅ](#๊ธฐ๋ฅ)
 - [๊ฐ๋ฐ ํ๊ฒฝ](#๊ฐ๋ฐ-ํ๊ฒฝ)
 - [Api ๋ช์ธ์](#api-๋ช์ธ์)
        
# ์๊ฐ 
 - ํ์๊ฐ์๊ณผ ๋ก๊ทธ์ธ์ผ๋ก ์ธ์ฆ ํ ๊ฒ์๋ฌผ CRUD ํ๋ ๊ฐ๋จํ ๊ฒ์ํ

```
๐ก board-app
   ๋ก๊ทธ์ธ ํ jwt์ธ์ฆ ๋ฐฉ์์ผ๋ก ๊ฒ์๋ฌผ์ ์์ฑ, ์กฐํ, ์ญ์ , ์์  ๋ฑ์ ํ  ์
   ์์ผ๋ฉฐ ๊ณต๊ฐ/๋น๊ณต๊ฐ ๊ฒ์๋ฌผ์ ์์ฑํ  ์ ์์ต๋๋ค.
```

### ๊ธฐ๋ฅ

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


### ๊ฐ๋ฐ ํ๊ฒฝ
- ์ธ์ด
    - TypeScript
- ํ๋ ์์ํฌ
    - Nest JS
- Database
    - PostgresSQL
- API Test
    - Postman

### API ๋ช์ธ์
---
๋ก๊ทธ์ธ ๊ด๋ จ
```
/auth/signin        [Post]        // @Description  ๋ก๊ทธ์ธ
/auth/signup        [Post]        // @Description  ํ์๊ฐ์ 
```

๊ฒ์๋ฌผ ๊ด๋ จ
```
/boards         	[GET]        // @Description  (๋ก๊ทธ์ธํ ์ ์ ์)๋ชจ๋  ๊ฒ์๋ฌผ ๊ฐ์ ธ์ค๊ธฐ
/boards/:id         [GET]       // @Description  ํน์  id์ ๊ฒ์๋ฌผ ๊ฐ์ ธ์ค๊ธฐ
/boards             [POST]      // @Description ๊ฒ์๋ฌผ ์์ฑ
/boards/:id  		[DELETE]    // @Description (๋ก๊ทธ์ธํ ์ ์ ์)ํน์  id์ ๊ฒ์๋ฌผ ์ญ์ 
/boards/:id/status  [PATCH]     // @Description ํน์  ๊ฒ์๋ฌผ ์์ 
``` 

