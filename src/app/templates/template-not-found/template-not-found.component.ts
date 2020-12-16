import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

@Component({
  selector: 'app-template-not-found',
  templateUrl: './template-not-found.component.html',
  styleUrls: ['./template-not-found.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplateNotFoundComponent implements OnInit {
  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {
    this.scripts.resizedWindow();
  }
}
