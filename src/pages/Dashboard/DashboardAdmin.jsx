import './DashboardAdmin.scss'
import React, { Component } from 'react';
import BookDetailsAdmin from './BookDetailsAdmin'
import {Container,Button} from '@material-ui/core'
import Logo from './../../component/logo/Logo'

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
                    <div className="headderAdmin">
                        <div className='LogoAdmin'><Logo/></div>
                        <div float='right'><Button style={{ background : '#1CA261' , color : 'white'}} className='AddButtonAdmin' > + ADD</Button></div>
                    </div>
                </div>
                <Container className="BooksDisplayContainerAdmin">
                    <BookDetailsAdmin/>
                </Container>
            </div>
        );
    }
}

export default AdminDashboard;