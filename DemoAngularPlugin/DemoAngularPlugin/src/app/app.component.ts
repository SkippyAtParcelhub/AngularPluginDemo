import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Plugin';
  jwt: string="";
  ticketobject: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['jwt'])
        this.jwt = params['jwt'];

      if (params['PassObject'])
        this.ticketobject = JSON.parse(params['PassObject']);
    });
  }
}
