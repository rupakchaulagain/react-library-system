import React from 'react'
import AssignBookTable from './AssignBookTable'
import BreadCumb from "../BreadCumb";

class AssignBookForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookName: '',
            bookCategoryId: '',
            bookCategoryValue: '',
            categoryList: [],
            bookCategory: [
                {
                    key: 1,
                    value: "Non-Fiction"
                },
                {
                    key: 2,
                    value: "Fiction"
                },
                {
                    key: 3,
                    value: "Science Fiction"
                },
                {
                    key: 4,
                    value: "Biography"
                }

            ],
            bookCategorySearch: '',

        }

    }

    handleInputChange = (e) => {

        const {name, value} = e.target


        this.setState({
            [name]: value
        })

        console.log(name + ":" + value)

    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("handleFormSubmit");

        let categoryList = [...this.state.categoryList];

        let categoryType = "";
        this.state.bookCategory.map((category, index) => {

            if (category.key === parseInt(this.state.bookCategoryId)) {

                console.log("Matched Category..." + category.value)

                categoryType = category.value;
            }
        })

        categoryList.push({
            bookName: this.state.bookName,
            bookCategoryId: this.state.bookCategoryId,
            bookCategoryValue: categoryType
        });

        this.setState({
            categoryList,
            bookName: '',
            bookCategoryId: '',
            bookCategoryValue: ''
        });

    };

    filterBookCategory = (e) => {

        const {name, value} = e.target

        this.setState({
            [name]: value
        })

        console.log(name + ":" + value)

        let categoryList = [...this.state.categoryList];

        let filteredList = []

        if (value === '-1') {

            this.setState({
                categoryList,
                filteredList: null,
                bookName: '',
                bookCategoryId: '',
                bookCategoryValue: '',
                bookCategory: this.state.bookCategory
            });

        } else {

            categoryList.map((category, index) => {

                if (category.bookCategoryId === value) {

                    console.log("Matched Category..." + category.value)

                    filteredList.push({
                        bookName: category.bookName,
                        bookCategoryId: category.key,
                        bookCategoryValue: category.bookCategoryValue
                    });
                }
            })

            this.setState({
                filteredList,
                bookName: '',
                bookCategoryId: '',
                bookCategoryValue: '',
                bookCategory: this.state.bookCategory
            });

        }

    }

    render() {
        return (
            <div>

                <BreadCumb {...this.props}/>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Book Name:</label>
                        <input type="text" className="form-control" placeholder="Enter Book Name" required="required"
                               name="bookName" value={this.state.bookName} onChange={this.handleInputChange}
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label>Book Category:</label>

                        <select className="form-control" name="bookCategoryId" required="required"
                                onClick={this.handleInputChange}>

                            {this.state.bookCategory.map(category => {
                                return (
                                    <option value={category.key}>{category.value}</option>
                                )
                            })}

                        </select>

                    </div>

                    <button type="submit" className="btn btn-primary">Assign</button>
                </form>

                <br></br>

                <AssignBookTable
                    bookCategorySearch={this.state.bookCategorySearch}
                    categoryList={this.state.categoryList}
                    filteredList={this.state.filteredList}
                    bookCategory={this.state.bookCategory}
                    filterBookCategory={this.filterBookCategory}
                />

            </div>

        )
    }
}

export default AssignBookForm;