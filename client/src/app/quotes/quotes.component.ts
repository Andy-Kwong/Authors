import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    oneAuthor: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
      this.getAuthor();
  }

    getAuthor() {
        let observable = this._httpService.getOneAuthor();
        observable.subscribe(data => {
            console.log("data from getAllQuotes: ", data);
            this.oneAuthor = data;
        });
    }

    vote(quoteIndex, votedUp) {
        if (votedUp) {
            console.log("voted up", quoteIndex);
            let observable = this._httpService.voteChangeUp(quoteIndex);
            observable.subscribe(data => {
                console.log(data)
            })
        } else {
            console.log("voted down", quoteIndex);
            let observable = this._httpService.voteChange(quoteIndex, -1);
            observable.subscribe(data => {
                console.log(data);
            })
        }
    }

    deleteQuote(quoteId) {
        console.log("quoteId", quoteIndex);
    }

}
