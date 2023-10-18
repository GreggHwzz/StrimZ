import './Review.css'
import React, { useState, useMemo } from 'react';
import write from '../img/ecrire.png'
import data from '../mock-data.json';
import Pagination from '../components/pagination/Pagination';

let PageSize = 5;

function truncateText(text, characterLimit) {
    if (text.length <= characterLimit) {
      return text;
    } else {
      return text.substring(0, characterLimit) + "...";
    }
  }

export default function Review() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

    return (
    <>
    <div className="page-container">
        <div className="top">
            <img style={{width:'15%', paddingTop:'3%'}} alt="album" src="https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format" />
            <div className='albumDescription'>
                <h1 style={{fontSize:"40px", marginBottom: "0px"}}>Nevermind</h1>
                
                <p id="note" > 4.2 </p>
            </div>
        </div>
    </div>
    <div className='white-container'>
        <div className="centered-container">
            <div className='left-container'>
                <div id="writeReview"> 
                    <div className='writeimg'>
                        <img style={{width:"55%"}} src={write} alt=""/>
                    </div>
                    <div className="writeText">
                        <p > Write a review</p>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <p > Album by Nirvana · 09/24/1991</p>
                
                <h2> USER REVIEWS</h2>
                <hr className="horizontal-line" /> 
                <table className='reviewsTable'>
                    
                    <tbody >
                    {currentTableData.map(item => {
                        
                        return (
                        <div style={{paddingBottom:"15px"}}>
                        <tr style={{ fontWeight:"bold"}}>
                            <td >   {item.first_name} {item.last_name}'s review · <span style={{color:'#fccf1b'}}>{item.note}/5</span></td>
                        </tr>
                        <tr>
                            <td> {truncateText(item.review, 200)}</td>
                        </tr>
                        <tr>
                            <td style={{color:'#fccf1b'}}> Read the review</td>
                        </tr>
                        <tr style={{fontSize:"small"}}> by {item.first_name} {item.last_name} on {item.date} </tr>
                        
                        </div>
                        );
                    })}
                    </tbody>
                </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.items.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
            </div>
        </div>
       
    </div>
    
     </>
    );
}