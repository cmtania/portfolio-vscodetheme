import { Component, OnInit } from '@angular/core';
import { SkillModel } from './model/skill-model';
import * as Const from './model/constant';
import { WorkExperience } from './model/experience-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-portfolio';
  selectedExpId: number = 0;
  selectedExp: WorkExperience = new WorkExperience();
  myFullName: string = 'Christian';
  aboutMe: string = `With 4 years of experience as a Full Stack Developer based here in the Philippines.I've been working with C#, NodeJS, Angular, AWS, REST API, MSSQL, GIT/TFS.`;
  // skills: any = `"HTML/HTML5", "CSS", "JavaScript", "Angular.js", "React.js", "Vue.js", "Node.js", "Jquery", "Jquery UI"`;
  skills: SkillModel = new SkillModel();
  experiences: WorkExperience[] = [];
  freelances: WorkExperience[] = []; 

  constructor(){};

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

  
}
