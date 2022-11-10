import { Module, DynamicModule } from '@nestjs/common';
import { ScoutService } from './scout.service';
import { ScoutOptionsDto } from './dto/scout-options.dto';

@Module({})
export class ScoutModule {
  static register(options: ScoutOptionsDto) : DynamicModule {
    return {
      module: ScoutModule,
      providers: [
        {
          provide: 'SCOUT_OPTIONS',
          useValue: options,
        },
        ScoutService
      ],
      exports: [ScoutService],
    }
  }
}
