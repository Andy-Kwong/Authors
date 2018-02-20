import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-partial',
  templateUrl: './edit-partial.component.html',
  styleUrls: ['./edit-partial.component.css']
})

export class EditPartialComponent implements OnInit {
    oneAuthor: any;
    oneAuthorId: any;

  constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getOneAuthor();
        this.oneAuthorId = this._httpService.getOneAuthorId()
        console.log("One Author's ID", this.oneAuthorId);
    }

    getOneAuthor() {
        let observable = this._httpService.getOneAuthor();
        observable.subscribe(data => {
            this.oneAuthor = data;
            console.log(this.oneAuthor)
        })
    }

    updateAuthor() {
        let observable = this._httpService.editAuthor(this.oneAuthor);
        observable.subscribe(data => {
            console.log(data);
        })
    }

}
