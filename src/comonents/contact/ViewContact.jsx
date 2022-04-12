import React from "react";
import { Link } from "react-router-dom";
let ViewContact=() =>{
    return (
        <React.Fragment>
           <section className="view-contact-intro p-3">
               <div className="container">
                   <div className="row">
                       <div className="col">
                           <p className="h3 text-warning fw-bold">View Contact</p>
                       </div>
                   </div>
               </div>
           </section>
           <section className="view-contact mt-3">
               <div className="container">
                   <div className="row align item-center">
                       <div className="col-md-4"> 
                          <img src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png" alt="" className="contact-img"/>
                       </div>
                       <div className="col-md-8">
                       <ul className="list-group">
                                 <li className="list-group-item list-group-item-action">
                                         Name :<spam className="fw-bold">Shivam</spam>
                                       </li>
                                 <li className="list-group-item list-group-item-action">
                                       Mobile  :<spam className="fw-bold">7583839239</spam>
                                     </li>
                                 <li className="list-group-item list-group-item-action">
                                        Email :<spam className="fw-bold">Shivam@gmail.com</spam>
                                 </li>
                                 <li className="list-group-item list-group-item-action">
                                        Title :<spam className="fw-bold">Shivam@gmail.com</spam>
                                 </li>
                                  <li className="list-group-item list-group-item-action">
                                        Group :<spam className="fw-bold">Shivam@gmail.com</spam>
                                 </li>
                                 
                         </ul>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col">
                           <Link to={'/contact/list'} className="btn btn-warning"> Back</Link>
                       </div>
                   </div>
               </div>
           </section>
        </React.Fragment>
    )
};
export default ViewContact;