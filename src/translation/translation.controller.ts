import { Controller, Post, Body, Get } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationDto } from './dto/translation.dto';

@Controller()
export class TranslationController {
  constructor(private translationService: TranslationService) {}

  @Post('/translation')
  translationValue(@Body() translationDto: TranslationDto) {
    return this.translationService.translationValue(translationDto);
  }

  @Get('/translation')
  getHello() {
    console.log('s');

    return 'hello';
  }
}
