import React from "react";
import { Link } from "react-router-dom";
let ContactList=() =>{
    return (
        <React.Fragment>
            <section className="Contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3"> Contact Manager
                                <Link to ={'/contact/add'} className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-2"/>
                                New</Link> 
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                      <div className="col">
                                        <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Search Names"/>
                                        </div>
                                      </div>
                                      <div className="col">
                                         <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                         </div>
                                      </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                   <div className="row alige-item-right">
                                    <div className="col-md-4">
                                       <img src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png" alt=  " "className="contact-img" />
        
                                        </div>
                                        <div className="col-md-7">
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
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                          <Link to={`/contact/view/:contactID`} className="btn btn-warning my-1">
                                               <i className="fa fa-eye"/>
                                          </Link>
                                           <Link to={`/contact/edit/:contactID`} className="btn btn-primary my-1">
                                             <i className="fa fa-pen"/>
                                           </Link>
                                           <button  className="btn btn-danger my-1">
                                              <i className="fa fa-trash"/>
                                           </button>
                                        
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ContactList;