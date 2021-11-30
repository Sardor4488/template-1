import React from 'react'
import { Link } from 'react-router-dom'

const SidebarBottom = () => {
    return (
        <div className="sidebar-bottom-show d-none  sidebar-bottom">
          <div className="row p-0 m-0 bg-white d-flex justufy-content-center align-items-center w-100">
              <div className="col-2 border text-center shadow bg-white  h-100 w-100 px-0 "> <Link className="w-100 h-100" to="/app/Mentee/share-friends"> <div className="w-100 h-100 d-flex justify-content-center align-items-center">  <i className="fas fa-user-plus  " />  </div> </Link> </div>
              <div className="col-2 border text-center shadow bg-white  h-100 w-100 px-0 "> <Link className="w-100 h-100" to="/app/Mentee/chat-mentee"> <div className="w-100 h-100 d-flex justify-content-center align-items-center">  <i className="fas fa-comments  " />  </div> </Link> </div>
            
                <div className="col-4 border text-center shadow bg-white  h-100 w-100 px-0 "> <Link className="w-100 h-100" to="/app/Mentee/dashboard"> <div className="w-100 h-100 d-flex justify-content-center align-items-center">  <i className="fas fa-home  " />  </div> </Link> </div>
            
                <div className="col-2 border text-center shadow bg-white  h-100 w-100 px-0 "> <Link className="w-100 h-100" to="/app/Mentee/favourites"> <div className="w-100 h-100 d-flex justify-content-center align-items-center">  <i className="fas fa-book-reader  " />  </div> </Link> </div>
                <div className="col-2 border text-center shadow bg-white  h-100 w-100 px-0 "> <Link className="w-100 h-100" to="/app/Mentee/mentee-profile"> <div className="w-100 h-100 d-flex justify-content-center align-items-center">  <i className="fas fa-user  " />  </div> </Link> </div>
           </div>
        </div>
    )
}

export default SidebarBottom
