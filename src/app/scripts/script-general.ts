import { Injectable } from '@angular/core';

// Variables
import { Global } from './global';

@Injectable()
export class ScriptGeneral {
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

    console.log(new Date());

    document.querySelectorAll('section').forEach((element) => {
      element.classList.remove('active');
    });

    document
      .querySelector('#about .content > .social')
      ?.classList.remove('vFixed');

    document
      .querySelector('#about .content > .social')
      ?.classList.remove('vFixed2');

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
        this.global.socialIconTheme = 'dark';
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
        this.global.socialIconTheme = 'dark';
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
  };
  // end setLang = (lang: string)
}
