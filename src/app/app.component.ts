import { AfterViewInit, Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public IsViewReady: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.IsViewReady = false;
    }, 2000);
  }
}
