import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MainPage} from'../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Slides) Slides: Slides;
	skipMsg: string = 'Skip';

	constructor(public navCtrl: NavController) {

	}

	skip(){
		this.navCtrl.push(MainPage);
	}

	slideChanged(){
		if(this.Slides.isEnd())  
			this.skipMsg = "Alright, I got it";
	}
}
