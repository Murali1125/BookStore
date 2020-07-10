import React, { Component } from 'react';
import {Card, TextField, Button} from '@material-ui/core';
import "./DashboardAdmin";

class BookDetailsAdmin extends Component {
    constructor(props){
        super(props);
        this.state={

            // dummy variables
            dummyBookData:[],
        }
    }
    

    componentDidMount(){
        let tempBooksArry=[];
        for(var i=0;i<20;i++){            
            tempBooksArry.push({
                title : 'StructureAnalysis',
                decription : 'Structural analysis is the determination of the effects of loads on physical structures and their components. Structures subject to this type of analysis include all that must withstand loads, such as buildings, bridges, aircraft and ships. ... Structural analysis is thus a key part of the engineering design of structures.',
                author : 'S.S. Bhavikatti',
                imageUrl : 'https://panchayatrajengineers.files.wordpress.com/2019/02/11820192337156313445039947930760.jpg?w=640',
                price : '200',
                quantity : '15',
            })        
        }
        this.setState({
            dummyBookData :  tempBooksArry
        })
    }
    render() {

        const books = this.state.dummyBookData.map((book,index)=>{
                return(
                    <Card className='BookDetails'>
                        <div  className='TwoElementsAdmin'>
                            <div>
                                <img    src={book.imageUrl} 
                                        alt={book.title +"\n"+ book.author} 
                                        style={{height : '150px', width:'100px'}} />
                            </div>
                            <div>
                                <span className='lablesAdmin'>Title : </span>
                                    <span>
                                        <TextField 
                                            value={book.title} 
                                            InputProps={{
                                                disableUnderline: true,
                                            }} 
                                        />
                                    </span>
                            </div>
                        </div>
                        <div className='TwoElementsAdmin'>
                            <div>
                            <span className='lablesAdmin'>Author : </span>
                            <span><TextField 
                                        value={book.author}
                                        InputProps={{
                                            disableUnderline: true,
                                        }} 
                            /></span>
                            </div>
                            <div >
                                <span className='lablesAdmin'> Decription : </span>
                                <span><TextField 
                                            multiline
                                            value={book.decription}
                                            rowsMax= '5'
                                            InputProps={{
                                                disableUnderline: true,
                                            }} 
                                /></span>
                            </div>
                        </div >
                        <div className='TwoElementsAdmin'>
                            <div>
                                <span className='lablesAdmin'>Price : </span>
                                <span><TextField 
                                            value={book.price}
                                            style={{ width : '70px'}}
                                            InputProps={{
                                                disableUnderline: true,
                                                
                                            }} 
                                /></span>
                            </div>
                            <div>
                                <span className='lablesAdmin'>Quantity : </span>
                                <span><TextField 
                                            value={book.quantity}
                                            style={{ width : '70px'}}
                                            InputProps={{
                                                disableUnderline: true,
                                            }} 
                                /></span>
                            </div>
                        </div>
                        <div>
                            <Button className='ButtonsAdmin'>Save</Button>
                            <Button className="ButtonsAdmin">Remove</Button>
                        </div>
                    </Card>
                )
                
        });
        return (
            <div  className='BooksContainerAdmin'>
                {books}
            </div>
        );
    }
}

export default BookDetailsAdmin;