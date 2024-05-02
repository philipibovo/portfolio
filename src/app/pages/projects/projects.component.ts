import { Component, OnInit } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

interface project {
  descEN: string;
  descPT: string;
  hideInMobile: boolean;
  id: string;
  imgURL: string;
  linkLabelEN: string;
  linkLabelPT: string;
  linkTextEN: string;
  linkTextPT: string;
  linkURL: string;
  name: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: project[] = [
    {
      descEN: `Personal financial management assistance app`,
      descPT: `App de auxílio de gestão financeira pessoal`,
      hideInMobile: false,
      id: `project-limoney`,
      imgURL: `../../../assets/projects/limoney.png`,
      linkLabelEN: `Visit Limoney`,
      linkLabelPT: `Saiba mais sobre Limoney`,
      linkTextEN: `Visit`,
      linkTextPT: `Acesse`,
      linkURL: `https://limoney.app`,
      name: `Limoney`,
      showDetails: false,
    },
    {
      descEN: `ngx-flexbox provides angular directives for layout, using Flexbox CSS`,
      descPT: `ngx-flexbox fornece diretivas angular para layout, usando Flexbox CSS`,
      hideInMobile: false,
      id: `project-ngx-flexbox`,
      imgURL: `../../../assets/projects/ngx-flexbox.png`,
      linkLabelEN: `Visit ngx-flexbox demo`,
      linkLabelPT: `Saiba mais sobre ngx-flexbox`,
      linkTextEN: `Visit`,
      linkTextPT: `Ver mais`,
      linkURL: `https://ngx-flexbox.web.app/`,
      name: `ngx-flexbox`,
      showDetails: false,
    },
    {
      descEN: `Alerts, completely customizable and easy to implement`,
      descPT: `Alertas, altamente customizável e fácil de implementar`,
      hideInMobile: false,
      id: `project-ngx-alert-message`,
      imgURL: `../../../assets/projects/ngx-alert-message.svg`,
      linkLabelEN: `Visit ngx-alert-message demo`,
      linkLabelPT: `Saiba mais sobre ngx-alert-message`,
      linkTextEN: `Visit`,
      linkTextPT: `Ver mais`,
      linkURL: `https://ngx-alert-message.web.app/`,
      name: `ngx-alert-message`,
      showDetails: false,
    },
    {
      descEN: `CSS / JQuery library for creating responsive layouts based on rows and columns`,
      descPT: `Biblioteca CSS/JQuery para criar layouts responsívos baseados em linhas e colunas`,
      hideInMobile: true,
      id: `project-pompeijs`,
      imgURL: `../../../assets/projects/pompeijs.png`,
      linkLabelEN: `Visit PompeiJS`,
      linkLabelPT: `Saiba mais sobre PompeiJS`,
      linkTextEN: `Visit`,
      linkTextPT: `Ver mais`,
      linkURL: `https://philipi.bovo.me/pompeijs/`,
      name: `PompeiJS`,
      showDetails: false,
    },
    {
      descEN: `CSS / JQuery library to facilitate the use of forms on pages HTML`,
      descPT: `Biblioteca CSS/JQuery para facilitar o uso de formulários em páginas HTML`,
      hideInMobile: true,
      id: `project-tivolijs`,
      imgURL: `../../../assets/projects/tivolijs.png`,
      linkLabelEN: `Visit TivoliJS`,
      linkLabelPT: `Saiba mais sobre TivoliJS`,
      linkTextEN: `Visit`,
      linkTextPT: `Ver mais`,
      linkURL: `https://philipi.bovo.me/tivolijs/`,
      name: `TivoliJS`,
      showDetails: false,
    },
    {
      descEN: `CSS / JQuery photo gallery elegant and easy to use`,
      descPT: `Galeria de fotos CSS/JQuery elegante e fácil de usar`,
      hideInMobile: false,
      id: `project-navonajs`,
      imgURL: `../../../assets/projects/navonajs.png`,
      linkLabelEN: `Visit NavonaJS`,
      linkLabelPT: `Saiba mais sobre NavonaJS`,
      linkTextEN: `Visit`,
      linkTextPT: `Ver mais`,
      linkURL: `https://philipi.bovo.me/navonajs/`,
      name: `NavonaJS`,
      showDetails: false,
    },
  ];

  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {}

  hideItemDetail(event: Event, itemId: String): void {
    if (this.global.isMobile) {
      return;
    }

    event.stopPropagation();

    const el: HTMLElement = event.target as HTMLElement;

    if (el.classList.contains(`wrap`)) {
      this.projects.filter((c) => c.id === itemId)[0].showDetails = false;
    }
  }
  // end hideItemDetail(): void
}
