import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOption;

  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,Authorization: 'my-auth-token'
      })
    };
  }

  getAllProducts(): Observable<Iproduct[]> {
    
    // Repository Design pattern
    // return this.GenericAPIHandler.getAll('/Products')
    // .pipe(
    //   map((APIResponseVM : APIResponseVM) => {
    //     return APIResponseVM.data
    //   })
    // )

    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/Products`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getProductsByCatId(catId: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/Products?categoryId=${catId}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.APIURL}/Products/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  addProduct(newPrd: Iproduct): Observable<Iproduct> {
    // return this.httpClient.post<Iproduct>(`${environment.APIURL}/Products`, JSON.stringify(newPrd), this.httpOption)
    //   .pipe(
    //     retry(2),
    //     catchError((err) => {
    //       console.log(err);
    //       return throwError(() => new Error(err.error))
    //     })
    //   )

    return this.httpClient.post<Iproduct>(`${environment.APIURL}/Products`, JSON.stringify(newPrd), this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateProduct(prdId: number, updatedPrd: Iproduct) {

  }

  deleteProduct(prdId: number) {

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

}
