import React from "react";

const Signin=()=>{
    return(
<div id="main">

<div id="features1">
    <h1>Features </h1>

    <div id="one"> <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-mouse-hand-click-image_2281134.jpg" alt="" /> 
    <span id="two">Digitize <br />
    <p>A Bird eye view of the entire Biomedical Operations.</p>
    </span> <br />
     </div>

     <div id="one"> <img src="https://w7.pngwing.com/pngs/325/351/png-transparent-target-corporation-bullseye-shooting-target-target-miscellaneous-ink-logo.png" alt="" /> 
    <span id="two">Track <br />
    <p>Track the product life cycle and service history.</p>
    
    </span> <br />
     </div>

     <div id="one"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTTpS3bz39EJ9iQtimLtwHHDGytr6T2Rukw&usqp=CAU" alt="" /> 
    <span id="two">Biomedical Budget <br />
    <p>Regular and save budget through analysed data and information.</p>
    </span> <br />
     </div>



</div>

<div id="features2">

    <h1 id="top">Sign in</h1>     <hr></hr>
  

    <form id="form">
        <h3>Sign in to your account</h3>
        <div className="mb-3">
          <label for="email">Email address</label>
          <input id="email"
            type="email"
            className="form-control"
            placeholder="xxxxxxxxxx" required="required"
          />
        </div>
        <div className="mb-3">
          <label for="pass">Password</label>
          <input id="pass"
            type="password"
            className="form-control"
            placeholder="xxxxxxxxxx" required="required"
          />
        </div>
        <p id="fp">
          Forgot Password
        </p>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
           Sign in
          </button>

          <p id="ftn">
         New to Vajra?      <a href="">Sign Up Now </a>
        </p>
        </div>
        
      </form>

</div>



</div>


    )
}
export default Signin