import React from "react";
import { USER, USER_3 } from "../../constant/imagepath_home";
const ReviewsGeneral = () => {
  return (
    <section>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/app/index">My Teacher</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Fikrlar
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Fikrlar</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="doc-review review-listing">
                {/* Review Listing */}
                <ul className="comments-list">
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User Image"
                        src={USER}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Richard Wilson</span>
                          <span className="comment-date">
                            Reviewed 2 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p className="recommended">
                          <i className="far fa-thumbs-up" /> I recommend the
                          consectetur
                        </p>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <a className="comment-btn" href="#">
                            <i className="fas fa-reply" /> Reply
                          </a>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <a href="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </a>
                            <a href="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Comment Reply */}
                    <ul className="comments-reply">
                      {/* Comment Reply List */}
                      <li>
                        <div className="comment">
                          <img
                            className="avatar rounded-circle"
                            alt="User Image"
                            src={USER}
                          />
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                Dr. Darren Elder
                              </span>
                              <span className="comment-date">
                                Reviewed 3 Days ago
                              </span>
                            </div>
                            <p className="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam. Curabitur non nulla sit amet nisl tempus
                            </p>
                            <div className="comment-reply">
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply" /> Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* /Comment Reply List */}
                    </ul>
                    {/* /Comment Reply */}
                  </li>
                  {/* /Comment List */}
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User Image"
                        src={USER}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Travis Trimble</span>
                          <span className="comment-date">
                            Reviewed 4 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <a className="comment-btn" href="#">
                            <i className="fas fa-reply" /> Reply
                          </a>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <a href="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </a>
                            <a href="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Comment List */}
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User Image"
                        src={USER_3}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Carl Kelly</span>
                          <span className="comment-date">
                            Reviewed 5 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <a className="comment-btn" href="#">
                            <i className="fas fa-reply" /> Reply
                          </a>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <a href="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </a>
                            <a href="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Comment List */}
                </ul>
                {/* /Comment List */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsGeneral;
