import { WorkExperience } from "./experience-model";

export const myProgrammingLanguage = 'C#, JavaScript, Python, SQL';
export const myFrameworks = 'Angular, NodeJS, ASP.Net MVC, Xamarin';
export const myCloudPlatforms = 'AWS(Lambda, Serverless, Secrets Manager), Azure DevOps';
export const myTools = 'Git, TFS, Agile Methodology';
export const myDatabase =  'MS SQL Server, AWS DynamoDB';

export const experiences: Array<WorkExperience> = [
    {   ExperienceID: 1, 
        Company: "Accenture",
        Year:"April 2020 - PRESENT",
        Title:"SOFWARE DEVELOPER",
        JobDescription: ["Manage a team with 6 members.",
            "Develop and maintain software applications using Angular, C#, SQL, AWS (Serverless, Lambda, Secrets Manager)", 
            "Acted as the point of contact for all critical errors for 3 major client projects and reduced the time to fix those critical errors by 14%",
             "Used to VUE.JS for implementing the open source JavaScript framework for building user interfaces.", 
            "Collaborate with cross-function teams to design and implement new features.",
            "Conduct code reviews and ensure compliance with best practices."]
    },
    {   ExperienceID: 2, 
        Company: "Systems & Software Consulting Group",
        Year:"MARCH 2018 – APRIL 2020",
        Title:"PROGRAMMER II",
        JobDescription: ["Maintains and modify existing programs; develop detailed programming logic, and coding changes.",
            "Develop a system from the scratch using Angular 4, C#(ASP.Net MVC EF), SQL, and Xamarin for the mobile application",
            "Maintain a system using KnockoutJS, C#(ASP.Net MVC EF), and SQL",
            "Maintaining database backup and syncing using ETL every branch"]
    }
]

export const freelances: Array<any> = [
    {   ExperienceID: 1, 
        Company: "INSURANCE SYSTEM, UPWORK",
        Year:"SEPTEMBER 2021 – MARCH 2022",
        Title:"ASP.NET FULL STACK DEVELOPER",
        JobDescription: ["Fixing issues on the system, enhance/modified user interface, and optimize per page that retrieving data from database.",
            "Maintain and creation of html email template", 
            ]
    },
    {   ExperienceID: 2, 
        Company: "INVENTORY SYSTEM, ONLINEJOBS.PH",
        Year:"JUNE 2022 – AUGUST 2022",
        Title:"FRONT END DEVELOPER",
        JobDescription: ["Used ASP.Net MVC and jquery",
            "Create module page that have many transactions such as saving, updating, deleting data"]
    }
]

