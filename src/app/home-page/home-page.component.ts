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
    this.gestureSound.set('Hand Pinching', "tom-3.mp3");
    this.gestureSound.set('Two Hands Pointing', "tom-4.mp3");
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
