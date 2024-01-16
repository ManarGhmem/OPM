import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";
import { SharedService } from "./services/shared.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private translate: TranslateService,
    private sharedService: SharedService
  ) {
    this.translate.addLangs(["en"]);
    const defaultLang = this.sharedService.getItem("lang");
    const langList = [
      {
        image: "assets/images/flags/ENGLISH.jpg",
        language: "English",
        lang: "en",
      },
      // {
      //   image: "assets/images/flags/FRANCE.jpg",
      //   language: "France",
      //   lang: "fr",
      // },
    ];
    if (defaultLang) {
      const parsedLang = JSON.parse(defaultLang);
      const found = langList.find(
        (item) =>
          item.image == parsedLang.image &&
          item.language == parsedLang.language &&
          item.lang == parsedLang.lang
      );
      if (found) {
        translate.setDefaultLang(parsedLang.lang);
        return;
      }
    }
    const browserLang = translate.getBrowserLang();
    this.translate.use("en");
    // localStorage.setItem(
    //   "lang",
    //   JSON.stringify({
    //     image: `assets/images/flags/${
    //       browserLang == "en" ? "ENGLISH" : "FRANCE"
    //     }.jpg`,
    //     language: browserLang == "en" ? "English" : "France",
    //     lang: browserLang,
    //   })
    // );
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
