import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Scripts
import { Global } from './scripts/global';
import { ScriptGeneral } from './scripts/script-general';

// Templates
import { TemplateMainComponent } from './templates/template-main/template-main.component';

// Components
import { ToolsComponent } from './pages/tools/tools.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ClientsComponent } from './pages/clients/clients.component';

// APP
import { AppComponent } from './app.component';
import { TemplateCvComponent } from './templates/template-cv/template-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateMainComponent,
    ToolsComponent,
    ProjectsComponent,
    JobsComponent,
    ClientsComponent,
    TemplateCvComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, Global, ScriptGeneral],
  bootstrap: [AppComponent],
})
export class AppModule {}
