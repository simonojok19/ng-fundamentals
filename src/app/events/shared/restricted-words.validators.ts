import {FormControl} from '@angular/forms';

export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) {
      return null;
    }
    const invalideWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w != null);
    return invalideWords && invalideWords.length > 0 ? {restrictedWords: invalideWords.join(', ')} : null;
  };
}
