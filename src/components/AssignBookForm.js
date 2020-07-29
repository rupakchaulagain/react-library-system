// import React from 'react'

// import AssignBookTable from './AssignBookTable'

// function  AssignBookForm(){

//   const bookCategory=["Non-Fiction,Fiction"];

//   this.state = {
//     categoryList: []
//   }


//   this.handleInputChange = (e) => {
      
//     console.log("handleInputChange")

//     const{name, value}=e.target
   
//     this.setState({
//      [name]: value
//     })
   

//   };

//   this.handleFormSubmit = (e) => {
//     e.preventDefault();

//     console.log("handleFormSubmit");

//     let categoryList = [...this.state.categoryList];

//     categoryList.push({
//       bookName: this.state.bookName,
//       bookCategory: this.state.bookCategory
//     });

//     this.setState({
//       categoryList
//     });

//   };





//     return(

//         <div className="row">
    
//       <form onSubmit={this.handleFormSubmit}>
//       <div className="form-group">
//       <label>Book Name:</label>
//         <input type="text" className="form-control" name="bookName" value={this.state.bookName}  onChange={this.handleInputChange} aria-describedby="emailHelp"/>
//       </div>
//       <div className="form-group">
//         <label>Book Category:</label>
//         <input type="text" className="form-control" name="bookCategory" value={this.state.bookCategory}  onChange={this.handleInputChange} aria-describedby="emailHelp"/>
//       </div>
    
//       <button type="submit" className="btn btn-primary">Assign</button>
//     </form>

//     <br></br>

//     <AssignBookTable categoryList={this.state.categoryList}/>
    
//     </div>
        
//     )


// }

// export default AssignBookForm;