import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as config from 'config';

@Injectable()
// Nest.js can inject it anywhere this service is needed
// via its Dependency injection system
export class JwtStrategy extends PassportStrategy(Strategy) {
  //The class extends the PassportStrategy class definded by @nestjs/passport package
  // you're passing the JWT Strategy definded by the passport-jwt Node.js package.
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {
    // passes two important options
    super({
      secretOrKey: process.env.JWT_SECRET || config.get('jwt.secret'),
      // This configures the key that JWT Strategy will use
      // to decrypt the JWT token in order to validate it
      // and access its payload
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // This configures the Strategy (import from passport-jwt package)
      // to look for the JWT in the Authorization Header of the current Request
      // passed over as a Bearer tiken
    });
  }

  // 위에서 토큰이 유효하지 체크가 되면 validate 메소드에서 payload에 있는 유저이름이 데이터베이스에서
  // 있는 유저인지 확인 후 있다면 유저 객체를 return값으로 던져줍니다.
  // return 값은 @useGuards(AuthGuard())를 이용한 모든 요청의 Request Object에 들어갑니다.
  async validate(payload) {
    const { username } = payload;
    const user: User = await User.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
