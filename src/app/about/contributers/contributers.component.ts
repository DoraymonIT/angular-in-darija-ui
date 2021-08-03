import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributers',
  templateUrl: './contributers.component.html',
  styleUrls: ['./contributers.component.sass'],
})
export class ContributersComponent implements OnInit {
  contributers = [
    { id: 1, nomComplet: 'Ahmed Ahmed' },
    { id: 2, nomComplet: 'Ahmed Yassine' },
    { id: 3, nomComplet: 'Khalid Ahmed' },
    { id: 4, nomComplet: 'Hafssa Yassine' },
    { id: 5, nomComplet: 'Ahmed Ahmed' },
    { id: 6, nomComplet: 'Ahmed Yassine' },

  ];
  constructor() {}

  ngOnInit(): void {}
}
