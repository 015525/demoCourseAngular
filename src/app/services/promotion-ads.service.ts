import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList:string[];
  constructor() { 
    this.adsList = ["Big Discouts"
                   , "check out white friday discounts"
                   , "sale up to 50 %"
                   //, ''
                   , 'speacial white friday offer up to 70 %'
                  ];
  }

  getScheduleAds(intervalInSeconds:number) : Observable<string> 
  {
    return new Observable<string>((observer) => {
      // observer.next();
      // observer.error();
      // observer.complete();
      let counter=0;
      let adsTimer = setInterval(()=>{
        if (counter == this.adsList.length){
          observer.complete();
        }
        if (this.adsList[counter] == ''){
          observer.error('Error : Empty');
        }

        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSeconds*1000);

      return {
        unsubscribe(){
          // will be called :
            // error
            // complete
            // unsubscribe() //manually

          clearInterval(adsTimer);
          console.log('in unsubscribe');
        }
      }

    })
  }

  getSerialAds() : Observable<string>{
    //return of("ad1", "ad2", "ad3");
    return from(this.adsList);
  }
}
