import React from 'react'
import Product from './Product';

import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />

            <div className="home__row">
                <Product id="123456" title="Lakdi-The Furniture Co. Home Office Study Desk/Table with Drawer" price={1234} rating={5} image="https://m.media-amazon.com/images/I/61ZTW8-QHYL._AC_UL320_.jpg" />
                <Product id="123457" title="Gizga Essentials G20 Multipurpose Laptop Table (Black)" price={1234} rating={4} image="https://m.media-amazon.com/images/I/612PgvHWhJL._AC_UL320_.jpg" />
            </div>

            <div className="home__row">
                <Product id="123451" title="BLUEWUD Clonard Engineered Wood Study Table, Laptop, Computer Table Desk for Home & Office (Large - Wenge)" price={124} rating={4} image="https://m.media-amazon.com/images/I/61ZTW8-QHYL._AC_UL320_.jpg" />
                <Product id="123452" title="Gadget Wagon Table Black Strong and Sturdy for Studies, Laptop, Patient Dining, Foldable, Multi Purpose. Made in India." price={134} rating={3} image="https://m.media-amazon.com/images/I/615pHomDrlL._AC_UL320_.jpg" />
                <Product id="123453" title="MULTI - TABLE Foldable and Adjustable Premium Multi Purpose Utility Table for Laptop, Dinner, Study (Black and Black)" price={234} rating={5} image="https://m.media-amazon.com/images/I/61q7vAw1+uL._AC_UL320_.jpg" />
            </div>

            <div className="home__row">
                <Product id="123454" title="Savya home­® Multifunction Wooden Foldable Bed Table- LA (Standard, Walnut)" price={124} rating={4} image="https://m.media-amazon.com/images/I/81qscpE0ZIL._AC_UL320_.jpg" />
            </div>
        </div>
    )
}

export default Home