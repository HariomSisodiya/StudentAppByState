import { Component } from "react";

export default class 
AddStudent extends Component{
    render(){
        const {studentList , addRecord , updateBranch} = this.props;
        return<>
            <div className="container mt-4">
          <div className="form-row">
            <div className="col">
              <input
                ref={(rollInput)=>this.roll = rollInput}
                type="text"
                placeholder="Enter roll Number"
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                ref={(nameInput)=>this.name = nameInput}
                type="text"
                placeholder="Enter Student name"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="form-row">
            <div className="col">
              <select className="form-control" ref={(branchInput)=>this.branch = branchInput}>
                <option>Select Branch</option>
                <option>CS</option>
                <option>IT</option>
                <option>EC</option>
                <option>MECH</option>
              </select>
            </div>
            <div className="col">
              <input
                ref={(mobileInput)=>this.mobile = mobileInput}
                type="text"
                placeholder="Enter mobile number"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
          <div className="col">
            <button className="btn btn-danger" style={{ width: "100px" }} onClick={()=>addRecord(this.roll.value , this.name.value , this.branch.value , this.mobile.value)}>
              ADD
            </button>
          </div>
          <div className="col">
              <button className="btn btn-primary ml-3" onClick={()=>updateBranch("CS")}>CS : ({studentList.filter((student)=>student.branch === "CS").length})</button>
              <button className="btn btn-danger ml-3" onClick={()=>updateBranch("IT")}>IT : ({studentList.filter((student)=>student.branch === "IT").length})</button>
              <button className="btn btn-secondary ml-3" onClick={()=>updateBranch("EC")}>EC : ({studentList.filter((student)=>student.branch === "EC").length})</button>
              <button className="btn btn-dark ml-3" onClick={()=>updateBranch("MECH")}>MECH : ({studentList.filter((student)=>student.branch === "MECH").length})</button>
              <button className="btn btn-success ml-3" onClick={()=>updateBranch("all")}>Total : ({studentList.length})</button>
          </div>
        </div>
          </div>
        </>
    }
}