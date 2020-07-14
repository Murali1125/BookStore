import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Dialog, TextField} from '@material-ui/core';
import  './DashboardAdmin.scss'
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

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
        this.setState({ image: event.target.files[0],
                        imageUrl : URL.createObjectURL(event.target.files[0]) });
        console.log("imageUrl",this.state.imageUrl)
    }

    render() {
        return (
            <div className='BookDetailsAdmin'>                
                <div className='imageContainerAdmin'>
                    <img src={ (this.state.imageUrl !== null || this.state.imageUrl !== undefined ) ?  this.state.imageUrl : null }  alt="BookImage"
                         className='BookImageAdmin'
                         onClick={() =>
                          this.fileUpload.click()
                            }                                
                    />  
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
                        type='tel'
                        name='price'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.quantity} 
                        type='tel'
                        variant='outlined'
                        label = 'Quantity'
                        fullWidth
                        name='quantity'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>           

                <div>
                    <Button style={{color:'white', backgroundColor : '#4285F4'}}> 
                        <DoneOutlinedIcon/> Save</Button>
                    <Button><ClearOutlinedIcon/> Cancel</Button>
                </div>    
            
            </div>
        );
    }
}

export default BookDecription;