import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

@Component({
  selector: 'app-template-main',
  templateUrl: './template-main.component.html',
  styleUrls: ['./template-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplateMainComponent implements OnInit {
  private _latsPosScroll: number = 0;
  private _lastAnimation: number = 0;
  private _quietPeriod: number = 500;
  private _animationTime: number = 500;
  public totalSections: number = 0;

  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {
    this.global.currentViewHeight = window.innerHeight;
    this.totalSections = document.querySelectorAll('section').length;

    this._latsPosScroll = window.pageYOffset;

    this.scripts.start(this.global.currentViewHeight, this._latsPosScroll);

    window.addEventListener('keydown', (event) => {
      event.preventDefault();

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        this.scripts.movePage(
          'up',
          this.global.currentViewHeight,
          this.totalSections
        );
      }

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        this.scripts.movePage(
          'down',
          this.global.currentViewHeight,
          this.totalSections
        );
      }

      if (event.key === 'Home') {
        this.scripts.movePage(
          'home',
          this.global.currentViewHeight,
          this.totalSections
        );
      }

      if (event.key === 'End') {
        this.scripts.movePage(
          'end',
          this.global.currentViewHeight,
          this.totalSections
        );
      }

      if (event.key === 'Escape') {
        document.querySelectorAll(`#jobs .gallery`).forEach((element) => {
          const aux = element as HTMLElement;

          aux.classList.remove('show');
        });
      }
    });
    // end addEventListener -> keypress

    window.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();

        const delta = event.deltaY || -event.detail;
        const timeNow = new Date().getTime();

        // Cancel scroll if currently animating or within quiet period
        if (
          timeNow - this._lastAnimation <
          this._quietPeriod + this._animationTime
        ) {
          event.preventDefault();
          return;
        }

        if (delta < 0) {
          this.scripts.movePage(
            'up',
            this.global.currentViewHeight,
            this.totalSections
          );
        } else {
          this.scripts.movePage(
            'down',
            this.global.currentViewHeight,
            this.totalSections
          );
        }

        this._lastAnimation = timeNow;
      },
      { passive: false }
    );
    // end addEventListener -> wheel

    // addEventListener -> touchmove
    document.addEventListener(
      'scroll',
      (event) => {
        if (!this.global.isDesktop) {
          event.stopImmediatePropagation();

          const offSetTop = window.pageYOffset;

          if (offSetTop >= 0 && offSetTop < this.global.currentViewHeight) {
            this.global.currentSection = 0;
          } else if (
            offSetTop >= this.global.currentViewHeight &&
            offSetTop < this.global.currentViewHeight * 2
          ) {
            this.global.currentSection = 1;
          } else if (
            offSetTop >= this.global.currentViewHeight * 2 &&
            offSetTop < this.global.currentViewHeight * 3
          ) {
            this.global.currentSection = 2;
          } else if (
            offSetTop >= this.global.currentViewHeight * 3 &&
            offSetTop < this.global.currentViewHeight * 4 - 2
          ) {
            this.global.currentSection = 3;
          } else {
            this.global.currentSection = 4;
          }

          // Up
          if (offSetTop < this._latsPosScroll) {
            if (
              offSetTop >= 0 &&
              offSetTop < this.global.currentViewHeight - 44
            ) {
              this.scripts.activeSection(0);
              document
                .querySelector('#about .content > .social')
                ?.classList.remove('vFixed');
            } else if (
              offSetTop >= this.global.currentViewHeight - 44 &&
              offSetTop < this.global.currentViewHeight
            ) {
              this.scripts.activeSection(1);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            } else if (
              offSetTop >= this.global.currentViewHeight &&
              offSetTop < this.global.currentViewHeight * 2
            ) {
              this.scripts.activeSection(2);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            } else if (
              offSetTop >= this.global.currentViewHeight * 2 &&
              offSetTop < this.global.currentViewHeight * 3 - 2
            ) {
              this.scripts.activeSection(3);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            } else {
              this.scripts.activeSection(4);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            }
          } else {
            if (offSetTop >= 0 && offSetTop < 44) {
              this.scripts.activeSection(0);
              document
                .querySelector('#about .content > .social')
                ?.classList.remove('vFixed');
            } else if (
              offSetTop >= 44 &&
              offSetTop < this.global.currentViewHeight
            ) {
              this.scripts.activeSection(1);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            } else if (
              offSetTop >= this.global.currentViewHeight + 44 &&
              offSetTop < this.global.currentViewHeight * 2
            ) {
              this.scripts.activeSection(2);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            } else if (
              offSetTop >= this.global.currentViewHeight * 2 + 44 &&
              offSetTop < this.global.currentViewHeight * 3 - 2
            ) {
              this.scripts.activeSection(3);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            } else {
              this.scripts.activeSection(4);
              document
                .querySelector('#about .content > .social')
                ?.classList.add('vFixed');
            }
          }
        }
        // end if (!this.global.isDesktop)
      },
      false
    );
    // end addEventListener -> touchmove
  }
  // end ngOnInit(): void
}
