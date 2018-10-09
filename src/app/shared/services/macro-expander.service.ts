import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MacroExpander {

  constructor() {
  }

  expand(content: string, variables: { id: string }): string {
    return content.replace(/\$MFID\$/g, `${variables.id}`);
  }
}
