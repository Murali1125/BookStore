import './DashboardAdmin.scss'
import React, { Component } from 'react';
import BookDetailsAdmin from './BookDetailsAdmin'
import {Container,Button,Dialog,DialogTitle,DialogContent} from '@material-ui/core'
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
            AddBookDialogOpen:false,
        }
    }
    
    OpenAddBookDialogBox = () =>{
        this.setState({
            AddBookDialogOpen : true,
        })
        console.log("Dialogopen")
    }
    CloseAddBookDialogBox = () =>{
        this.setState({
            AddBookDialogOpen: false,
        })
        console.log("dialogClose")
    }
    render() {
        return (
            <div>
                <div>
                    <div className="headderAdmin">
                        <div className='LogoAdmin'><Logo/></div>
                        <div float='right' >
                            <Button className='AddButtonAdmin' 
                                    style={{  color : 'white'}} 
                                    onClick={this.OpenAddBookDialogBox}                                    
                            > 
                                <AddOutlinedIcon/><MenuBookOutlinedIcon />
                            </Button></div>
                    </div>
                </div>
                <Container className="BooksDisplayContainerAdmin">
                    {/* <BookDetailsAdmin/> */}
                    <BookDetailsTable/>                    
                    <Dialog
                        className='AddBookDialogAdmin'
                        open={this.state.AddBookDialogOpen}
                        onClose={this.CloseAddBookDialogBox}   
                        fullWidth                     
                    >
                        <DialogTitle >Book Store</DialogTitle>
                        <DialogContent>
                            <BookDecription/>
                        </DialogContent>
                    </Dialog>
                </Container>
            </div>
        );
    }
}

export default AdminDashboard;