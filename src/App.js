import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Course{

  constructor(college, department, number, section, professor){
    this.col = college;
    this.depart = department;
    this.num = number;
    this.sec = section;
    this.prof = professor;
  }
}
 class App {
   render() {
     const c1 = new Course('CAS', 'CS', '112', 'B1', 'Sullivan');
     const c2 = new Course('CAS', 'CS', '111', 'BB', 'Vahid');
     const c3 = new Course('CAS', 'MA', '225', 'A1', 'Panth');
     let courseList = [c1, c2, c3];

     return (
         <div>
             {courseList.map(n => <li>{n.col}</li>)}
         </div>
     );
   }
 }

export default App;
