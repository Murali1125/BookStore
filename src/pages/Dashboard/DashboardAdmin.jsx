import './DashboardAdmin.scss'
import React, { Component } from 'react';
import {Container,Button,Dialog,DialogTitle,DialogContent,TextField,IconButton} from '@material-ui/core'
import Logo from './../../component/logo/Logo'
import BookDetailsTable from './BookDetailsTable'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import BookDecription from './BookDecription'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            booksData:'',
            AddBookDialogOpen:false,
            selectedBookData:'',
            isUpdateBook : false,
        }
    }
    
    OpenAddBookDialogBox = () =>{
        this.setState({
            AddBookDialogOpen : true,
        })
    }
    OpenBookDialogBoxWithData = (bookData)=>{
        this.setState({
            isUpdateBook : true,
            AddBookDialogOpen: true,
            selectedBookData : bookData,
        })
    }
    CloseAddBookDialogBox = () =>{
        this.setState({
            AddBookDialogOpen: false,
            selectedBookData:'',
            isUpdateBook : false,
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="headderAdmin">
                        <div className='LogoAdmin'><Logo/></div>                               
                        <div className='searchBarAdmin'>           
                            <div>
                                <IconButton><SearchOutlinedIcon  fontSize='large' /></IconButton>
                            </div>
                            <div>
                                <TextField
                                    className='searchField'
                                    placeholder='Search'   
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,                                    
                                    }} 
                                />            
                            </div>
                        </div>
                       
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
                    <BookDetailsTable showBook={this.OpenBookDialogBoxWithData}/>  
                    <div>
                    <Dialog
                        className='AddBookDialogAdmin'
                        open={this.state.AddBookDialogOpen}
                        onClose={this.CloseAddBookDialogBox}   
                        fullWidth                     
                    >
                        <DialogTitle  style={{ backgroundColor: '#A73F46', height:'60px' , color: 'white'}}>
                            {
                                <span className='AddBookDilogheadderAdmin'><ImportContactsOutlinedIcon fontSize="large"/> 
                                {this.state.isUpdateBook  ?  " UpdateBook" : " AddBook" } </span>
                            }
                        </DialogTitle>
                        <DialogContent>
                            <BookDecription bookData={this.state.selectedBookData} closeDialog={this.CloseAddBookDialogBox}/>
                        </DialogContent>
                    </Dialog>
                    </div>                  
                </Container>
            </div>
        );
    }
}

export default AdminDashboard;