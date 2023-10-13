import React from 'react';

import { Carousel } from 'primereact/carousel';
import "./Carousel.css"




export default function CarouselComponent () {
    const cardDataList = [
        {
          id: 1,
          imageUrl:"https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format",
          title: 'Nevermind',
          description: 'This is the first card.',
          note: 3.4
        },
        {
          id: 2,
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG",
          title: 'Highway to hell',
          description: 'This is the second card.',
          note: 3.9
        },
        {
        id: 3,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg",
        title: 'Paranoid',
        description: 'This is the third card.',
        note: 4.2
          },
          {
            id: 4,
            imageUrl:"https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format",
            title: 'Nevermind ',
            description: 'This is the first card.',
            note: 4.6
          },
          {
            id: 5,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG",
            title: 'Highway to hell',
            description: 'This is the second card.',
            note: 4.1
          },

          {
          id: 6,
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg",
          title: 'Paranoid',
          description: 'This is the third card.',
          note: 4.2
            },
        
      ];
    
      const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];



    const Template = (cardData) => {
        return (
            <div className="cards">
                <div className="image">
                    <img src={cardData.imageUrl} alt={cardData.title} className="" style={{width:"100px"}} />
                </div>
                <div className="description">
                 
                    <h4 className='title' >{cardData.title}</h4>
                  
                    <p  className='note'> {cardData.note}</p>
                 
                    
                  
                </div>
            </div>
        );
    };

    return (
      <>
      <hr className="horizontal-line" /> 
        <div >
            <Carousel value={cardDataList} numVisible={5} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={Template} />
        </div>
      </>
    )

}




