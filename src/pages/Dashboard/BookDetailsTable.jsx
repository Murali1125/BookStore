import React, { useState }  from 'react';
import {TextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { useEffect } from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import Truncate from 'react-truncate';
import BookDecription from './BookDecription';
import {Dialog,DialogTitle,DialogContent} from '@material-ui/core'
import Logo from './../../component/logo/Logo'


// styles
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);

const useStyles = makeStyles({
table: {
    minWidth: 700,
},
});
  
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

// function for table pagination
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function BookdDetailsTable(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data,setData] = useState([]);
  const [editable,setEdit] = useState(true)
  const [indexOfEditableBook,setEditIndex] = useState();
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const [bookData,setBookData] = useState()
  const [updateBook,setUpdate] = useState({update: false,
                                           bookdata : null})
  const [bookDetails,setBookDetails] = useState({
    title : '',
    decription :'',
    author : '',
    imageUrl : '',
    price : '',
    quantity : '',
  })

  useEffect(()=>{
    let tempBooksArry=[];
        for(var i=0;i<20;i++){            
            tempBooksArry.push({
                title : 'StructureAnalysis Structural analysis is the determination',
                decription : 'Structural analysis is the determination of the effects of loads on physical structures and their components. Structures subject to this type of analysis include all that must withstand loads, such as buildings, bridges, aircraft and ships.',
                author : 'S.S. Bhavikatti',
                imageUrl : 'https://panchayatrajengineers.files.wordpress.com/2019/02/11820192337156313445039947930760.jpg?w=640',
                price : '200',
                quantity : '15',
            })        
        }
        setData(tempBooksArry);
  },[])

  const onBookDetailsChange = index =>(eve)=>{
      setBookDetails({...bookDetails, [eve.target.name] : eve.target.value})  ;  
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let indexOfSelectedEditBook ='';
  const EditBook = (bookdata)=>{
    // setBookDetails(data[index])
    // setEditIndex(index);
    // setEdit(!editable);
    console.log("table book data", bookdata);
    props.showBook(bookdata) ;
  }
  const onSave =(index)=>{
    let tempData =data;
    tempData[index] = bookDetails;
    setData( tempData);
    setBookDetails(bookDetails);
    setEdit(!editable);
  }
 
  
  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <StyledTableCell align="center">S.No</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((book,index) => (                                  
            <StyledTableRow key={index }>
                <StyledTableCell  align="center">
                    {/* <img src ={book.imageUrl} alt ={book.title} 
                         style={{height : '50px', width:'75px'}}
                    /> */}
                    {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center" width='200px'>                   
                    { 
                    //  (editable)  && (index === indexOfEditableBook) ?  
                    //     <TextField                                             
                    //         value={bookDetails.title} 
                    //         name='title'
                    //         variant="outlined"
                    //         size='small'     
                    //         inputProps={{style: { fontSize:'14px',textAlign: 'center' }}}
                    //         onChange={onBookDetailsChange(index)}                       
                    //     /> : 
                        <Truncate lines={1} >
                          {book.title}
                       </Truncate>
                    }
                </StyledTableCell>
                <StyledTableCell align="center" width='200px' >                    
                  { 
                  // (editable)  && (index === indexOfEditableBook) ?  
                  //     <TextField                             
                  //         value={bookDetails.author} 
                  //         name='author'
                  //         variant="outlined"
                  //         size='small'
                  //         inputProps={{style: {fontSize:'14px', textAlign: 'center' }}}
                  //         onChange={onBookDetailsChange(index)}                           
                  //     /> : 
                      <Truncate lines={1} ellipsis={<span >...</span>}>
                        {book.author}
                      </Truncate>
                  }                    
              </StyledTableCell>
              <StyledTableCell align="center" width='100px'>
                  {/* { (editable)  && (index === indexOfEditableBook) ?  
                      <TextField 
                          name='price'
                          variant="outlined"
                          size='small'
                          value={bookDetails.price} 
                          inputProps={{style: { fontSize:'14px',textAlign: 'center' }}}
                          onChange={onBookDetailsChange(index)}   
                          
                      /> :  */}
                      { book.price }
              </StyledTableCell>
              <StyledTableCell align="center" width='100px'>
                  {/* { (editable)  && (index === indexOfEditableBook) ?  
                      <TextField
                          name='quantity'
                          value={bookDetails.quantity} 
                          variant="outlined"
                          size='small'
                          inputProps={{style: { fontSize:'14px', textAlign: 'center' }}}
                          onChange={onBookDetailsChange(index)}   /> : */}
                      { book.quantity}
                  {/* } */}
              </StyledTableCell>
              <StyledTableCell align="center" >                  
                      {/* { (editable)  && (index === indexOfEditableBook) ?
                        <IconButton onClick={()=>onSave(index) }>
                            <DoneOutlinedIcon />
                        </IconButton>  : */}
                       <IconButton onClick={()=>EditBook(book) }>
                            <EditOutlinedIcon  /> 
                        </IconButton>
                        {/* } */}
                  
              </StyledTableCell>
              <StyledTableCell align="center">
                  <IconButton>
                      <DeleteOutlineOutlinedIcon/>
                  </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
   
  </div>
  );
}
