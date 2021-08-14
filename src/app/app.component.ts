import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-portfolio';
  selectedExpId: number = 0;
  selectedExp: any = [];
  experiences: Array<any> = [
    { expId: 1, company: "AGENCY PARTNER INTERACTIVE", year:"Jul 2020 - Jan 2021", title:"Full Stack Developer",
            jd: ["Built out the user authentication workflow for a B2B app in the finance industry.",
                  "Worked alongside two other developers to build a web app that allowed designers to add image recognition to their projects using Django on the back-end and Vue on the front-end.", 
                  "Acted as the point of contact for all critical errors for 3 major client projects and reduced the time to fix those critical errors by 14%",
                  "Used to VUE.JS for implementing the open source JavaScript framework for building user interfaces.", 
                  "We used Typescript, React.js, HTML5, CSS3, and Tailwind CSS to construct elegant user interfaces",
                  "Involved in DevOps to configure Maven, GitHub and AWS to build and deploy."]
    },
    { expId: 2, company: "SOFI", year:"Apr 2019 - Mar 2020", title:"Full Stack Developer",
            jd: ["Hands-on experience with user-facing features using React.JS to implement the webpage depending on user's requests and involves the popular workflowsuch as Redux.",
                  "Created an API product for a consumer financecompany that ingested millions of web pages of unstructured data and structured that data to be used in risk propensity modeling."]
    },
    { expId: 3, company: "THINK PORT", year:"Mar 2018 - Feb 2019", title:"Full Stack Developer",
            jd: ["Utilized React Strap and Ant Design UI react form forthe front-end interface design.",
                  "Used Typescript to generate client-side JavaScript Code.",
                  "Manage global state with Vuex including user login information",
                  "Integrated Redux with Redux-Saga middleware to update redux in an asynchronous environment.",
                  "Contributor of Ant Design UI framework by implementing it into Vue like the List component and Table component.",
                  "Uses AWS platform as a service infrastructure"]
    },
    { expId: 4, company: "ADVOX STUDIO", year:"Jun 2013 - March 2017", title:"Full Stack Developer",
            jd: ["Developed front-end website architecture using HTML, CSS, JavaScript, Angular, React, and Firebase.",
                  "Developed using all the AngularJS elements such as directives, controllers, filters.",
                  "Developed using AngularJS factory and services for dependency injection.",
                  "Created a web application entirely using AngularJS.",
                  "Used HTML5, CSS3, JavaScript, JQuery, Angular.JS and JSON and bootstrap for developing responsive single-page applications.",
                  "Tested front-end App with the Redux Chrome extension",
                  "Worked in AWS Cloud development environment and EC2, S3, CloudWatch."]
    }
]


  constructor(){};

  ngOnInit(): void {
    console.log(this.experiences);
}

viewJD(expId: number){
  this.selectedExp = expId;
  this.selectedExp = this.experiences.find(x=> x.expId == expId);
  console.log(this.selectedExp);
}

  
}
