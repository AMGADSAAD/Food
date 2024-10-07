import React from 'react';
import Header from './Header';
import './Home.css';
import prideimg from './../../assets/1.png' ;
import ingredients from './../../assets/2.png' ;
import Data from '../../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

import { faAtlas } from '@fortawesome/free-solid-svg-icons/faAtlas';


const Home = () => {

    const blogitem = Data.map((item)=>{
      return(
        <div className='col-md-4'>
          <div className="box">
            <img src={item.img}/>
            <h5>{item.titel}</h5>
            <span>{item.time}</span>
            <h6>{item.price}</h6>
          </div>
          <button><a href="#">order now</a></button>
        </div>
      )
    })

  return (
    <>
      <Header />
      <section className='numbers'> 
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>Savings</h6>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h6>Photos</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>Rockets</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>Globes</h6>
            </div>
          </div>
        </div>
      </section>
      <section className='pride'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             <img src={prideimg} alt="prideimg" />
            </div>
            <div className="col-md-6">
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <button> learn more </button>
              
            </div>
          </div>
        </div>
      </section>
      <section className='ingredients'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>learn more</button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} alt="ingredients" />
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className="paralex">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md 12">
                  <h2>When a man's stomach is full it makes no <br/> difference whether he is rich or poor.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                    <br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href="#">Watch Our Story</a>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section>
        <div className="blogs">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                 
              </div>
              <div className="row">
                {blogitem}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text'>
        <div className="container">
          <div className="row">
          
              <h2>Frequently Asked Questions</h2>
          
            <div className="col-lg-6">
              <h6>~ Is Foodera Bread really baked fresh each day?</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              <h6>~ Can I order your products online?</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

            </div> 

            <div className="col-lg-6">
              <h6>~ Do you bake breads containing animal fats or products?</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              <h6>~ When are you opening a shop near me?</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
          </div>
        </div>


     
      </section>
       <section className='formx'>
       <div className="container">
          <div className="row">
            <div className="col-md-12">
               <h2>Hurry up! Subscribe our newsletter <br />and get 25% Off</h2>
               <h5>Limited time offer for this month. No credit card required.</h5>
               <div className="inputs">
                <input type="text" placeholder='Email Address here'/>
                <button>
                  <a href="">Subscribe</a>
                </button>
               </div>
            </div>
          </div>
        </div>
       </section>
       <footer>
       <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <ul>
                <li>Register</li>
                <li>Forum</li>
                <li>Affiliate</li>   
                <li>faq</li>
              </ul>
              <div className="icon">
                <li> <FontAwesomeIcon icon={faHome}/> </li>
                <li><FontAwesomeIcon icon={faPhone}/></li>
                <li><FontAwesomeIcon icon={faAddressCard}/></li>
                <li><FontAwesomeIcon icon={faAtlas}/></li>
              </div>
              <p>© 2021. Foodera. All rights reserved.</p>
            </div>
          </div>
        </div>
       </footer>
    </>
  )
}

export default Home
