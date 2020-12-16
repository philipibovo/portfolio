import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

@Component({
  selector: 'app-template-cv',
  templateUrl: './template-cv.component.html',
  styleUrls: ['./template-cv.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplateCvComponent implements OnInit {
  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {
    this.scripts.getLang();
    this.scripts.resizedWindow();
  }
}
