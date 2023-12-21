import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext){
    const req = GqlExecutionContext.create(context).getContext().req;
    const { headers } = req;
    const apiKey = headers['api-key'];
    return apiKey === process.env.API_KEY;
  }
}
