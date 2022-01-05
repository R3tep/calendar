import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) =>
    document.write(
      `Compilation Error, <a href="mailto:pleroux33@gmail.com">send an email</a> with this informations <pre>${err}</pre>`
    )
  );
