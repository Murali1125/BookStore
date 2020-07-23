import './DashboardAdmin.scss'
import React, { Component } from 'react';
import {Container,Button,Dialog,DialogTitle,DialogContent,TextField,IconButton,Typography} from '@material-ui/core'
import Logo from './../../component/logo/Logo'
import BookDetailsTable from './BookDetailsTable'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import BookDecription from './BookDecription'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Popover from '@material-ui/core/Popover';

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
            data : [],
            searchWord:'',
            updateData:false,
            dataUpdated:'',
            anchorEl : null,
        }
    }

    handleClick = (event) => {
        this.setState({
            anchorEl : event.currentTarget
        })
    };
    
    handleClose = () => {
        this.setState({ anchorEl : null});
    };
    LogOut =()=>{
        localStorage. clear();
        this.props.history.push("/login")

    }

    onSearchWordChange = eve =>{
        this.setState({
            searchWord :  eve.target.value,
        })
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
    CloseAddBookDialogBox = (data) =>{
        this.setState({
            AddBookDialogOpen: false,
            selectedBookData:'',
            isUpdateBook : false,
            dataUpdated : data,
        })

    }
    setRefreshFalse = ()=>{
        this.setState({
            updateData : false
        })
    }
    componentWillMount() {       
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
                        <div className={ this.state.hideSearch ? 'searchBarAdmin' : 'searchBarOffAdmin' }>           
                            <div>
                                <IconButton onClick={this.onSearchIconClick }>
                                    <SearchOutlinedIcon style= { this.state.hideSearch ?  null : {color :'white', position : 'relative', left : '20px'}}
                                                                 fontSize='large'                                                                  
                                    />
                                </IconButton>
                            </div>
                            { (this.state.hideSearch)  ?                            
                                    <div>
                                        <TextField                                    
                                            className=  'searchField'  
                                            placeholder='Search'   
                                            onChange={this.onSearchWordChange}
                                            value={this.state.searchWord}
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
                            </Button>
                            <IconButton style={{ color : 'white', marginLeft : '20px'}}
                                        onClick={this.handleClick}
                            ><AccountCircleOutlinedIcon/></IconButton>
                            </div>
                            <Popover
                                open={Boolean(this.state.anchorEl)}
                                anchorEl={this.state.anchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center',
                                }}
                            >
                                <Button
                                    type='button'
                                    style={{padding: '5px',textTransform: 'none'}}
                                    onClick={this.LogOut}
                                >logOut</Button>
                            </Popover>
                    </div>
                </div>
                <Container className="BooksDisplayContainerAdmin">                    
                    <BookDetailsTable   showBook={this.OpenBookDialogBoxWithData}
                                        searchWord={this.state.searchWord}
                                        dataUpdated = {this.state.dataUpdated}
                    />  
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