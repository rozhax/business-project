import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [SalesModule, InventoryModule],
})
export class AppModule {}
