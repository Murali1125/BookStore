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
            hideSearch : false,
            isScreenBelow600 : false,
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

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({ hideSearch: window.innerWidth >= 600,
                        isScreenBelow600 : true});
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    onSearchIconClick = () =>{
        this.setState({hideSearch: !(this.state.hideSearch)})
        console.log(this.state.hideSearch)
        console.log("open search bar")
    }
    render() { 
        return (
            <div>
                <div>
                    <div className="headderAdmin">
                        <div className='LogoAdmin'><Logo/></div>                               
                        <div className={ this.state.hideSearch ? 'searchBarAdmin' : 'searchBarOffAdmin' } 
                            // style={ this.state.isScreenBelow600 ? {zIndex : '100', position: 'relative',width: '100%'} : null}
                        >           
                            <div>
                                <IconButton onClick={this.onSearchIconClick }>
                                    <SearchOutlinedIcon style= { this.state.hideSearch ?  null : {color :'white'}}
                                                                 fontSize='large'                                                                  
                                    />
                                </IconButton>
                            </div>
                            { (this.state.hideSearch)  ?                            
                                    <div>
                                        <TextField                                    
                                            className=  'searchField'  
                                            placeholder='Search'   
                                            fullWidth                   
                                            InputProps={{
                                                disableUnderline: true,                                    
                                            }} 
                                            
                                        />            
                                    </div>
                                : null 
                            }
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