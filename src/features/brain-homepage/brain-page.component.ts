import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brain-page',
  templateUrl: './brain-page.component.html',
  styleUrls: ['./brain-page.component.css']
})
export class BrainPageComponent implements OnInit {

  isShowBrain: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showBrainImage();
    }, 100);
    
  }

  showBrainImage(): void{
    console.log("showed");
      this.isShowBrain = true;
  }

}
