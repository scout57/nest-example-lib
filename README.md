# Пример отдельного NestJS пакета
1. Скопировать этот проект

2. Написать по-возможности независимый пакет

3. Собрать его

```
npm i
npm run build
```

4. Запушить папку dist в git

```bash
git commit -m "msg" 
git push
```

5. Добавить зависимость в клиентском проекте


----

# Регистрация модуля в клиентском коде

```js
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoutModule } from '@scout55/nestjs-lib-sample'

@Module({
  imports: [ScoutModule.register({
    field_one: 'OK',
    field_two: 'rnd',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

# Использование сервиса в клиентском приложении

```js
import { Injectable } from '@nestjs/common';
import { ScoutService } from '@scout55/nestjs-lib-sample';

@Injectable()
export class AppService {
  constructor(private readonly scoutService: ScoutService) 
  {}

  async getAnswer(): Promise<boolean> {
    return await this.scoutService.IsOK()
  }
}

```
