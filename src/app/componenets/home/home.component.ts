import { getLocaleCurrencySymbol } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, filter, map, Observable, ObservableLike, retry, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[];
  storeInfo: StoreData;
  imageShown: boolean = true;
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('iti', 'https://picsum.photos/400/300', ['Cairo', 'Alex', 'Qena'])
    this.subscriptions = [];
  }


  ngOnInit(): void {
    // let observer = {
    //   next: (data:string)=>{
    //     console.log(data);
    //   },
    //   error : (err:string)=>{
    //     console.log(err);
    //   },
    //   complete: ()=>{
    //     console.log('ads finished');
    //   }
    // }
    // this.promoAds.getScheduleAds(3).subscribe(observer);

    //let adsSubscription : Subscription = this.promoAds.getScheduleAds(3).subscribe({
    //this.subscription = this.promoAds.getScheduleAds(3).subscribe({
    // let adsSubscription: Subscription = this.promoAds.getScheduleAds(3).subscribe({
    //   next: (data: string) => {
    //     console.log(data);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('ads finished');
    //   }
    // });


    let observer = {
      next: (data:string)=>{
        console.log(data);
      },
      error : (err:string)=>{
        console.log(err);
      },
      complete: ()=>{
        console.log('ads finished');
      }
    }

    // let filterObservable : Observable<string> = this.promoAds.getScheduleAds(3).pipe(
    //   retry(3),
    //   catchError();
    // );

    let filterObservable : Observable<string> = this.promoAds.getScheduleAds(3).pipe(
      filter(ad=>ad.includes("white friday"))
      , map(ad=> 'Ad : ' + ad)
    
    );

    let adsSubscription = filterObservable.subscribe(observer);
    this.subscriptions.push(adsSubscription);

    // let sub=this.promoAds.getSerialAds().subscribe(ad=>{
    //   console.log(ad);
    // })


    // this.subscriptions.push(sub);
    //adsSubscription.unsubscribe();

    //old version depricated implementation
    // this.promoAds.getScheduleAds(3).subscribe(
    //   (data)=>{},
    //   (err)=>{},
    //   ()=>{}
    // );

    // in case of handing only data its ok to use this implmentation
    // this.promoAds.getScheduleAds(3).subscribe(
    //     (data)=>{}
    // );

  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  toggleImage() {
    this.imageShown = !this.imageShown;
  }

}
