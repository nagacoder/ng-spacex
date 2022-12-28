import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    console.log("store.select('count')", store.select('count'));
    this.count$ = store.select('count');
    console.log(this.count$);
  }

  ngOnInit(): void {
    console.log('Print Hello 2');
  }
}
