import React from 'react';
import Image1 from './Images/Jignasa.jpg'; 
import Image2 from './Images/Krushi.jpg';
import Image3 from './Images/Mrunmayi.png';
import Image4 from './Images/Shantanu.jpg';
import Image5 from './Images/Suman.jpg'; 
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';


const AboutUs = () => {
    return (
        <>
           <Header />
            <h1 className="text-center my-4">Meet Our Team</h1>
            <div className="container" style={{ marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src={Image1} className="card-img-top" alt="Jignasa Mehta" style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Jignasa Mehta</h5>
                                <p className="card-text">PNR:240340320045</p>
                                <p className="card-text">PG DAC-Kharghar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={Image2} className="card-img-top" alt="Krushi Mehta" style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Krushi Mehta</h5>
                                <p className="card-text">PNR:240340320053</p>
                                <p className="card-text">PG DAC-Kharghar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={Image3} className="card-img-top" alt="Mrunmayi Pathak" style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Mrunmayi Pathak </h5>
                                <p className="card-text">PNR:240340520044</p>
                                <p className="card-text">PG DAC-Juhu</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image4} className="card-img-top" alt="Shantanu Shegedar" style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Shantanu Shegedar</h5>
                                <p className="card-text">PNR:240340520078</p>
                                <p className="card-text">PG DAC-Juhu</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image5} className="card-img-top" alt="Suman Rawool" style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Suman Rawool</h5>
                                <p className="card-text">PNR:240340520088</p>
                                <p className="card-text">PG DAC-Juhu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;

