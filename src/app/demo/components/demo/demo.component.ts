import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  objeto = {};

  power = 10;

  ngOnInit() {
    // code
  }

  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }




}
