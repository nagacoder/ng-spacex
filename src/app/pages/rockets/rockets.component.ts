import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../../store/actions/count.action';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    console.log("store.select('count')", store.select('count'));
    this.count$ = store.select('count');
    console.log(this.count$);
  }
  ngOnInit(): void {
    console.log('Print Hello 2');
  }

  increment() {
    console.log('ke klik gk?');
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
