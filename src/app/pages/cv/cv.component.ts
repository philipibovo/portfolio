import { Component, OnInit } from '@angular/core';

// Scripts
import { Global } from '../../scripts/global';
import { ScriptGeneral } from '../../scripts/script-general';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  public yearsOld: number = 0;

  constructor(public global: Global, public scripts: ScriptGeneral) {}

  ngOnInit(): void {
    const bornDate = new Date(1987, 0, 19);
    const actualDate = new Date();

    this.yearsOld = actualDate.getFullYear() - bornDate.getFullYear();
  }
}
