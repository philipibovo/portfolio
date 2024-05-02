import { Component, HostListener, OnInit } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

// Models
import { ArrowsModel } from '../../models/arrows-model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface IPhotoItem {
  active: boolean;
  alt: string;
  order: number;
  src: string;
}

interface IJob {
  hideInMobile: boolean;
  id: string;
  linkLabel?: {
    en: string;
    pt: string;
  };
  linkText?: {
    en: string;
    pt: string;
  };
  linkURL?: string;
  name: string;
  photos: IPhotoItem[];
  showGallery: boolean;
  thumbnails: IPhotoItem[];
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  private _jobsOriginalList: IJob[] = [
    {
      hideInMobile: false,
      id: `limoney`,
      linkLabel: { en: `Visit Limoney`, pt: `Acesse o Limoney` },
      linkText: { en: `Visit Limoney`, pt: `Acesse o Limoney` },
      linkURL: `https://limoney.app`,
      name: `Limoney`,
      photos: [
        {
          active: false,
          alt: `Job Limoney Print 1`,
          order: 0,
          src: `../../../assets/jobs/limoney/1.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 2`,
          order: 1,
          src: `../../../assets/jobs/limoney/2.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 3`,
          order: 2,
          src: `../../../assets/jobs/limoney/3.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 4`,
          order: 3,
          src: `../../../assets/jobs/limoney/4.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 5`,
          order: 4,
          src: `../../../assets/jobs/limoney/5.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 6`,
          order: 5,
          src: `../../../assets/jobs/limoney/6.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 7`,
          order: 6,
          src: `../../../assets/jobs/limoney/7.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 8`,
          order: 7,
          src: `../../../assets/jobs/limoney/8.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 9`,
          order: 8,
          src: `../../../assets/jobs/limoney/9.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 10`,
          order: 9,
          src: `../../../assets/jobs/limoney/10.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 11`,
          order: 10,
          src: `../../../assets/jobs/limoney/11.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 12`,
          order: 11,
          src: `../../../assets/jobs/limoney/12.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 13`,
          order: 12,
          src: `../../../assets/jobs/limoney/13.png`,
        },
        {
          active: false,
          alt: `Job Limoney Print 14`,
          order: 13,
          src: `../../../assets/jobs/limoney/14.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job Limoney Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/limoney/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/limoney/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/limoney/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/limoney/thumbnail-4.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 5`,
          order: 4,
          src: `../../../assets/jobs/limoney/thumbnail-5.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 6`,
          order: 5,
          src: `../../../assets/jobs/limoney/thumbnail-6.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 7`,
          order: 6,
          src: `../../../assets/jobs/limoney/thumbnail-7.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 8`,
          order: 7,
          src: `../../../assets/jobs/limoney/thumbnail-8.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 9`,
          order: 8,
          src: `../../../assets/jobs/limoney/thumbnail-9.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 10`,
          order: 9,
          src: `../../../assets/jobs/limoney/thumbnail-10.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 11`,
          order: 10,
          src: `../../../assets/jobs/limoney/thumbnail-11.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 12`,
          order: 11,
          src: `../../../assets/jobs/limoney/thumbnail-12.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 13`,
          order: 12,
          src: `../../../assets/jobs/limoney/thumbnail-13.png`,
        },
        {
          active: false,
          alt: `Job Limoney Thumbnail 14`,
          order: 13,
          src: `../../../assets/jobs/limoney/thumbnail-14.png`,
        },
      ],
    },
    {
      hideInMobile: false,
      id: `sistema-pamcard`,
      linkLabel: {
        en: `Visit Sistema Pamcard`,
        pt: `Acesse o Sistema Pamcard`,
      },
      linkText: { en: `Visit Sistema Pamcard`, pt: `Acesse o Sistema Pamcard` },
      linkURL: `https://www.roadcard.com.br/sistemapamcard/`,
      name: `Sistema Pamcard`,
      photos: [
        {
          active: false,
          alt: `Job Sistema Pamcard Print 1`,
          order: 0,
          src: `../../../assets/jobs/sistema-pamcard/1.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 2`,
          order: 1,
          src: `../../../assets/jobs/sistema-pamcard/2.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 3`,
          order: 2,
          src: `../../../assets/jobs/sistema-pamcard/3.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 4`,
          order: 3,
          src: `../../../assets/jobs/sistema-pamcard/4.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 5`,
          order: 4,
          src: `../../../assets/jobs/sistema-pamcard/5.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 6`,
          order: 5,
          src: `../../../assets/jobs/sistema-pamcard/6.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 7`,
          order: 6,
          src: `../../../assets/jobs/sistema-pamcard/7.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 8`,
          order: 7,
          src: `../../../assets/jobs/sistema-pamcard/8.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 9`,
          order: 8,
          src: `../../../assets/jobs/sistema-pamcard/9.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 10`,
          order: 9,
          src: `../../../assets/jobs/sistema-pamcard/10.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 11`,
          order: 10,
          src: `../../../assets/jobs/sistema-pamcard/11.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Print 12`,
          order: 11,
          src: `../../../assets/jobs/sistema-pamcard/12.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-4.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 5`,
          order: 4,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-5.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 6`,
          order: 5,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-6.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 7`,
          order: 6,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-7.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 8`,
          order: 7,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-8.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 9`,
          order: 8,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-9.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 10`,
          order: 9,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-10.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 11`,
          order: 10,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-11.png`,
        },
        {
          active: false,
          alt: `Job Sistema Pamcard Thumbnail 12`,
          order: 11,
          src: `../../../assets/jobs/sistema-pamcard/thumbnail-12.png`,
        },
      ],
    },
    {
      hideInMobile: true,
      id: `pamcard-monitor`,
      name: `Pamcard Monitor`,
      photos: [
        {
          active: false,
          alt: `Job Pamcard Monitor Print 1`,
          order: 0,
          src: `../../../assets/jobs/pamcard-monitor/1.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Print 2`,
          order: 1,
          src: `../../../assets/jobs/pamcard-monitor/2.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Print 3`,
          order: 2,
          src: `../../../assets/jobs/pamcard-monitor/3.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Print 4`,
          order: 3,
          src: `../../../assets/jobs/pamcard-monitor/4.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Print 5`,
          order: 4,
          src: `../../../assets/jobs/pamcard-monitor/5.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job Pamcard Monitor Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/pamcard-monitor/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/pamcard-monitor/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/pamcard-monitor/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/pamcard-monitor/thumbnail-4.png`,
        },
        {
          active: false,
          alt: `Job Pamcard Monitor Thumbnail 5`,
          order: 4,
          src: `../../../assets/jobs/pamcard-monitor/thumbnail-5.png`,
        },
      ],
    },
    {
      hideInMobile: false,
      id: `fisiopole`,
      linkLabel: {
        en: `Visit Fisiopole`,
        pt: `Acesse o Fisiopole`,
      },
      linkText: { en: `Visit Fisiopole`, pt: `Acesse o Fisiopole` },
      linkURL: `https://fisiopole.com.br/`,
      name: `Fisiopole Studio`,
      photos: [
        {
          active: false,
          alt: `Job Fisiopole Print 1`,
          order: 0,
          src: `../../../assets/jobs/fisiopole/1.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 2`,
          order: 1,
          src: `../../../assets/jobs/fisiopole/2.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 3`,
          order: 2,
          src: `../../../assets/jobs/fisiopole/3.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 4`,
          order: 3,
          src: `../../../assets/jobs/fisiopole/4.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 5`,
          order: 4,
          src: `../../../assets/jobs/fisiopole/5.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 6`,
          order: 5,
          src: `../../../assets/jobs/fisiopole/6.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 7`,
          order: 6,
          src: `../../../assets/jobs/fisiopole/7.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Print 8`,
          order: 7,
          src: `../../../assets/jobs/fisiopole/8.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/fisiopole/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/fisiopole/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/fisiopole/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/fisiopole/thumbnail-4.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 5`,
          order: 4,
          src: `../../../assets/jobs/fisiopole/thumbnail-5.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 6`,
          order: 5,
          src: `../../../assets/jobs/fisiopole/thumbnail-6.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 7`,
          order: 6,
          src: `../../../assets/jobs/fisiopole/thumbnail-7.png`,
        },
        {
          active: false,
          alt: `Job Fisiopole Thumbnail 8`,
          order: 7,
          src: `../../../assets/jobs/fisiopole/thumbnail-8.png`,
        },
      ],
    },
    {
      hideInMobile: true,
      id: `wedding`,
      name: `Wedding`,
      photos: [
        {
          active: false,
          alt: `Job Wedding Print 1`,
          order: 0,
          src: `../../../assets/jobs/wedding/1.png`,
        },
        {
          active: false,
          alt: `Job Wedding Print 2`,
          order: 1,
          src: `../../../assets/jobs/wedding/2.png`,
        },
        {
          active: false,
          alt: `Job Wedding Print 3`,
          order: 2,
          src: `../../../assets/jobs/wedding/3.png`,
        },
        {
          active: false,
          alt: `Job Wedding Print 4`,
          order: 3,
          src: `../../../assets/jobs/wedding/4.png`,
        },
        {
          active: false,
          alt: `Job Wedding Print 5`,
          order: 4,
          src: `../../../assets/jobs/wedding/5.png`,
        },
        {
          active: false,
          alt: `Job Wedding Print 6`,
          order: 5,
          src: `../../../assets/jobs/wedding/6.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job Wedding Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/wedding/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job Wedding Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/wedding/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job Wedding Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/wedding/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job Wedding Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/wedding/thumbnail-4.png`,
        },
        {
          active: false,
          alt: `Job Wedding Thumbnail 5`,
          order: 4,
          src: `../../../assets/jobs/wedding/thumbnail-5.png`,
        },
        {
          active: false,
          alt: `Job Wedding Thumbnail 6`,
          order: 5,
          src: `../../../assets/jobs/wedding/thumbnail-6.png`,
        },
      ],
    },
    {
      hideInMobile: true,
      id: `pmsv`,
      name: `Prefeitura Municipal de São Vicente`,
      photos: [
        {
          active: false,
          alt: `Job PMSV 1`,
          order: 0,
          src: `../../../assets/jobs/pmsv/1.png`,
        },
        {
          active: false,
          alt: `Job PMSV 2`,
          order: 1,
          src: `../../../assets/jobs/pmsv/2.png`,
        },
        {
          active: false,
          alt: `Job PMSV 3`,
          order: 2,
          src: `../../../assets/jobs/pmsv/3.png`,
        },
        {
          active: false,
          alt: `Job PMSV 4`,
          order: 3,
          src: `../../../assets/jobs/pmsv/4.png`,
        },
        {
          active: false,
          alt: `Job PMSV 5`,
          order: 4,
          src: `../../../assets/jobs/pmsv/5.png`,
        },
        {
          active: false,
          alt: `Job PMSV 6`,
          order: 5,
          src: `../../../assets/jobs/pmsv/6.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job PMSV Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/pmsv/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job PMSV Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/pmsv/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job PMSV Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/pmsv/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job PMSV Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/pmsv/thumbnail-4.png`,
        },
        {
          active: false,
          alt: `Job PMSV Thumbnail 5`,
          order: 4,
          src: `../../../assets/jobs/pmsv/thumbnail-5.png`,
        },
        {
          active: false,
          alt: `Job PMSV Thumbnail 6`,
          order: 5,
          src: `../../../assets/jobs/pmsv/thumbnail-6.png`,
        },
      ],
    },
    {
      hideInMobile: true,
      id: `interface-eng`,
      name: `Interface Engenharia`,
      photos: [
        {
          active: false,
          alt: `Job Interface Engenharia 1`,
          order: 0,
          src: `../../../assets/jobs/interface-eng/1.png`,
        },
        {
          active: false,
          alt: `Job Interface Engenharia 2`,
          order: 1,
          src: `../../../assets/jobs/interface-eng/2.png`,
        },
        {
          active: false,
          alt: `Job Interface Engenharia 3`,
          order: 2,
          src: `../../../assets/jobs/interface-eng/3.png`,
        },
        {
          active: false,
          alt: `Job Interface Engenharia 4`,
          order: 3,
          src: `../../../assets/jobs/interface-eng/4.png`,
        },
      ],
      showGallery: false,
      thumbnails: [
        {
          active: false,
          alt: `Job Interface Engenharia Thumbnail 1`,
          order: 0,
          src: `../../../assets/jobs/interface-eng/thumbnail-1.png`,
        },
        {
          active: false,
          alt: `Job Interface Engenharia Thumbnail 2`,
          order: 1,
          src: `../../../assets/jobs/interface-eng/thumbnail-2.png`,
        },
        {
          active: false,
          alt: `Job Interface Engenharia Thumbnail 3`,
          order: 2,
          src: `../../../assets/jobs/interface-eng/thumbnail-3.png`,
        },
        {
          active: false,
          alt: `Job Interface Engenharia Thumbnail 4`,
          order: 3,
          src: `../../../assets/jobs/interface-eng/thumbnail-4.png`,
        },
      ],
    },
  ];
  private _windowResizeEvent$: Subject<any> = new Subject<any>();
  public arrows: ArrowsModel = new ArrowsModel();
  public galleryItemCurrent = 1;
  public galleryArrowLeftDisabled = false;
  public galleryArrowRightDisabled = false;
  public galleryListArrowLeftDisabled = false;
  public galleryListArrowRightDisabled = false;
  public jobs: IJob[] = [];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._windowResizeEvent$.next(event);
  }

  constructor(public global: Global, public scripts: ScriptGeneral) {
    this.defineFinalJobsList();
  }

  ngOnInit(): void {
    this._windowResizeEvent$.pipe(debounceTime(100)).subscribe(() => {
      this.defineFinalJobsList();
    });

    if (this.global.isDesktop) {
      this.showArrows();
    }
  }
  // end ngOnInit(): void

  defineFinalJobsList(): void {
    this.jobs = [];

    if (this.global.isDesktop) {
      this.jobs = this._jobsOriginalList;
    }

    if (this.global.isMobile) {
      this._jobsOriginalList.forEach((element) => {
        if (!element.hideInMobile) {
          this.jobs.push(element);
        }
      });
    }
  }
  // end defineFinalJobsList(): void

  showArrows = () => {
    const wrapElement: HTMLElement = document.querySelector(
      '#list-jobs'
    ) as HTMLElement;
    const qtdItems: number = this.jobs.length;
    const sizeItem: number = 300;
    const sizeMarginItem: number = 20;

    if (
      qtdItems * (sizeItem + sizeMarginItem * 2) >
      wrapElement.getBoundingClientRect().width
    ) {
      this.arrows.show = true;
      this.arrows.left = false;
      this.arrows.right = true;
      wrapElement.style.justifyContent = 'flex-start';
    } else {
      this.arrows.show = false;
      this.arrows.left = false;
      this.arrows.right = false;
      wrapElement.style.justifyContent = 'center';
    }
  };
  // end showArrows = ()

  scrollHorizontalByClick = (event: Event, direction: string) => {
    let element = event.target as HTMLElement;

    if (!element.classList.contains('disabled')) {
      if (direction === 'left') {
        this.scripts
          .setScrollBy('list-jobs', 'left', 300, 45)
          .then((result) => {
            this.arrows = result;
          });
      } else {
        this.scripts
          .setScrollBy('list-jobs', 'right', 300, 45)
          .then((result) => {
            this.arrows = result;
          });
      }
    }
    // end if (!element.classList.contains('disabled'))
  };
  // end scrollHorizontalByClick = (event: Event, direction: string)

  showJobGallery = (id: string) => {
    const job: IJob = this.jobs.filter((c) => c.id === id)[0];
    const listWidth: number = window.innerWidth - 120;
    const listItemWidth: number = 120;
    const listItemQtd: number = job.thumbnails.length;

    job.showGallery = true;
    job.photos[0].active = true;
    job.thumbnails[0].active = true;

    // MAIN ARROWS
    this.galleryArrowLeftDisabled = true;
    if (job.photos.length <= 1) {
      this.galleryArrowRightDisabled = true;
    }
    // END MAIN ARROWS

    // LIST ARROWS
    // List arrows
    if (listItemQtd * listItemWidth <= listWidth) {
      this.galleryListArrowLeftDisabled = true;
      this.galleryListArrowRightDisabled = true;

      document
        .querySelectorAll('#jobs .gallery > .bottom > .list')
        .forEach((element) => {
          element as HTMLElement;
          document.getElementById(element.id)!.style.justifyContent = 'center';
        });
    } else {
      this.galleryListArrowLeftDisabled = true;
      this.galleryListArrowRightDisabled = false;

      document
        .querySelectorAll('#jobs .gallery > .bottom > .list')
        .forEach((element) => {
          element as HTMLElement;
          document.getElementById(element.id)!.style.justifyContent =
            'flex-start';
        });
    }
    // END LIST ARROWS
  };
  // end showJobGallery = (id: string)

  activeJobItemGallery = (id: string, position: number) => {
    if (this.jobs.filter((c) => c.id === id)[0].thumbnails[position].active) {
      return;
    }

    this.jobs
      .filter((c) => c.id === id)[0]
      .photos.forEach((photo: IPhotoItem, index: number) => {
        if (index === position) {
          photo.active = true;
        } else {
          photo.active = false;
        }
      });

    this.jobs
      .filter((c) => c.id === id)[0]
      .thumbnails.forEach((thumbnail: IPhotoItem, index: number) => {
        if (index === position) {
          thumbnail.active = true;
        } else {
          thumbnail.active = false;
        }
      });

    if (this.jobs.filter((c) => c.id === id)[0].photos.length > 1) {
      if (
        this.jobs.filter((c) => c.id === id)[0].photos.length - 1 ===
        position
      ) {
        this.galleryArrowLeftDisabled = false;
        this.galleryArrowRightDisabled = true;
      } else {
        if (position === 0) {
          this.galleryArrowLeftDisabled = true;
          this.galleryArrowRightDisabled = false;
        } else {
          this.galleryArrowLeftDisabled = false;
          this.galleryArrowRightDisabled = false;
        }
      }
    }
  };
  // end activeJobItemGallery = (id: string)

  showPrevNextJobItemGallery = (e: any, id: string, action: string) => {
    if (e.currentTarget.classList.contains('disabled')) {
      return;
    }

    let position: number | null = null;

    this.jobs
      .filter((c) => c.id === id)[0]
      .photos.forEach((photo: IPhotoItem) => {
        if (photo.active) {
          if (action === `next`) {
            position = photo.order + 1;
          }

          if (action === `prev`) {
            position = photo.order - 1;
          }
        }

        photo.active = false;
      });

    this.jobs
      .filter((c) => c.id === id)[0]
      .thumbnails.forEach((thumbnail: IPhotoItem) => {
        thumbnail.active = false;
      });

    if (position !== null) {
      this.jobs.filter((c) => c.id === id)[0].photos[position].active = true;
      this.jobs.filter((c) => c.id === id)[0].thumbnails[position].active =
        true;
    }

    if (this.jobs.filter((c) => c.id === id)[0].photos.length > 1) {
      if (
        this.jobs.filter((c) => c.id === id)[0].photos.length - 1 ===
        position
      ) {
        this.galleryArrowLeftDisabled = false;
        this.galleryArrowRightDisabled = true;
      } else {
        if (position === 0) {
          this.galleryArrowLeftDisabled = true;
          this.galleryArrowRightDisabled = false;
        } else {
          this.galleryArrowLeftDisabled = false;
          this.galleryArrowRightDisabled = false;
        }
      }
    }
  };
  // end showPrevNextJobItemGallery = (e: any, id: string, action: string)

  scrollHorizontalGalleryList = (
    event: Event,
    direction: string,
    listId: string
  ) => {
    const element = event.currentTarget as HTMLElement;

    if (!element.classList.contains('disabled')) {
      this.scripts.setScrollBy(listId, direction, 100, 20).then((result) => {
        if (result.left) {
          this.galleryListArrowLeftDisabled = false;
        } else {
          this.galleryListArrowLeftDisabled = true;
        }

        if (result.right) {
          this.galleryListArrowRightDisabled = false;
        } else {
          this.galleryListArrowRightDisabled = true;
        }
      });
    }
    // end if (!element.classList.contains('disabled'))
  };
  // end scrollHorizontalGalleryList = (event: Event, direction: string)
}
