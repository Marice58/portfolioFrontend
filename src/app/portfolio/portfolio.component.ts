import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  title = 'Marys Rocca';
  about = 'Because there is always time to start again, I am a Civil Engineer with extensive experience in project management and control, administrative processes, construction, maintenance, and restoration of civil works. Now, I am exploring the IT world with a disciplined and methodical approach to learn and add new skills.';

  experienceList = [
    {
      title: 'Specialist Administrator',
      company: 'C.A. Metro de Caracas',
      year: '1987-2008'
    },
    {
      title: 'Specialist Administrator',
      company: 'Metro Los Teques',
      year: '2008-2010'
    },
    {
      title: 'Ingeniero III, Program and Control Unit Manager',
      company: 'Otepi Consultores, S.A.',
      year: '1991-1992'
    }
  ];

  education = 'Universidad Central de Venezuela, Caracas, Venezuela | Ingeniero Civil | January/1983';

  trainingList = [
    {
      title: 'Java Orientado a Objetos',
      provider: 'Oracle-ONE + Alura Latam',
      date: 'March/23'
    },
    {
      title: 'Emprendimiento',
      provider: 'Oracle-ONE + Alura Latam',
      date: 'March/23'
    },
    {
      title: 'Front-End Web Development',
      provider: 'freeCodeCamp',
      date: 'January/22'
    }
  ];
  skillsList = [
    {
      name: 'HTML',
      level: '90%'
    },
    {
      name: 'CSS',
      level: '80%'
    },
    {
      name: 'JavaScript',
      level: '70%'
    }
  ];
}
