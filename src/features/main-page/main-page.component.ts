import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Const from '../shared/model/constant';
import { WorkExperience } from '../shared/model/experience-model';
import { SkillModel } from '../shared/model/skill-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  title = 'sample-portfolio';
  selectedExpId: number = 0;
  selectedExp: WorkExperience = new WorkExperience();
  myFullName: string = Const.myPersonalDetails.FullName;
  aboutMe: string = Const.myPersonalDetails.AboutMe;
  skills: SkillModel = new SkillModel();
  experiences: WorkExperience[] = [];
  freelances: WorkExperience[] = [];
  currentTitle: string = Const.experiences[0].Title; 
  myPersonalDetails: any = Const.myPersonalDetails;
  constructor(private _router: Router,){};

  ngOnInit(): void {
    this.setMySkill();
    this.setMyExperience();
}

setMySkill(): void {
  this.skills.ProgrammingLanguages = Const.myProgrammingLanguage;
  this.skills.CloudPlatforms = Const.myCloudPlatforms;
  this.skills.Database = Const.myDatabase;
  this.skills.Frameworks = Const.myFrameworks;
  this.skills.Tools = Const.myTools;
}

setMyExperience(): void {
  this.experiences = Const.experiences;
  this.freelances = Const.freelances;
}

view(expid: number, type: number): void{
  const experiences = type === 1 ? this.experiences : this.freelances;
  this.selectedExp = this.getSelectedExp(experiences, expid);
}

getSelectedExp(array: Array<any>, expid: number): WorkExperience {
  const expIndex = array.findIndex(x=> x.ExperienceID === expid);
  return array[expIndex] || new WorkExperience();
}

showBrain(){
  this._router.navigate(['brain-page']);  
}
  
}
