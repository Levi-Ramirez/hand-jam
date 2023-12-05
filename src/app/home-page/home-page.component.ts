import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: string = "";
    gestureSound: Map<string, string> = new Map(); // Initialize as a new Map and fix typo

  constructor() { 
    this.gestureSound.set('Open Hand', "snare.mp3");
    this.gestureSound.set('Closed Hand', "kick-bass.mp3");
    this.gestureSound.set('Hand Pointing', "crash.mp3");
    this.gestureSound.set('Two Open Hands', "tom-1.mp3");
    this.gestureSound.set('Two Closed Hands', "tom-2.mp3");
    this.gestureSound.set('Hand Open And Hand Closed', "tom-3.mp3");
    this.gestureSound.set('Hand Pointing And Hand Closed', "tom-4.mp3");
  }
  //have a function for each one (kinda hard codded) and return a truth value for if its on or not
  openHand(): string{
    if(this.gesture == 'Open Hand') {
      return 'Yellow'
    }
    return 'Wheat'
  }
  closedHand(): string{
    if(this.gesture == 'Closed Hand') {
      return 'Yellow'
    }
    return 'Wheat'
  }
  pointingHand(): string{
    if(this.gesture == 'Hand Pointing') {
      return 'Yellow'
    }
    return 'Wheat'
  }
  twoOpenHand(): string{
    if(this.gesture == 'Two Open Hands') {
      return 'Yellow'
    }
    return 'Wheat'
  }
  twoClosedHand(): string{
    if(this.gesture == 'Two Closed Hands') {
      return 'Yellow'
    }
    return 'Wheat'
  }
  pinchingHand(): string{ //instead of pinching, one hand open and one hand closed
    if(this.gesture == 'Hand Open And Hand Closed') {
      return 'Yellow'
    }
    return 'Wheat'
  }
  twoPointingHand(): string{
    if(this.gesture == 'Hand Pointing And Hand Closed') {
      return 'Yellow'
    }
    return 'Wheat'
  }

  ngOnInit(): void {
  }
  prediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
    const soundName = this.gestureSound.get(this.gesture);
  
    if (soundName) { 
      this.playSound(soundName);
    } else {
      console.error('No sound found for gesture:', this.gesture);
    }
  }
  
  playSound(soundName: string) {
    const soundPath = `../../assets/sounds/${soundName}`;
    
    const sound = new Audio(soundPath);
    sound.play().catch(e => console.error('Error playing sound:', e));
  }


  

}
