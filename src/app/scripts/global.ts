import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public accessibilityCurrentFontSize: string;
  public arrowDownTheme: string;
  public arrowUpTheme: string;
  public currentSection: number;
  public currentViewHeight: number;
  public currentTheme: string;
  public isDesktop: boolean;
  public isFirstSection: boolean;
  public isLandscape: boolean;
  public isLastSection: boolean;
  public isMobile: boolean;
  public isPortrait: boolean;
  public lang: string;
  public socialIconTheme: string;

  constructor() {
    this.accessibilityCurrentFontSize = `font-size-1`;
    this.arrowDownTheme = 'light';
    this.arrowUpTheme = 'light';
    this.currentSection = 0;
    this.currentViewHeight = 0;
    this.currentTheme = ``;
    this.isDesktop = true;
    this.isFirstSection = true;
    this.isLandscape = true;
    this.isLastSection = false;
    this.isMobile = false;
    this.isPortrait = false;
    this.lang = 'pt';
    this.socialIconTheme = 'light';
  }
}
