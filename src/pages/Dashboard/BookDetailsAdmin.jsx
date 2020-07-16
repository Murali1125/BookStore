import React, { Component } from 'react';
import {Card, TextField, Button} from '@material-ui/core';
import "./DashboardAdmin";
import {withStyles} from '@material-ui/core/styles';
import Truncate from 'react-truncate';

const useStyles = (theme)=>({
    
    saveButton : {
        backgroundColor : '#3371B5',
        color : 'white'
    },
    removeButton : {
        backgroundColor : '#f55f5f',
        color : 'white'
    },

})
    


class BookDetailsAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonsVisible:false,
            bookIndex:'',
            editModeEnable :'',
            // dummy variables
            dummyBookData:[],
        }
    }
    componentDidMount(){
        let tempBooksArry=[];
        for(var i=0;i<20;i++){            
            tempBooksArry.push({
                title : 'StructureAnalysis',
                decription : 'Structural analysis is the determination of the effects of loads on physical structures and their components. Structures subject to this type of analysis include all that must withstand loads, such as buildings, bridges, aircraft and ships.',
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

    // on mouse enter on the book details container
    OnHover = (index) =>{
        this.setState({
            buttonsVisible : true,
            bookIndex : index,
        });
    }
    OffHover = () =>{
        this.setState({
            buttonsVisible : false,
        });
    }
    OnImageHover = (eve) =>{
        console.log('onImageHover Hello')
    }
    render() {
        const {classes} = this.props;
        const visability = this.state.buttonsVisible;
        const books = this.state.dummyBookData.map((book,index)=>{
                return(
                    <Card   className='BookDetails' 
                            key={index} 
                            onMouseEnter={()=>this.OnHover(index)}
                            onMouseLeave={()=>this.OffHover()}
                            >
                        <div  className='imageAndTitleAdmin'>
                            <div className="bookimageAdmin">
                                <img    src={book.imageUrl} 
                                        alt={book.title +"\n"+ book.author} 
                                        style={{height : '200px', width:'140px'}}
                                        onMouseEnter={()=>this.OnImageHover()} />
                            </div>                            
                        </div>
                        <div  className='authortitleDecription' >
                            <div className="lableAndFieldsAdmin">
                                <span className='lablesAdmin'>Title           : </span>
                                    <span>
                                        <TextField 
                                            className="decriptionTextFiedAdmin"
                                            fullWidth
                                            value={book.title} 
                                            InputProps={{
                                                disableUnderline: true,                                                
                                            }} 
                                        />
                                    </span>
                            </div>
                            <div className='lableAndFieldsAdmin'>
                            <span className='lablesAdmin'>Author       : </span>
                            <span><TextField 
                                        fullWidth
                                        value={book.author}
                                        InputProps={{
                                            disableUnderline: true,
                                        }} 
                            /></span>
                            </div>
                            <div className='lableAndFieldsAdmin' >
                                <span className='lablesAdmin'>Decription : </span>
                                <span className='decriptionTextFieldAdmin'>
                                    <Truncate 
                                        lines ={2}
                                        ellipsis={<span>...</span>}
                                    >
                                    <TextField 
                                            multiline
                                            className="SearchfieldAdmin"
                                            fullWidth
                                            className='decriptionAdmin'
                                            value={book.decription}
                                            rowsMax= '2'
                                            InputProps={{
                                                disableUnderline: true,
                                                
                                            }} 
                                />
                                </Truncate></span>
                            </div>
                            <div className="PriceQuantityButtonsAdmin">
                                <div className="priceQuantityContainerAdmin">
                                    <span className='lablesAdmin'> Price          : </span>
                                    <TextField 
                                    className='quantityPriceTextFiledAdmin'
                                        value={book.price}
                                        InputProps={{
                                            disableUnderline: true,
                                            
                                        }} 
                                    />
                                </div>
                                <div className="priceQuantityContainerAdmin">
                                    <span className='lablesAdmin'> Quantity  : </span>
                                    <span >
                                    <TextField 
                                        value={book.quantity}
                                        className='quantityPriceTextFiledAdmin'
                                        InputProps={{
                                            disableUnderline: true,
                                            width : '50px',
                                            
                                        }} 
                                    />
                                    </span>
                                </div>
                                <div className="buttonsAdmin">
                                    <div className= {( visability && (this.state.bookIndex === index) )? "ButtosContainerOn" : "ButtonsContainerOff"}>
                                        <Button className={classes.saveButton}    >Edit</Button>
                                    </div>
                                    <div className= { ( visability && (this.state.bookIndex === index) )? "ButtosContainerOn" : "ButtonsContainerOff" }>
                                        <Button className={classes.removeButton} >Remove</Button>
                                    </div>
                                </div>
                            </div>

                        </div>                       
                        {/* <div className="ButtosContainer">
                            <Button className={classes.saveButton}    >Edit</Button>
                            <Button className={classes.removeButton} >Remove</Button>
                        </div> */}
                    </Card>
                )
                
        });
        return (
            <div  className='BooksContainerAdmin'>
                <div className='inventaryAdmin'>Books</div>
                {books}
            </div>
        );
    }
}

export default  withStyles(useStyles)(BookDetailsAdmin);