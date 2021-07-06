import { Component, OnInit } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

// Models
import { ArrowsModel } from '../../models/arrows-model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public arrows: ArrowsModel = new ArrowsModel();
  public galleryItemCurrent = 1;
  public galleryArrowLeftDisabled = false;
  public galleryArrowRightDisabled = false;
  public galleryListArrowLeftDisabled = false;
  public galleryListArrowRightDisabled = false;

  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {
    const wrapElement = document.querySelector('#list-jobs') as HTMLElement;
    const qtdItems = document.querySelectorAll('#list-jobs > .item').length;
    const sizeItem = document.querySelector('#list-jobs > .item')!.scrollWidth;
    const sizeMarginItem = 20;

    console.log(qtdItems * (sizeItem + sizeMarginItem * 2));
    console.log(qtdItems);
    // console.log(wrapElement.getBoundingClientRect().width);
    // console.log(window.innerWidth);

    if (
      qtdItems * (sizeItem + sizeMarginItem * 2) >
      wrapElement.getBoundingClientRect().width
    ) {
      wrapElement.style.justifyContent = 'flex-start';
      this.arrows.show = true;
      this.arrows.left = false;
      this.arrows.right = true;
    } else {
      wrapElement.style.justifyContent = 'center';
      this.arrows.show = false;
      this.arrows.left = false;
      this.arrows.right = false;
    }
  }
  // end ngOnInit(): void

  scrollHorizontalByClick = (event: Event, direction: string) => {
    let element = event.target as HTMLElement;

    if (!element.classList.contains('disabled')) {
      if (direction === 'left') {
        this.scripts
          .setScrollBy('list-jobs', 'left', 300, 45)
          .then((result) => {
            this.arrows = result;
            console.log(result);
            // console.log(result);
          });
      } else {
        this.scripts
          .setScrollBy('list-jobs', 'right', 300, 45)
          .then((result) => {
            this.arrows = result;
            console.log(result);
          });
      }
    }
    // end if (!element.classList.contains('disabled'))
  };
  // end scrollHorizontalByClick = (event: Event, direction: string)

  showHideJobGallery = (id: string) => {
    const listWidth = window.innerWidth - 120;
    const listItemWidth = 120;
    const listItemQtd = document.querySelectorAll(
      `#jobs .gallery#${id} > .bottom > .list > .item`
    ).length;

    if (document.querySelector(`#${id}`)?.classList.contains('show')) {
      document.querySelector(`#${id}`)?.classList.remove('show');

      setTimeout(() => {
        this.galleryItemCurrent = 1;
      }, 500);
    } else {
      document
        .querySelectorAll(`#jobs .gallery#${id} > .main > .item`)
        .forEach((element, index) => {
          if (index === 0) {
            console.log(element);
            if (!element.classList.contains('show')) {
              element.classList.add('show');
            }
          } else {
            element.classList.remove('show');
          }
        });

      this.galleryItemCurrent = 1;

      // Items arrows
      this.galleryArrowLeftDisabled = true;

      if (
        document.querySelectorAll('#jobs .gallery > .main > .item').length <= 1
      ) {
        this.galleryArrowRightDisabled = true;
      }

      // List arrows
      if (listItemQtd * listItemWidth <= listWidth) {
        this.galleryListArrowLeftDisabled = true;
        this.galleryListArrowRightDisabled = true;

        document
          .querySelectorAll('#jobs .gallery > .bottom > .list')
          .forEach((element) => {
            element as HTMLElement;
            document.getElementById(element.id)!.style.justifyContent =
              'center';
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

      document.querySelector(`#${id}`)?.classList.add('show');
    }
  };
  // end showHideJobGallery = (id: string)

  showJobItemGallery = (id: string, position: number) => {
    if (!document.querySelector(`#${id}`)?.classList.contains('show')) {
      document
        .querySelectorAll(`#jobs .gallery > .main > .item`)
        .forEach((element) => {
          element.classList.remove('show');
        });

      if (
        document.querySelectorAll('#jobs .gallery > .main > .item').length <= 1
      ) {
        this.galleryArrowLeftDisabled = true;
        this.galleryArrowRightDisabled = true;
      } else {
        if (position === 1) {
          this.galleryArrowLeftDisabled = true;
          this.galleryArrowRightDisabled = false;
        } else if (
          position ===
          document.querySelectorAll('#jobs .gallery > .main > .item').length
        ) {
          this.galleryArrowLeftDisabled = false;
          this.galleryArrowRightDisabled = true;
        } else {
          this.galleryArrowLeftDisabled = false;
          this.galleryArrowRightDisabled = false;
        }
      }

      setTimeout(() => {
        this.galleryItemCurrent = position;
        document.querySelector(`#${id}`)?.classList.add('show');
      }, 300);
    }
  };
  // end showHideJobItemGallery = (id: string)

  showPrevNextJobItemGallery = (e: any, prefix: string, action: string) => {
    if (e.currentTarget.classList.contains('disabled')) {
      return;
    }

    document
      .querySelectorAll('#jobs .gallery > .main > .item')
      .forEach((element) => {
        element.classList.remove('show');
      });

    switch (action) {
      case 'prev':
        this.galleryItemCurrent--;

        setTimeout(() => {
          document
            .querySelector(`#${prefix}${this.galleryItemCurrent}`)
            ?.classList.add('show');
        }, 300);
        break;

      case 'next':
        this.galleryItemCurrent++;

        setTimeout(() => {
          document
            .querySelector(`#${prefix}${this.galleryItemCurrent}`)
            ?.classList.add('show');
        }, 300);
        break;
    }

    if (
      document.querySelectorAll('#jobs .gallery > .main > .item').length <= 1
    ) {
      this.galleryArrowLeftDisabled = true;
      this.galleryArrowRightDisabled = true;
    } else {
      if (this.galleryItemCurrent === 1) {
        this.galleryArrowLeftDisabled = true;
        this.galleryArrowRightDisabled = false;
      } else if (
        this.galleryItemCurrent ===
        document.querySelectorAll('#jobs .gallery > .main > .item').length
      ) {
        this.galleryArrowLeftDisabled = false;
        this.galleryArrowRightDisabled = true;
      } else {
        this.galleryArrowLeftDisabled = false;
        this.galleryArrowRightDisabled = false;
      }
    }
  };

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
