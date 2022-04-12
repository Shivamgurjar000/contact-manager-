import React from "react";
import { Link } from "react-router-dom";
let AddContact=() =>{
    return (
        <React.Fragment>
           <section className="add-contact p-3">
               <div className="container">
                   <div className="row">
                       <div className="col">
                           <p className=" h4 text-success fw-bold">Create Contact</p>
                       </div>
                   </div>
                   <div className="row align item-center">
                       <div className="col-md-4">
                           <form>
                               <div className="mb-2">
                                   <input type="text" className="form-contorl" placeholder="Name"/>
                               </div>
                               <div className="mb-2">
                                   <input type="text" className="form-contorl" placeholder="Photo Url"/>
                               </div>
                               <div className="mb-2">
                                   <input type="number" className="form-contorl" placeholder="Mobile"/>
                               </div>
                               <div className="mb-2">
                                   <input type="email" className="form-contorl" placeholder="Email"/>
                               </div>
                               <div className="mb-2">
                                   <input type="text" className="form-contorl" placeholder="Title"/>
                               </div>
                               <div className="mb-2">
                                  <select className="form-contorl">
                                      <option value=""> Select a Group</option>
                                  </select>
                               </div>
                               <div className="mb-2">
                                  <input type="submit" className="btn btn-success" value="Create"/>
                                  <Link to ={'/contact/list'} className="btn btn-dark ms-2">Cancel</Link>
                               </div>
                           </form>
                       </div>
                       <div className="col-md-6">
                           <img src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png" alt="" className="contact-img"/>
                       </div>
                   </div>
               </div>
           </section>
           
        </React.Fragment>
    )
};
export default AddContact;