import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { API_PATH_BOOK_DETAILS, API_PATH_SEARCH } from "../constants/api.paths.constants";
import { BookDetailRequest } from "../interfaces/book-detail-request.interface";

@Injectable()
export class BookService {
    constructor(private http: HttpClient) {}


  // example post method
  postBookDetails(request: BookDetailRequest): Observable<any> {
      return this.http.post(environment.baseApiUrl + API_PATH_BOOK_DETAILS, request).pipe(
          map((response: any) => {
              return response
          })
      );
  }

  getBookDetails(request: BookDetailRequest): Observable<any> {
    return this.http.get(environment.baseApiUrl + API_PATH_BOOK_DETAILS + request.id).pipe(
      map((response: any) => {
        return response
      })
    );
  }

    getSearchResult(query: string): Observable<any> {
        return this.http.get(environment.baseApiUrl + API_PATH_SEARCH + query).pipe(
            map((response: any) => {
                return response
            })
            // Http Interceptor will handle the errors 
            // Therefore we can drop the following lines
            // ,catchError((error: any) => {
            //    const message =  error.message ? error.message : error.error
            //    return of (message);
            // })
        );
    }    
}

