import React from 'react';
import Section1 from './WelSection1';
import Card from './Cards';
import Pdata from './ProjectConst';
import Contact from './Contact';
import './css/Main.css';


function pcard(val){
    return(
    <Card 
        key={val.id}
        imgsrc={val.imgsrc}
        ptitle={val.ptitle}
        pcontent={val.pcontent}
    />
    );
}

function Main(){
    return(
        <>
        <div id="main">
            {/* -- Section One -- */}
                <Section1/>
            {/* -- Section Two -- */}
            <section id="two">
                <h2>Our services</h2>
                <div className="row"> 
                {Pdata.map(pcard) }
                </div>
            </section>
            {/*Section three*/}
            <Contact/>
        </div>

        
        </>
    )
}
export default Main;