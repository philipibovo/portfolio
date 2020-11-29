import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Templates
import { TemplateMainComponent } from './templates/template-main/template-main.component';
import { TemplateCvComponent } from './templates/template-cv/template-cv.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateMainComponent,
  },
  {
    path: 'cv',
    component: TemplateCvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
