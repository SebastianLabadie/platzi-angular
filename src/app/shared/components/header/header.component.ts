import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/core/services/i18n/i18n-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private translate: TranslateService, private i18nService: I18nServiceService) { }

  ngOnInit(): void {
    this.i18nService.localeEvent$.subscribe((locale) =>
      this.translate.use(locale)
    );
  }

}
