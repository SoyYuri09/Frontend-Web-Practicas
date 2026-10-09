// NUEVO (Paso 3): la estrategia de Passport que lee y verifica el token.
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PayloadJwt } from './dominio/usuarios';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, 
      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  validate(payload: PayloadJwt): PayloadJwt {
    return payload;
  }
}
