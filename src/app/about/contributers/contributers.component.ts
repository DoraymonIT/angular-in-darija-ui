import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contributers',
  templateUrl: './contributers.component.html',
  styleUrls: ['./contributers.component.sass'],
})
export class ContributersComponent implements OnInit {
  contributors :any= [
    // { id: 1, nomComplet: 'Ahmed Ahmed' },
    // { id: 2, nomComplet: 'Ahmed Yassine' },
    // { id: 3, nomComplet: 'Khalid Ahmed' },
    // { id: 4, nomComplet: 'Hafssa Yassine' },
    // { id: 5, nomComplet: 'Ahmed Ahmed' },
    // { id: 6, nomComplet: 'Ahmed Yassine' },
  ];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getContributorsByRepo('ngMorocco/ngx-darija');
  }
  // method test to retrieve Contributors with github api
  getContributorsByRepo(repo_name: string) {
    return this.httpClient
      .get('https://api.github.com/repos/' + repo_name + '/contributors')
      .subscribe((data) => {
        console.log(data);
        this.contributors = data;
      });
  }
}
