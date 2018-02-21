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
      this.oneAuthor = {};
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
        let index = { index: quoteIndex }
        if (votedUp) {
            console.log("voted up on index", quoteIndex);
            let observable = this._httpService.voteChangeUp(index);
            observable.subscribe(data => {
                console.log(data)
                this.getAuthor();
            })
        } else {
            console.log("voted down on index", quoteIndex);
            let observable = this._httpService.voteChangeDown(index);
            observable.subscribe(data => {
                console.log(data);
                this.getAuthor();
            })
        }
    }

    deleteQuote(quoteIndex) {
        let index = { index: quoteIndex }
        console.log("quoteId", index);
        let observable = this._httpService.deleteQuote(index);
        observable.subscribe(data => {
            console.log(data);
            this.getAuthor();
        })
    }

}
