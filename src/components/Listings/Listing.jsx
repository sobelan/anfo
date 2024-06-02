import React from 'react';
import "./Listing.css";
import sections from '../../constants/data';
import {MdStar} from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Listing = () => {

    let startList;
    const showRating = (starCount) => {
        startList = new Array(starCount);
        for(let i = 0; i < startList.length; i++){
            startList[i] = "";
        }
        return startList;
    }

  return (
    <section className='listings section-p bg-md-black' id = "listings">
        <div className='container'>
            <div className='listings-content'>
                <div className='section-t text-center'>
                    <h3>Explore Properties</h3>
                    <p className='text'>a Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias voluptatum, tempore dignissimos perferendis ea.</p>
                </div>

                <div className='item-list grid text-white text-center'>
                    {
                        sections.listings.map(listing => {
                            showRating(listing.rating);
                            return (
                                <div className='item translate-effect bg-dark' key = {listing.id}>
                                    <div className='item-img'>
                                        <img src = {listing.image} alt = "" />
                                    </div>
                                    <h4 className='item-name'>{listing.name}</h4>
                                    <p className='item-text text'>{listing.text}</p>
                                    <ul className='flex item-rating flex-center'>
                                        {
                                            startList.map((star, index) => {
                                                return (
                                                    <li key = {index}>{star}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Listing
