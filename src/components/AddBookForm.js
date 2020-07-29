import React from 'react'

import Table from './Table'

class AddBookForm extends React.Component{

    constructor() {
        super();
    
        this.state = {
          bookName: "",
          bookAuthor: "",
          bookPublishedDate: "",
          bookList: [
            {
              bookName: "Welcome to the future",
              bookAuthor: "By Not Elon Musk",
              bookPublishedDate: "2020/12/04",
            },
            {
              bookName: "Science",
              bookAuthor: "St. XYZ",
              bookPublishedDate:  "2016/12/04",
            },
          ],
          submitBtn:'Add',
          submitFlag:''
        }

      this.handleInputChange=this.handleInputChange.bind(this)
    
      }

      handleInputChange = (e) => {
      
        // console.log("handleInputChange")

        const{name, value}=e.target
       
        this.setState({
         [name]: value
        })
       

      };

      handleFormSubmit = (e) => {
        e.preventDefault();

        if(this.state.submitFlag===''){
    
        let bookList = [...this.state.bookList];
    
        bookList.push({
          bookName: this.state.bookName,
          bookAuthor: this.state.bookAuthor,
          bookPublishedDate: this.state.bookPublishedDate
        });
    
        this.setState({
          bookList,
          bookName: "",
          bookAuthor: "",
          bookPublishedDate: ""

        });

      }

      //update Logic
      if(this.state.submitFlag==='U'){     

            var book = this.state.bookList[(this.state.currentIndex)]

            console.log(book.bookName);
            book.bookName= this.state.bookName
            book.bookAuthor= this.state.bookAuthor
            book.bookPublishedDate= this.state.bookPublishedDate

            this.setState({
              bookList:this.state.bookList,
              bookName: "",
              bookAuthor: "",
              bookPublishedDate: "",
              submitBtn:'Add',
              submitFlag:''
    
            });
          


      }

      };


      editBook =index=> {
    
        var book = this.state.bookList[index];

        this.setState({
          bookName: book.bookName,
          bookAuthor: book.bookAuthor,
          bookPublishedDate: book.bookPublishedDate,
          submitBtn: 'Update',
          submitFlag:'U',
          currentIndex: index
        });
    
    
      }


      deleteBook =index=> {

        console.log(index)
    
        const i = this.state.bookList.indexOf(index)
        this.state.bookList.splice(i, 1)

        this.setState({
          bookList: this.state.bookList
        });

        console.log("Result="+JSON.stringify(this.state.bookList))
    
      }

    render(){

        return(

          <div className="row">
        
          <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter Book Name" required="required"
             name="bookName" value={this.state.bookName}  onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <input type="text" className="form-control" placeholder="Enter Author Name" required="required"
             name="bookAuthor" value={this.state.bookAuthor}  onChange={this.handleInputChange}/>
          </div>
        
          <div className="form-group">
            <label>Published Date</label>
            <input type="text" className="form-control" placeholder="Enter Published Date" required="required"
             name="bookPublishedDate" value={this.state.bookPublishedDate}  onChange={this.handleInputChange}/>
          </div>

         
          <button type="submit" className="btn btn-primary">{this.state.submitBtn}</button>
        </form>
     <br></br>

      <Table bookList={this.state.bookList}
      deleteBook={this.deleteBook}
      editBook={this.editBook}/>

        </div>
            
        );

        }

}

export default AddBookForm;