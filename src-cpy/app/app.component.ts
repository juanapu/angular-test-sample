import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Directionality , Direction} from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hero-app';

    /** Whether the widget is in RTL mode or not. */
  isRtl: Direction;

  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription = Subscription.EMPTY;  

  constructor(dir: Directionality) {
    this.isRtl = dir.value;

    this._dirChangeSubscription = dir.change.subscribe((drc: Direction) => {
      this.isRtl = drc;
    });
  }

  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
  }

}
