
import React, {useState, useEffect} from 'react'

function App() {

  useEffect(() => {
    let preItem = localStorage.getItem('regist');
    if (!preItem)
      setTimeout(() => {
        document.getElementById("myModal").style.display = "block";
      }, 2000);
  }, []);

  const clickBtnClose = () => {
    document.getElementById("myModal").style.display = "none";
    setTimeout(() => {
      document.getElementById("myModal").style.display = "block";
    }, 2000);
  }

  const clickBtnReally = () => {
    localStorage.setItem('regist', true);
    document.getElementById("myModal").style.display = "none";
  }


  return (
    <>
      <div className = "container mt-3">
        <h3>The Modal appeared after 5 seconds</h3>
        
      </div>

      <div className ="modal" id="myModal" style = {{backgroundColor: "#111"}}>
        <div className ="modal-dialog modal-lg">
          <div className = "modal-content">
            <div className = "modal-body text-center">
                <h4>Do you need micro business loans?</h4>
                <p>Quick loans for businessed, invoice financing and flexible loans</p>
                <div className = "d-flex justify-content-center">
                  <div>
                    <img src = "./assets/pic1.PNG" /><br/>
                    <button className='btn' style ={{backgroundColor: "rgb(133, 88, 159)", color: "white"}} onClick = {clickBtnReally}>NOT REALLY</button>
                    
                  </div>
                  <div>
                    <img src = "./assets/pic2.PNG" /> <br/>
                    <button className = 'btn' style ={{backgroundColor: "#41a7a3", color: "white"}} onClick = {clickBtnReally}>YES! EXTRA MONEY</button>
                  </div>
                </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick = {clickBtnClose}>Close</button>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
