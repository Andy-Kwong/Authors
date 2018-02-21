import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    authorId: any;

    constructor(private _http: HttpClient) { }

    getAuthors() {
        return this._http.get('/authors');
    }

    addAuthor(author) {
        return this._http.post('/authors', author);
    }

    editAuthor(author) {
        let url = '/authors/' + author._id;
        return this._http.put(url, author);
    }

    editPartial(ID) {
        this.authorId = ID;
    }

    getOneAuthor() {
        let url = '/authors/' + this.authorId;
        return this._http.get(url);
    }

    getOneAuthorId() {
        return this.authorId;
    }

    deleteAuthor(authorId) {
        let url = '/authors/' + authorId;
        return this._http.delete(url);
    }

    addQuote(newQuote) {
        let url = '/quotes/' + this.authorId;
        return this._http.post(url, newQuote);
    }

    deleteQuote(quoteIndex) {
        let authorIndexObj = {index: quoteIndex};
        let url = '/quotes/' + this.authorId;
        return this._http.delete(url, authorIndexObj);
    }

    // Accepts quote index and amount to increment either +1 or -1
    voteChangeUp(quoteIndex) {
        let url = '/quotes/' + this.authorId + '/up';
        return this._http.put(url, quoteIndex)
    }
}
