import { Injectable } from '@angular/core';

// Variables
import { Global } from './global';

// Models
import { ArrowsModel } from '../models/arrows-model';

@Injectable()
export class ScriptGeneral {
  public arrows: ArrowsModel = new ArrowsModel();

  constructor(public global: Global) {}

  start = async (windowHeight: number, offSetTop: number) => {
    // Set Device / Orientation
    await this.resizedWindow();

    // Get and set lang
    this.getLang();

    // Set actual section
    if (offSetTop >= 0 && offSetTop < windowHeight - 2) {
      this.global.currentSection = 0;
      this.activeSection(0);
      document
        .querySelector('#about .content > .social')
        ?.classList.remove('vFixed');
    } else if (
      offSetTop >= windowHeight - 2 &&
      offSetTop < windowHeight * 2 - 2
    ) {
      this.global.currentSection = 1;
      this.activeSection(1);
      document
        .querySelector('#about .content > .social')
        ?.classList.add('vFixed');
    } else if (
      offSetTop >= windowHeight * 2 - 2 &&
      offSetTop < windowHeight * 3 - 2
    ) {
      this.global.currentSection = 2;
      this.activeSection(2);
      document
        .querySelector('#about .content > .social')
        ?.classList.add('vFixed');
    } else if (
      offSetTop >= windowHeight * 3 - 2 &&
      offSetTop < windowHeight * 4 - 2
    ) {
      this.global.currentSection = 3;
      this.activeSection(3);
      document
        .querySelector('#about .content > .social')
        ?.classList.add('vFixed2');
    } else {
      this.global.currentSection = 4;
      this.activeSection(4);
      document
        .querySelector('#about .content > .social')
        ?.classList.add('vFixed');
    }
    // end Set actual section
  };
  // end start = async (windowHeight: number, offSetTop: number)

  resizedWindow = async (): Promise<boolean> => {
    this.global.currentViewHeight = window.innerHeight;

    // Verify device
    await this.verifyDevice();

    // Verify Screen Orientation
    await this.verifyScreenOrientation();

    return true;
  };
  // end resizedWindow = async ()

  verifyDevice = (): boolean => {
    if (window.innerWidth < 969) {
      this.global.isMobile = true;
      this.global.isDesktop = false;
      return true;
    } else {
      this.global.isMobile = false;
      this.global.isDesktop = true;
      return true;
    }
  };
  // end verifyDevice = (): boolean

  verifyScreenOrientation = (): boolean => {
    if (window.innerWidth > window.innerHeight) {
      this.global.isLandscape = true;
      this.global.isPortrait = false;
      return true;
    } else {
      this.global.isLandscape = false;
      this.global.isPortrait = true;
      return true;
    }
  };
  // end verifyScreenOrientation = (): boolean

  openCvNewTab = () => {
    window.open(`${window.location.href}cv`, '_blank');
  };
  // end openCvNewTab = ()

  openNewTab = (url: string) => {
    window.open(url, '_blank');
  };
  // end openNewTab = (url: string)

  activeSection = (sectionNumber: number) => {
    let diffZero: boolean;

    document.querySelectorAll('section').forEach((element) => {
      element.classList.remove('active');
    });

    document
      .querySelector('#about .content > .social')
      ?.classList.remove('vFixed');

    document
      .querySelector('#about .content > .social')
      ?.classList.remove('vFixed2');

    localStorage.setItem('pbSectionAtive', `${sectionNumber}`);

    switch (sectionNumber) {
      case 0:
        document.querySelector(`#about`)?.classList.add('active');
        this.global.arrowUpTheme = 'light';
        this.global.arrowDownTheme = 'light';
        this.global.socialIconTheme = 'light';
        this.global.isFirstSection = true;
        this.global.isLastSection = false;
        diffZero = false;
        break;

      case 1:
        document.querySelector(`#tools`)?.classList.add('active');
        this.global.arrowUpTheme = 'light';
        this.global.arrowDownTheme = 'light';

        switch (this.global.currentTheme) {
          case `theme-high-contrast`:
            this.global.socialIconTheme = 'light';
            break;

          default:
            this.global.socialIconTheme = 'dark';
            break;
        }

        this.global.isFirstSection = false;
        this.global.isLastSection = false;
        diffZero = true;

        document
          .querySelector('#about .content > .social')
          ?.classList.add('vFixed');

        break;

      case 2:
        document.querySelector(`#projects`)?.classList.add('active');
        this.global.arrowUpTheme = 'light';
        this.global.arrowDownTheme = 'light';

        switch (this.global.currentTheme) {
          case `theme-high-contrast`:
            this.global.socialIconTheme = 'light';
            break;

          default:
            this.global.socialIconTheme = 'dark';
            break;
        }

        this.global.isFirstSection = false;
        this.global.isLastSection = false;
        diffZero = true;

        document
          .querySelector('#about .content > .social')
          ?.classList.add('vFixed');

        break;

      case 3:
        document.querySelector(`#jobs`)?.classList.add('active');
        this.global.arrowUpTheme = 'light';
        this.global.arrowDownTheme = 'light';
        this.global.socialIconTheme = 'light';
        this.global.isFirstSection = false;
        this.global.isLastSection = false;
        diffZero = true;

        document
          .querySelector('#about .content > .social')
          ?.classList.add('vFixed2');

        const wrapElement = document.querySelector('#list-jobs') as HTMLElement;
        const qtdItems = document.querySelectorAll('#list-jobs > .item').length;
        setTimeout(() => {
          const sizeItem =
            document.querySelector('#list-jobs > .item')!.scrollWidth;
          const sizeMarginItem = 20;

          if (
            qtdItems * (sizeItem + sizeMarginItem * 2) >
            wrapElement.getBoundingClientRect().width
          ) {
            wrapElement.style.justifyContent = 'flex-start';
          } else {
            wrapElement.style.justifyContent = 'center';
          }
        }, 10);

        break;

      case 4:
        document.querySelector(`#clients`)?.classList.add('active');
        this.global.arrowUpTheme = 'light';
        this.global.arrowDownTheme = 'light';
        this.global.socialIconTheme = 'light';
        this.global.isFirstSection = false;
        this.global.isLastSection = true;
        diffZero = true;

        document
          .querySelector('#about .content > .social')
          ?.classList.add('vFixed');

        break;

      default:
        document.querySelector(`#about`)?.classList.add('active');
        this.global.arrowUpTheme = 'light';
        this.global.arrowDownTheme = 'light';
        this.global.socialIconTheme = 'light';
        this.global.isFirstSection = true;
        this.global.isLastSection = false;
        diffZero = false;
        break;
    }

    if (diffZero) {
      document.querySelectorAll('.social-icon').forEach((element) => {
        element.classList.remove('hint--bottom');
        element.classList.add('hint--left');
      });
    } else {
      document.querySelectorAll('.social-icon').forEach((element) => {
        element.classList.remove('hint--left');
        element.classList.add('hint--bottom');
      });
    }
  };
  // end activeSection = (sectionNumber: number)

  movePage = (
    direction: string,
    windowHeight: number,
    totalSections: number
  ) => {
    switch (direction) {
      case 'down':
        if (this.global.currentSection < totalSections - 1) {
          this.global.currentSection++;
        }
        break;

      case 'up':
        if (this.global.currentSection > 0) {
          this.global.currentSection--;
        }
        break;

      case 'home':
        this.global.currentSection = 0;
        break;

      case 'end':
        this.global.currentSection = totalSections - 1;
        break;
    }

    window.scrollTo(0, windowHeight * this.global.currentSection);

    this.activeSection(this.global.currentSection);
  };
  // end movePage = (direction: string, windowHeight: number, totalSections: number)

  getLang = () => {
    const storageLang = localStorage.getItem('pbLang');

    if (storageLang) {
      this.setLang(storageLang);
    } else {
      this.setLang('pt');
    }
  };
  // end getLang = ()

  setLang = (lang: string) => {
    this.global.lang = lang;
    localStorage.setItem('pbLang', lang);

    let localLang: string = `pt-br`;

    switch (lang) {
      case `en`:
        localLang = `en`;
        break;

      case `pt`:
        localLang = `pt-br`;
        break;
    }

    document.documentElement.setAttribute('lang', localLang);
  };
  // end setLang = (lang: string)

  setScrollBy = async (
    elementId: string,
    direction: string,
    scrollSize: number,
    marginSize: number
  ): Promise<any> => {
    const element = document.querySelector(`#${elementId}`) as HTMLElement;
    const ret: ArrowsModel = {};

    if (direction === 'right') {
      element.scrollBy(scrollSize, 0);

      if (
        element.offsetWidth + Math.trunc(element.scrollLeft) <=
        element.scrollWidth - (scrollSize + marginSize)
      ) {
        ret.right = true;
      } else {
        ret.right = false;
      }

      ret.show = true;
      ret.left = true;

      return Promise.resolve(ret);
    } else {
      element.scrollBy(scrollSize * -1, 0);

      if (element.scrollLeft < scrollSize + marginSize) {
        ret.left = false;
      } else {
        ret.left = true;
      }

      ret.show = true;
      ret.right = true;

      return Promise.resolve(ret);
    }
  };
  // end setScrollBy = (elementId: string, direction: string)

  toggleAccessibilityOptions = () => {
    const elClickOff = document.querySelector(
      `#accessibility-click-off`
    ) as HTMLElement;

    const elLabel = document.querySelector(
      `#accessibility-label`
    ) as HTMLElement;

    const elOptions = document.querySelector(
      `#accessibility-options`
    ) as HTMLElement;

    elLabel.classList.toggle(`show`);
    elClickOff.classList.toggle(`show`);
    elOptions.classList.toggle(`show`);
  };
  // end toggleAccessibilityOptions = ()

  setTheme = (theme: string) => {
    const bodyEl = document.querySelector(`body`) as HTMLElement;

    bodyEl.classList.remove(`theme-high-contrast`);
    bodyEl.classList.remove(`theme-original`);

    bodyEl.classList.add(theme);

    this.global.currentTheme = theme;
    localStorage.setItem('pbTheme', theme);

    this.activeSection(parseInt(localStorage.getItem('pbSectionAtive')!));
  };
  // end setLang = (lang: string)

  setAccessibilityFontSize = (theme: string) => {
    this.global.accessibilityCurrentFontSize = theme;
    localStorage.setItem('pbTheme', theme);
  };
  // end setLang = (lang: string)
}
