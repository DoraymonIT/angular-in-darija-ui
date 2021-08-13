import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.sass'],
})
export class SessionDetailsComponent implements OnInit {
  id;
  constructor(   private route: ActivatedRoute) {}
  ngOnInit(): void {
     this.route.params.subscribe((params) => {
       this.id = +params['id'];
    });
  }

}
