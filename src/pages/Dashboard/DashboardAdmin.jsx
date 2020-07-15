import './DashboardAdmin.scss'
import React, { Component } from 'react';
import BookDetailsAdmin from './BookDetailsAdmin'
import {Container,Button} from '@material-ui/core'
import Logo from './../../component/logo/Logo'
import BookDetailsTable from './BookDetailsTable'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import BookDecription from './BookDecription'

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            booksData:'',
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className="headderAdmin">
                        <div className='LogoAdmin'><Logo/></div>
                        <div float='right'><Button style={{  color : 'white'}} className='AddButtonAdmin' > <AddOutlinedIcon/><MenuBookOutlinedIcon/></Button></div>
                    </div>
                </div>
                <Container className="BooksDisplayContainerAdmin">
                    {/* <BookDetailsAdmin/> */}
                    {/* <BookDetailsTable/> */}
                    <BookDecription/>
                </Container>
            </div>
        );
    }
}

export default AdminDashboard;