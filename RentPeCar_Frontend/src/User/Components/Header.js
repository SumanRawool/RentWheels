// import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { DropdownButton, Dropdown, Button } from "react-bootstrap";
// export const Header = () => {
//   let user = null;
//   const history = useHistory();
//   const [username, setUserName] = useState("");
//   useEffect(() => {
//     let isActive = sessionStorage.getItem("isActive");
//     user = JSON.parse(sessionStorage.getItem("user"));
//     console.log(user);
//     var dropdown = document.getElementById("dropdown-basic-button");
//     var login = document.getElementById("loginbtn");
//     var register = document.getElementById("registerbtn");
//     console.log(isActive);
//     if (isActive !== null && user.data !== null) {
//       setUserName(user.data.username);
//       dropdown.style.visibility = "visible";
//       dropdown.className = "btn btn-light";
//       dropdown.style.position = "relative";
//       login.style.position = "absolute";
//       register.style.position = "absolute";
//       login.style.visibility = "hidden";
//       register.style.visibility = "hidden";
//     } else {
//       login.style.visibility = "visible";
//       register.style.visibility = "visible";
//       dropdown.style.position = "absolute";
//       login.style.position = "relative";
//       register.style.position = "relative";
//       dropdown.style.visibility = "hidden";
//     }
//   });
//   return (
//     <div className="nav-header">
//       <header style={{ position: "static" }} class="ps-3 bg-dark text-white">
//         <div>
//           <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//             <Link
//               to="/home"
//               class=" d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
//             >
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfS0WzwP5LPMDjKIQlaNvXeqmtOcHw7dSug&s" alt="logo" style={{height:"100px"}} />
//               <span style={{ color: "#eeca3c" ,fontSize:"50px",fontFamily:"monospace",marginLeft:"5px",fontWeight:"bold"}}> RentWheels </span>
//             </Link>

//             <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
//               <li className="nav-item">
//                 <Link className="btn px-2 me-2 btn-dark btn-outline-info text-light" to="/home">
//                   Home <i class="fas fa-home"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="btn px-2 me-2 btn-dark btn-outline-info text-light" to="/car_list">
//                   All Cars <i class="fas fa-car"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="btn px-2 me-2 btn-dark btn-outline-info text-light" to="/about_us">
//                   About Us <i class="fas fa-info-circle"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="btn px-2 me-3 btn-dark btn-outline-info text-light" to="/contact_us">
//                   Contact Us <i class="fas fa-mobile"></i>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   id="registerbtn"
//                   className="btn px-3 btn-dark btn-outline-primary text-light"
//                   to="/register"
//                 >
//                   Register <i class="fas fa-user-plus"></i>
//                 </Link>
//               </li>
//               <li className="px-3 nav-item header-user js-nav-user-dropdown dropdown show">
//                 <Link
//                   id="loginbtn"
//                   style={{ visibility: "visible", position: "absolute" }}
//                   className="btn px-4 btn-dark btn-outline-success text-light"
//                   to="/signin"
//                 >
//                   <span>
//                     Login <i class="fas fa-sign-in-alt"></i>
//                   </span>
//                 </Link>
//                 <DropdownButton
//                   title={
//                     <div>
//                       {username}{" "}
//                       <span>
//                         <i class="fas fa-user"></i>
//                       </span>
//                     </div>
//                   }
//                   id="dropdown-basic-button"
//                   style={{ visibility: "unset", position: "relative" }}
//                 >
//                    <Dropdown.Item>
//                     <Link
//                       className="btn btn-outline-dark me-3"
//                       to="/car_type"
//                     >
//                      Book New Ride<i class="fas fa-user-edit"></i>
//                     </Link>
//                   </Dropdown.Item>
//                   <Dropdown.Item>
//                     <Link
//                       className="btn btn-outline-dark me-3"
//                       to="/my_bookings"
//                     >
//                       My Booking <i class="fas fa-people-carry"></i>
//                     </Link>
//                   </Dropdown.Item>
//                   <Dropdown.Item>
//                     <Link
//                       className="btn btn-outline-dark me-3"
//                       to="/update_profile"
//                     >
//                       Update Profile <i class="fas fa-user-edit"></i>
//                     </Link>
//                   </Dropdown.Item>
//                   <Dropdown.Item>
//                     <Link
//                       className="btn btn-outline-dark me-3"
//                       to="/reset_password"
//                     >
//                       Reset Password  < i class="fas fa-user-edit"></i>
//                     </Link>
//                   </Dropdown.Item>
                 

//                   <Dropdown.Item>
//                     <Link to="/signoff" className="btn btn-outline-dark me-3">
//                       Logout <i class="fas fa-sign-out-alt"></i>
//                     </Link>
//                   </Dropdown.Item>
//                 </DropdownButton>
//               </li>
//               <li></li>
//             </ul>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const Header = () => {
  let user = null;
  const history = useHistory();
  const [username, setUserName] = useState("");

  useEffect(() => {
    let isActive = sessionStorage.getItem("isActive");
    user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);

    var dropdown = document.getElementById("dropdown-basic-button");
    var login = document.getElementById("loginbtn");
    var register = document.getElementById("registerbtn");

    console.log(isActive);

    if (isActive !== null && user.data !== null) {
      setUserName(user.data.username);
      dropdown.style.visibility = "visible";
      dropdown.className = "btn btn-light";
      dropdown.style.position = "relative";
      login.style.position = "absolute";
      register.style.position = "absolute";
      login.style.visibility = "hidden";
      register.style.visibility = "hidden";
    } else {
      login.style.visibility = "visible";
      register.style.visibility = "visible";
      dropdown.style.position = "absolute";
      login.style.position = "relative";
      register.style.position = "relative";
      dropdown.style.visibility = "hidden";
    }
  });

  return (
    <div className="nav-header">
      <header style={{ position: "static", backgroundColor: "white", color: "black" }} className="ps-3">
        <div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/home"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-black text-decoration-none"
            >
              <img
                src="https://i.pinimg.com/736x/c2/47/3e/c2473e0a50b16bb9a38a55464b5daf10.jpg"
                alt="logo"
                style={{ height: "80px" }}
              />
              <span
                style={{
                  color: "#0b113b",
                  fontSize: "50px",
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                RentWheels
              </span>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li className="nav-item">
                <Link className="btn px-2 me-2 btn-outline-info text-dark" to="/home">
                  Home <i className="fas fa-home"></i>
                </Link>
              </li>
              <li>
                <Link className="btn px-2 me-2 btn-outline-info text-dark" to="/car_type">
                  All Cars <i className="fas fa-car"></i>
                </Link>
              </li>
              <li>
                <Link className="btn px-2 me-2 btn-outline-info text-dark" to="/about_us">
                  About Us <i className="fas fa-info-circle"></i>
                </Link>
              </li>
              <li>
                <Link className="btn px-2 me-3 btn-outline-info text-dark" to="/contact_us">
                  Contact Us <i className="fas fa-mobile"></i>
                </Link>
              </li>

              <li>
                <Link
                  id="registerbtn"
                  className="btn px-3 btn-outline-primary text-dark"
                  to="/register"
                >
                  Register <i className="fas fa-user-plus"></i>
                </Link>
              </li>
              <li className="px-3 nav-item header-user js-nav-user-dropdown dropdown show">
                <Link
                  id="loginbtn"
                  style={{ visibility: "visible", position: "absolute" }}
                  className="btn px-4 btn-outline-success text-dark"
                  to="/signin"
                >
                  <span>
                    Login <i className="fas fa-sign-in-alt"></i>
                  </span>
                </Link>
                <DropdownButton
                  title={
                    <div>
                      {username}{" "}
                      <span>
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  }
                  id="dropdown-basic-button"
                  style={{ visibility: "unset", position: "relative" }}
                >
                  <Dropdown.Item>
                    <Link
                      className="btn btn-outline-dark me-3"
                      to="/car_type"
                    >
                      Book New Ride <i className="fas fa-user-edit"></i>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="btn btn-outline-dark me-3"
                      to="/my_bookings"
                    >
                      My Booking <i className="fas fa-people-carry"></i>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="btn btn-outline-dark me-3"
                      to="/update_profile"
                    >
                      Update Profile <i className="fas fa-user-edit"></i>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="btn btn-outline-dark me-3"
                      to="/reset_password"
                    >
                      Reset Password <i className="fas fa-user-edit"></i>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/signoff" className="btn btn-outline-dark me-3">
                      Logout <i className="fas fa-sign-out-alt"></i>
                    </Link>
                  </Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
