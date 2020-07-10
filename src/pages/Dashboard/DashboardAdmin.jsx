import './DashboardAdmin.scss'
import React, { Component } from 'react';
import BookDetailsAdmin from './BookDetailsAdmin'


class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            booksData:'',



            // dummy variables
            dummyBooksData:[],
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className="headderAdmin"> Headder</div>
                </div>
                <div>
                    <BookDetailsAdmin/>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;