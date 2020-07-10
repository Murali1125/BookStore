import React, { Component } from 'react';

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
            })        
        }
        this.setState({
            dummyBookData :  tempBooksArry
        })
    }
    render() {

        const books = this.state.dummyBookData.map((book,index)=>{
                return(
                    <div>
                        <div>
                            <img    src={book.imageUrl} 
                                    alt={book.title +"\n"+ book.author} 
                                    style={{height : '150px', width:'100px'}} />
                        </div>
                        <div>
                            Title : {book.title} 
                        </div>
                    </div>
                )
                
        });
        return (
            <div>
                {books}
            </div>
        );
    }
}

export default BookDetailsAdmin;