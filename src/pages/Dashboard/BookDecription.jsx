import React, { Component } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Dialog, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

class BookDecription extends Component {
    constructor(props){
        super(props);
        this.state={
            isEditable : false,
            anchorEl : null,
            title : '',
            decription :'',
            author : '',
            imageUrl : '',
            price : '',
            quantity : '',
        }
    }

    onhandleClick = (event) => {
        this.setState({

        })
        setAnchorEl();
      };
    // on change of any field
    onChange = eve =>{
        this.setState({
            [eve.target.name] : eve.target.value
        })
    }
    render() {
        return (
            <div>
                
                <div>
                    <img src={this.state.imageUrl} alt="BookImage"/>
                </div>
                <div>
                    <TextField 
                        value={this.state.title} 
                        variant='outlined'
                        lable = 'Title'
                        name='title'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.author} 
                        variant='outlined'
                        lable = 'Author'
                        name='author'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>
                <div>
                    <TextField 
                        value={this.state.decription} 
                        variant='outlined'
                        lable = 'Decription'
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
                        lable = 'Price'
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
                        lable = 'Quantity'
                        name='quantity'
                        size='small'
                        inputProps={{style: { fontSize:'14px'}}}
                        onChange={this.onChange}   
                    />
                </div>               
            
            </div>
        );
    }
}

export default BookDecription;