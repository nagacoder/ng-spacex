import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss'],
})
export class DragonComponent implements OnInit {
  dragons: any = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDragons().subscribe((data: any) => {
      this.dragons = data;
      console.log(this.dragons);
    });
  }

  renderDescription(description: string) {
    return description.slice(0, 300) + '...';
  }
}
