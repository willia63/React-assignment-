//Import all dependencies, other Components
import { useState } from 'react';
import Demo1 from './DEMO1';
import Demo2 from './DEMO2';
import Demo3 from './DEMO3';
import Demo4 from './DEMO4';
import Demo5 from './DEMO5';


//Function Component
function AdvancedJS() {    
    //State
    const [clickedButton, setClickedButton] = useState(0);
    const toggleDemo = (index) => {
        setClickedButton(index);
    }
    //Component UI: HTML Rendering
    return(<>
        <div style={{minHeight: '60vh'}}>            
            {/*BUTTONS AND DEMOS*/}
            <div class="row mt-2 p-0">
                {/*Column 1 */}
                <div class="col-12 col-md-2 bg-primary ">
                    <div class="row">
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(1)}>DEMO-1 </button>
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(2)}>DEMO-2 </button>     
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(3)}>DEMO-3 </button>
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(4)}>DEMO-4 </button>                  
                        <button class="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(5)}>Statement of Authenticity</button>
                    </div>
                </div>
               {/*Column 2*/}
                <div class="col-12 col-md-10 bg-secondary ">
                    <div class="row" style={{minHeight: '50vh'}}>                        
                        <div class="col-12" style={{display: clickedButton===1 ?'block': 'none'}}><Demo1/>Welcome to Demo1: Slide Show!<br></br>Discover a captivating slideshow showcasing the top-rated films. Get ready to explore the world of cinema as we take you through an array of iconic movie posters.</div>                  
                        <div class="col-12" style={{display: clickedButton===2 ?'block': 'none'}}><Demo2/>Welcome to Demo2: Manual Movie Poster Slideshow!<br></br>In this exciting showcase, you're in control! Get ready to explore a stunning array of iconic movie posters at your own pace. Flip through the cinematic history, one poster at a time, and discover the world of highly acclaimed films. Lights, camera, action, as you take the director's seat in this visual adventure!</div>
                        <div class="col-12" style={{display: clickedButton===3 ?'block': 'none'}}><Demo3/>Welcome to Demo3: Your Personalized Experience!<br></br>Prepare to be amazed by the next level of customization. With Demo3, your choices are saved, and you have the power to select not only the text size but also the background colour, creating a truly unique and immersive experience. Get ready to tailor your environment to your preferences and dive into a world of endless possibilities.</div> 
                        <div class="col-12" style={{display: clickedButton===4 ?'block': 'none'}}><Demo4/>Welcome to Demo4: Geolocator!</div>
                        <div class="col-12" style={{display: clickedButton===5 ?'block': 'none'}}><Demo5/></div> {/*Demo 5 */}
                    </div>
                </div>
            </div>            
        </div>        
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;
