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

    let c = new Course('CAS', 'CS', '112', 'B1', 'Sullivan');


    return (
        <ol>
          {
            c.map(course => <li>{c.col}{c.depart}{c.num}{c.sec}{c.prof}</li>)
          }
        </ol>
    );
  }
}

export default App;
