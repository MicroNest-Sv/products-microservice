import { Module } from '@nestjs/common';

import { ProductsModule } from './products';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
