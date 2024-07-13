import { Injectable } from '@nestjs/common';
import * as deepl from 'deepl-node';
import { TranslationDto } from './dto/translation.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TranslationService {
  constructor(private configService: ConfigService) {}

  async translationValue(translationDto: TranslationDto) {
    const translator = new deepl.Translator(
      this.configService.get<string>('DEEPL_AUTH_KEY'),
    );

    try {
      const result = await translator.translateText(
        translationDto.value,
        null,
        translationDto.targetLang,
      );

      return result;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}
