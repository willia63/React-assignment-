//Import all dependencies, other Components
import FormCustomerDetail from './FormCustomerDetail';
import FormRepairDetail from './FormRepairDetail';
import FormCourtesyPhone2 from './FormCourtesyPhone2';
import FormCost1 from './FormCost1';
import FormButtons from './FormButtons';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

//Function Component
function Home2() {
    //Parent Component "Home"  
    const updateSharedState = (value) => setsharedBond(value);//Child1(FormCourtesyPhone) pass data to Child2  
    const [sharedBond, setsharedBond] = useState(0);//Child2(FormCost) receive data from Child1     
    //
    const navigate = useNavigate();
    const onSubmit = async(event) => {    
        event.preventDefault();//prevent browser from sending data to server
        try {
            //open the "Invoice" component
            navigate("/invoice");
        }
        catch(e) {
            alert('ERROR!!!');    
        }
    }
 
    //Component UI: HTML Rendering
    return(<>
      <div class='container-fluid'>
        <form class="row" style={{minHeight: '60vh'}} onSubmit={onSubmit} >
            {/*Customner Details*/}
            <div class="col-12 col-lg-4 p-4 m-0" 
                 style={{minHeight:'30vh', backgroundColor:'#FCF3CF'}}> <FormCustomerDetail />           
            </div>

            {/*Repair Details*/}
            <div class="col-12 col-lg-4 p-4 m-0" 
                 style={{minHeight:'30vh', backgroundColor:'#D5F5E3'}}><FormRepairDetail />          
            </div>  

            {/*Courtesy Phone & Cost*/}
            <div class="col-12 col-lg-4 p-0 m-0">    
                {/*Courtesy phone*/}
                <div class="p-4" style={{minHeight:'30vh', backgroundColor:'#2874A6'}}> 
                    <FormCourtesyPhone2 passDataToParent={updateSharedState} /> {/*Child1*/}
                </div>
                {/*Cost*/}
                <div class="p-4" style={{minHeight:'20vh', backgroundColor:'#EDBB99'}}>
                    <FormCost1 sharedPropBond={sharedBond} /> {/*Child2*/}
                </div>              
            </div>  

            {/*Button area*/}
            <div class="p-4 text-center" style={{minHeight: '10vh', backgroundColor: '#EDBB99'}}>
                <FormButtons />
            </div>  
        </form>
      </div>
    </>);
}
//Export this component to the entire app, can be re-used or hooked into other Components
export default Home2;
