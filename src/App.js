import { Component } from "react";
import "./App.css";
import data from "./data";
import Header from "./Component/Header";
import StudentList from "./Component/StudentList";
import AddStudent from "./Component/AddStudent";

class App extends Component {
  constructor(){
    super();
    this.state = {
      studentList : data,
      defaultBranch : "all"
    }
  }

  addRecord = (roll , name , branch , mobile)=>{
    let newStudent = {roll , name , branch ,  mobile};
    this.setState({studentList : [...this.state.studentList , newStudent]});
    window.alert("New Record Inserted....");
  }

  deleteRecord = (roll)=>{
    if(window.confirm("Are you sure?")){
      let index = this.state.studentList.findIndex((student)=>student.roll === roll);
      this.state.studentList.splice(index , 1);
      this.setState({studentList : [...this.state.studentList]});
    }
  }

  updateBranch = (branch)=>{
      this.setState({defaultBranch : branch});
  }

  render() {
    return <>
        <Header/>
        
        <AddStudent studentList = {this.state.studentList} addRecord = {this.addRecord} updateBranch = {this.updateBranch}/>
    
        <div className="container mt-4">
          <StudentList studentList = {this.state.studentList} defaultBranch = {this.state.defaultBranch} deleteRecord = {this.deleteRecord}/>
        </div>
      </>
  }
}


export default App;
