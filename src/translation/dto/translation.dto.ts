import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { TargetLanguageCode } from 'deepl-node';

export class TranslationDto {
  @IsNotEmpty()
  @IsArray()
  @IsString()
  value: string[];

  @IsNotEmpty()
  @IsString()
  targetLang: TargetLanguageCode;
}
