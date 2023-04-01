import React from 'react'
import styled from 'styled-components'
function Invoice() {
    return (
        <Wraper>

            <div className='container'>

                <select id="myDropdown" name="dropdown">
                    <option value="option1">Blank Template</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>


                <div className='inner-cont' style={{backgroundColor:"white"}}>

                    <div className='flex'>
 

                   
                       <div className='flex1'>
                      <p style={{border:"2px dotted black",padding:"11px",width:"366px",fontSize:"19px"}}>Choose logo or drop it here</p>    
            
                      <select  name="dropdown" style={{width:"178px",height:"56px",marginTop:"20px",fontSize:"18px"}}>
                    <option value="option1">Blank Template</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
      

                      <p style={{width:"178px",height:"51px",border:"2px dotted black",textAlign:"center",marginTop:"18px",fontSize:"22px"}}>001</p>
                     
                       </div>
                       <div className='flex2'>
                    
                        <div style={{width:"252px",display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"10px"}}>
                        
                             <span style={{fontWeight:"bold",fontSize:"19px",marginTop:"14px"}}>Issue Date</span>
                            <span style={{border:"2px dotted black",padding:"15px",width:"101px",fontSize:"18px"}}>2023-03-30</span>
                        </div>
                        <div style={{width:"252px",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        
                             <span style={{fontWeight:"bold",fontSize:"19px",marginTop:"14px"}}>Due Date</span>
                            <span style={{border:"2px dotted black",padding:"15px",width:"101px",fontSize:"18px"}}>2023-04-30</span>
                        </div>
                       </div>
                       <div className='flex3'>
                       
                        <div style={{border:"2px dotted black",padding:"6px",width:"45%",fontSize:"20px",marginTop:"20px"}}>
                            <p>From</p>
                            
                            <span>Sender name</span> <br/>
                            <span>Sender contact details</span>

                        </div>
                        <div style={{border:"2px dotted black",padding:"6px",width:"45%",fontSize:"20px",marginTop:"20px"}}>
                            <p>To</p>
                            
                            <span>Recipient name</span> <br/>
                            <span>Recipient contact details</span>

                        </div>

                       </div>
                    

                    </div>
                 <h3 style={{border:"2px dotted black",textAlign:"center",padding:"16px",fontSize:"25px"}}>+ add new invoice item</h3>
 

                     <div className='flex4'>
                <div style={{width:"247px",height:"57px",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#c9c9c7"}}>
               
                        <span style={{marginTop:"14px",fontWeight:"bold",fontSize:"19px"}}>Invoice </span>
                        <select  name="dropdown" style={{marginTop:"9px",height:"41px",width:"171px",fontSize:"18px",backgroundColor:"#c9c9c7"}}>
                    <option value="option1">Blank Template</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                    </div>


                    <div>

                   <div className='small' style={{width:"247px"}}>
                    <span>Subtotal</span>
                    <span>$0.00</span>

                   </div>

                   <div className='small' style={{width:"247px"}}>
                    <span>Tax</span>
                    <span>$0.00</span>

                   </div>


                   <div className='small' style={{width:"247px"}}>
                    <span>Total</span>
                    <span>$0.00</span>

                   </div>

                    </div>

                     </div>
                </div>

            </div>
        </Wraper>
    )
}

export default Invoice

const Wraper = styled.section`

.container{
    width: 804px;
    margin: 90px auto;
    padding: 44px;
    background-color:#e9e9e9
}
.flex{
    display:flex;
    flex-direction:column;
}
.flex1{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
}
.inner-cont{
  
}
.flex2{
    display:flex;
    flex-direction:column;
    align-items: flex-end;

}
.flex3{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
.flex4{
   
    display:flex;
    flex-direction:column;
    align-items:flex-end;
   
}
.small{
    // border:2px solid yellow;
    width:150px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}

#myDropdown{
    width: 286px;
    height: 43px;
    margin-bottom: 13px;
    font-size: 17px;
}
.container{
    width: 804px;
    margin: 90px auto;
    padding: 44px;
    background-color:#e9e9e9
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
    .container{
        width: 90%;
        margin: 50px auto;
        padding: 30px;
    }

    .flex1 p{
        font-size: 16px;
    }

    .flex2 div{
        width: 200px;
    }

    .flex3 div{
        width: 45%;
        font-size: 16px;
    }

    .small{
        width: 120px;
        font-size: 16px;
    }
}

`