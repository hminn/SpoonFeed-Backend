import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { PolicyModule } from './policy/policy.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CustomerServiceModule } from './customer-service/customer-service.module';

export default [
  AuthModule,
  CommentModule,
  PolicyModule,
  PostModule,
  UserModule,
  CustomerServiceModule,
];
