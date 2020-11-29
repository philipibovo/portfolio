import { Component, OnInit } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {}
}
