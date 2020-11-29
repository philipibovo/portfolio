import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public isMobile: boolean;
  public isDesktop: boolean;
  public isLandscape: boolean;
  public isPortrait: boolean;
  public lang: string;
  public currentViewHeight: number;
  public currentSection: number;
  public arrowUpTheme: string;
  public arrowDownTheme: string;
  public socialIconTheme: string;
  public isFirstSection: boolean;
  public isLastSection: boolean;

  constructor() {
    this.isMobile = false;
    this.isDesktop = true;
    this.isLandscape = true;
    this.isPortrait = false;
    this.lang = 'pt';
    this.currentViewHeight = 0;
    this.currentSection = 0;
    this.arrowUpTheme = 'light';
    this.arrowDownTheme = 'light';
    this.socialIconTheme = 'light';
    this.isFirstSection = true;
    this.isLastSection = false;
  }
}
