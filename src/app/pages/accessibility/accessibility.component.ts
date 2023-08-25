import { Component, OnInit } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss'],
})
export class AccessibilityComponent implements OnInit {
  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {}
}
