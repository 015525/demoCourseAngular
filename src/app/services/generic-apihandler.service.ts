import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericAPIHandlerService {
  httpOption: { headers: HttpHeaders; };

  constructor(private httpClient: HttpClient) { 
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,Authorization: 'my-auth-token'
      })
    };
   }

   private setHeader(key:string, value:string)
   {
    this.httpOption.headers.set(key, value)
   }

  private handleError(error: HttpErrorResponse) 
  {
    //Generic error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // write error details in generic error log

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  GetAll(endPoint:string) : Observable<APIResponseVM>
  {
    return this.httpClient.get<APIResponseVM>(`${environment.APIURL}/${endPoint}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // search(searchItems:string[]) :  Observable<APIResponseVM>
  // {

  // }

  // getById(is:number): Observable<APIResponseVM>
  // {

  // }

  // post(newObj:any): Observable<APIResponseVM>
  // {

  // }

  // put(id:number, newObj:any): Observable<APIResponseVM>
  // {

  // }

  // delete(id:number): Observable<APIResponseVM>
  // {

  // }

}
