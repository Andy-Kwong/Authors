import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})

export class AddQuoteComponent implements OnInit {

    newQuote: any;
    authorToEdit: any;

  constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.newQuote = { text: '' }

    }

    addQuote() {
        console.log(this.newQuote);
        let observable = this._httpService.addQuote(this.newQuote);
        observable.subscribe(data => {
            console.log(data);
        })
    }

        /*
    getAuthor() {
            let observable = this._httpService.getOneAuthor(this.newAuthor);
        observable.subscribe(data => {
            console.log("data from getAuthor: ", data)
            this.authorToEdit = data;
        })
    }
         */

}
