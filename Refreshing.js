import React from 'react';

function RefreshOne() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
        <button style={{margin:"18px 0px 0px 0px", 
                      width:"60px", 
                      height:"40px",
                      borderRadius:"4px", 
                      backgroundColor:"#283D4A",
                      paddingTop:"-9.9cm",
                      border:'active',
                      borderColor:"#14AFF1",
                      cursor:'pointer',  
                    } }onClick={refreshPage}><img src='https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/2x/external-refresh-arrow-kmg-design-detailed-outline-kmg-design.png' 
                    style={{width:"30px",height:"30px",padding:"2px",justifyContent:"center",color:"black"}} alt='R'></img>
        </button>
    </div>
  );
}

export default RefreshOne;