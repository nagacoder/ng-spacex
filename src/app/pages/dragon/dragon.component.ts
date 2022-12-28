import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss'],
})
export class DragonComponent implements OnInit {
  phone = '';
  password = '';
  formdata: any = {};
  dragons: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDragons().subscribe((data: any) => {
      this.dragons = data;
      console.log(this.dragons);
    });
    const body = {
      phone: this.phone,
      password: this.password,
    };
    this.formdata = new FormGroup({
      phone: new FormControl('loginBody'),
    });

    this.api.login(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  onClickSubmit(result: any) {
    console.log('You have entered : ' + result.username);
  }

  renderDescription(description: string) {
    return description.slice(0, 300) + '...';
  }
}
