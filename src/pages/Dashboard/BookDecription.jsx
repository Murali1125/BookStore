import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import  './DashboardAdmin.scss'
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import ImageIcon from '@material-ui/icons/Image';
import {AddBook} from './../../service/AdminServices'
class BookDecription extends Component {
    constructor(props){
        super(props);
        this.state={
            isEditable : false,
            anchorEl : null,
            title : '',
            decription :'',
            author : '',
            image:null,
            imageUrl :null,
            price : '',
            quantity :'',        
        }
    }

    
    // on change of any field
    onChange = eve =>{
        this.setState({             
            [eve.target.name] : eve.target.value
        })
    }
    fileChangedHandler = (event) => {
        event.preventDefault();
        this.setState({ image : event.target.files[0],
                        imageUrl : URL.createObjectURL(event.target.files[0]) });
        console.log("imageUrl",this.state.imageUrl)
    }
    
    componentDidMount(){
        if(Boolean (this.props.bookData) ){
            this.setState({ title : this.props.bookData.title ,     
                            decription : this.props.bookData.decription,
                            author : this.props.bookData.author,
                            imageUrl : this.props.bookData.imageUrl,
                            price : this.props.bookData.price,
                            quantity :this.props.bookData.quantity,
            })
        }         
    }

    onSave = () =>{
        console.log('onsave')
        let Book = {
            "Title": this.state.title,
            "Description": this.state.decription,
            "Author": this.state.author,
            "BooksAvailable": this.state.quantity,
            "Price": this.state.price,
        }
        AddBook(Book)
        .then(responce=>{
            console.log(responce)
        })
        .catch(error=>{
            console.log(error)
        })
        this.props.closeDialog();
    }
    render() {
        return (
            <div className='BookDetailsAdmin' >                
                <div className='imageContainerAdmin'>
                    {(this.state.imageUrl !== null && this.state.imageUrl !== undefined ) ?
                        <img src={this.state.imageUrl}  
                            className='BookImageAdmin'
                            alt="BookImage"
                            onClick={() =>
                            this.fileUpload.click()
                                }                                
                        />  
                        : <div onClick={() =>
                                this.fileUpload.click()
                                }>
                                <Button style={{textTransform: 'none'}}><ImageIcon/>BookImage</Button>
                            </div>
                    }
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={this.fileChangedHandler}
                        ref={(fileUpload) =>
                        (this.fileUpload = fileUpload)
                        }
                    ></input>                             
                </div>
                <div>
                    <TextField 
                        value={this.state.title} 
                        variant='outlined'
                        label = 'Title'
                        name='title'
                        size='small'
                        fullWidth
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.author} 
                        fullWidth
                        variant='outlined'
                        label = 'Author'
                        name='author'
                        size='small'
                        inputProps={{style: {  fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.decription} 
                        multiline
                        fullWidth
                        rowsMax='6'                        
                        variant='outlined'
                        label = 'Decription'
                        name='decription'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.price} 
                        variant='outlined'
                        label = 'Price'
                        fullWidth
                        type='number'
                        name='price'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.quantity} 
                        type='number'
                        variant='outlined'
                        label = 'Quantity'
                        fullWidth
                        name='quantity'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>           

                <div className='ButtonsBookDetailsAdmin'>
                    <Button style={{color:'white', backgroundColor : '#4285F4' , textTransform: 'none'}}
                            onClick={this.onSave}
                    > 
                        <DoneOutlinedIcon/> Save</Button>
                    <Button style={{backgroundColor:'#61605e' ,color : 'white', textTransform: 'none'}}
                            onClick={this.props.closeDialog}
                    >
                        <ClearOutlinedIcon/> Cancel
                    </Button>
                </div>    
            
            </div>
        );
    }
}

export default BookDecription;