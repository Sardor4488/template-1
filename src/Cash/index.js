// ;<div>
//   <div className="row">
//     <div className="col-12 col-sm-4 col-md-6">
//       <h4 className="mb-1">11 November 2019</h4>
//       <p className="text-muted">Monday</p>
//     </div>
//     <div className="col-12 col-sm-8 col-md-6 text-sm-right">
//       <div className="bookingrange btn btn-white btn-sm mb-3">
//         <i className="far fa-calendar-alt mr-2" />
//         <DateRangePicker
//           initialSettings={{
//             endDate: new Date('2020-08-11T12:30:00.000Z'),
//             ranges: {
//               'Last 30 Days': [
//                 new Date('2020-07-12T04:57:17.076Z'),
//                 new Date('2020-08-10T04:57:17.076Z'),
//               ],
//               'Last 7 Days': [
//                 new Date('2020-08-04T04:57:17.076Z'),
//                 new Date('2020-08-10T04:57:17.076Z'),
//               ],
//               'Last Month': [
//                 new Date('2020-06-30T18:30:00.000Z'),
//                 new Date('2020-07-31T18:29:59.999Z'),
//               ],
//               'This Month': [
//                 new Date('2020-07-31T18:30:00.000Z'),
//                 new Date('2020-08-31T18:29:59.999Z'),
//               ],
//               Today: [
//                 new Date('2020-08-10T04:57:17.076Z'),
//                 new Date('2020-08-10T04:57:17.076Z'),
//               ],
//               Yesterday: [
//                 new Date('2020-08-09T04:57:17.076Z'),
//                 new Date('2020-08-09T04:57:17.076Z'),
//               ],
//             },
//             startDate: new Date('2020-08-10T04:30:00.000Z'),
//             timePicker: false,
//           }}
//         >
//           <input type="text" style={{ borderColor: 'transparent' }} />
//         </DateRangePicker>
//         <i className="fas fa-chevron-down ml-2" />
//       </div>
//     </div>
//   </div>
//   {/* Schedule Widget */}
//   <div className="card booking-schedule schedule-widget">
//     {/* Schedule Header */}
//     <div className="schedule-header">
//       <div className="row">
//         <div className="col-md-12">
//           {/* Day Slot */}
//           <div className="day-slot">
//             <ul>
//               <li className="left-arrow">
//                 <a href="">
//                   <i className="fa fa-chevron-left" />
//                 </a>
//               </li>
//               <li>
//                 <span>Mon</span>
//                 <span className="slot-date">
//                   11 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li>
//                 <span>Tue</span>
//                 <span className="slot-date">
//                   12 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li>
//                 <span>Wed</span>
//                 <span className="slot-date">
//                   13 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li>
//                 <span>Thu</span>
//                 <span className="slot-date">
//                   14 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li>
//                 <span>Fri</span>
//                 <span className="slot-date">
//                   15 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li>
//                 <span>Sat</span>
//                 <span className="slot-date">
//                   16 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li>
//                 <span>Sun</span>
//                 <span className="slot-date">
//                   17 Nov <small className="slot-year">2019</small>
//                 </span>
//               </li>
//               <li className="right-arrow">
//                 <a href="">
//                   <i className="fa fa-chevron-right" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* /Day Slot */}
//         </div>
//       </div>
//     </div>
//     {/* /Schedule Header */}
//     {/* Schedule Content */}
//     <div className="schedule-cont">
//       <div className="row">
//         <div className="col-md-12">
//           {/* Time Slot */}
//           <div className="time-slot">
//             <ul className="clearfix">
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing selected" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="timing" href="#">
//                   <span>9:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>10:00</span> <span>AM</span>
//                 </a>
//                 <a className="timing" href="#">
//                   <span>11:00</span> <span>AM</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* /Time Slot */}
//         </div>
//       </div>
//     </div>
//     {/* /Schedule Content */}
//   </div>
//   {/* /Schedule Widget */}
//   {/* Submit Section */}
//   <div className="submit-section proceed-btn text-right">
//     <div className="row">
//       <div className="col-12 col-sm-6 d-flex align-items-center">
//         <img className="payIcon me-3" src={click} alt="click" />
//         <img className="payIcon" src={payme} alt="payme" />
//       </div>
//       <div className="col-12 col-sm-6 d-flex align-items-center justify-content-end">
//         <Link to="/app/Mentee/checkout" className="btn btn-primary submit-btn">
//           To'lovga o'tish
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>

//          <Modal
//                   className="modal-dialog-centered"
//                   isOpen={state.isnewmodal}
//                   toggle={() => newModalClose()}
//                 >
//                   <ModalHeader toggle={() => newModalClose()}>
//                     {' '}
//                     Add Time Slots
//                   </ModalHeader>
//                   <ModalBody>
//                     <form>
//                       <div className="hours-info">
//                         <div className="row form-row hours-cont">
//                           <div className="col-12 col-md-10">
//                             <div className="row form-row">
//                               <div className="col-12 col-md-6">
//                                 <div className="form-group">
//                                   <label>Start Time</label>
//                                   <select className="form-control">
//                                     <option>Select</option>
//                                     <option>12.00 am</option>
//                                     <option>1.00 am</option>
//                                     <option>2.00 am</option>
//                                     <option>3.00 am</option>
//                                     <option>4.00 am</option>
//                                     <option>5.00 am</option>
//                                     <option>6.00 am</option>
//                                     <option>7.00 am</option>
//                                     <option>8.00 am</option>
//                                     <option>9.00 am</option>
//                                     <option>10.00 am</option>
//                                     <option>11.00 am</option>
//                                     <option>12.00 pm</option>
//                                     <option>1.00 pm</option>
//                                     <option>2.00 pm</option>
//                                     <option>3.00 pm</option>
//                                     <option>4.00 pm</option>
//                                     <option>5.00 pm</option>
//                                     <option>6.00 pm</option>
//                                     <option>7.00 pm</option>
//                                     <option>8.00 pm</option>
//                                     <option>9.00 pm</option>
//                                     <option>10.00 pm</option>
//                                     <option>11.00 pm</option>
//                                   </select>
//                                 </div>
//                               </div>
//                               <div className="col-12 col-md-6">
//                                 <div className="form-group">
//                                   <label>End Time</label>
//                                   <select className="form-control">
//                                     <option>Select</option>
//                                     <option>12.00 am</option>
//                                     <option>1.00 am</option>
//                                     <option>2.00 am</option>
//                                     <option>3.00 am</option>
//                                     <option>4.00 am</option>
//                                     <option>5.00 am</option>
//                                     <option>6.00 am</option>
//                                     <option>7.00 am</option>
//                                     <option>8.00 am</option>
//                                     <option>9.00 am</option>
//                                     <option>10.00 am</option>
//                                     <option>11.00 am</option>
//                                     <option>12.00 pm</option>
//                                     <option>1.00 pm</option>
//                                     <option>2.00 pm</option>
//                                     <option>3.00 pm</option>
//                                     <option>4.00 pm</option>
//                                     <option>5.00 pm</option>
//                                     <option>6.00 pm</option>
//                                     <option>7.00 pm</option>
//                                     <option>8.00 pm</option>
//                                     <option>9.00 pm</option>
//                                     <option>10.00 pm</option>
//                                     <option>11.00 pm</option>
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       {addnewtimeslot &&
//                         addnewtimeslot.map((newrow, index) => (
//                           <div className="hours-info" key={index}>
//                             <div className="row form-row hours-cont">
//                               <div className="col-12 col-md-10">
//                                 <div className="row form-row">
//                                   <div className="col-12 col-md-6">
//                                     <div className="form-group">
//                                       <label>Start Time</label>
//                                       <select className="form-control">
//                                         <option>Select</option>
//                                         <option>12.00 am</option>
//                                         <option>1.00 am</option>
//                                         <option>2.00 am</option>
//                                         <option>3.00 am</option>
//                                         <option>4.00 am</option>
//                                         <option>5.00 am</option>
//                                         <option>6.00 am</option>
//                                         <option>7.00 am</option>
//                                         <option>8.00 am</option>
//                                         <option>9.00 am</option>
//                                         <option>10.00 am</option>
//                                         <option>11.00 am</option>
//                                         <option>12.00 pm</option>
//                                         <option>1.00 pm</option>
//                                         <option>2.00 pm</option>
//                                         <option>3.00 pm</option>
//                                         <option>4.00 pm</option>
//                                         <option>5.00 pm</option>
//                                         <option>6.00 pm</option>
//                                         <option>7.00 pm</option>
//                                         <option>8.00 pm</option>
//                                         <option>9.00 pm</option>
//                                         <option>10.00 pm</option>
//                                         <option>11.00 pm</option>
//                                       </select>
//                                     </div>
//                                   </div>
//                                   <div className="col-12 col-md-6">
//                                     <div className="form-group">
//                                       <label>End Time</label>
//                                       <select className="form-control">
//                                         <option>Select</option>
//                                         <option>12.00 am</option>
//                                         <option>1.00 am</option>
//                                         <option>2.00 am</option>
//                                         <option>3.00 am</option>
//                                         <option>4.00 am</option>
//                                         <option>5.00 am</option>
//                                         <option>6.00 am</option>
//                                         <option>7.00 am</option>
//                                         <option>8.00 am</option>
//                                         <option>9.00 am</option>
//                                         <option>10.00 am</option>
//                                         <option>11.00 am</option>
//                                         <option>12.00 pm</option>
//                                         <option>1.00 pm</option>
//                                         <option>2.00 pm</option>
//                                         <option>3.00 pm</option>
//                                         <option>4.00 pm</option>
//                                         <option>5.00 pm</option>
//                                         <option>6.00 pm</option>
//                                         <option>7.00 pm</option>
//                                         <option>8.00 pm</option>
//                                         <option>9.00 pm</option>
//                                         <option>10.00 pm</option>
//                                         <option>11.00 pm</option>
//                                       </select>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-12 col-md-2">
//                                 <label className="d-md-block d-sm-none d-none">
//                                   &nbsp;
//                                 </label>
//                                 <a
//                                   className="btn btn-danger trash"
//                                   style={{ cursor: 'pointer' }}
//                                   onClick={() => removenewtimeschedule(index)}
//                                 >
//                                   <i
//                                     style={{ color: '#fff' }}
//                                     className="far fa-trash-alt"
//                                   />
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       <div className="add-more mb-3">
//                         <a
//                           style={{ cursor: 'pointer', color: '#1e88e5' }}
//                           onClick={() => addnewtimeschedule()}
//                         >
//                           <i className="fa fa-plus-circle" /> Add More
//                         </a>
//                       </div>
//                       <div className="submit-section text-center">
//                         <button
//                           type="button"
//                           className="btn btn-primary submit-btn"
//                         >
//                           Save Changes
//                         </button>
//                       </div>
//                     </form>
//                   </ModalBody>
//                 </Modal>
//                 {/* Edit Time Slot Modal */}
//                 <Modal
//                   className="modal-dialog-centered"
//                   isOpen={state.iseditModal}
//                   toggle={() => editModalClose()}
//                 >
//                   <ModalHeader toggle={() => editModalClose()}>
//                     {' '}
//                     Edit Time Slots
//                   </ModalHeader>
//                   <ModalBody>
//                     <form>
//                       <div className="hours-info">
//                         <div className="row form-row hours-cont">
//                           <div className="col-12 col-md-10">
//                             <div className="row form-row">
//                               <div className="col-12 col-md-6">
//                                 <div className="form-group">
//                                   <label>Start Time</label>
//                                   <select className="form-control">
//                                     <option>Select</option>
//                                     <option>12.00 am</option>
//                                     <option>1.00 am</option>
//                                     <option>2.00 am</option>
//                                     <option>3.00 am</option>
//                                     <option>4.00 am</option>
//                                     <option>5.00 am</option>
//                                     <option>6.00 am</option>
//                                     <option>7.00 am</option>
//                                     <option>8.00 am</option>
//                                     <option>9.00 am</option>
//                                     <option>10.00 am</option>
//                                     <option>11.00 am</option>
//                                     <option>12.00 pm</option>
//                                     <option>1.00 pm</option>
//                                     <option>2.00 pm</option>
//                                     <option>3.00 pm</option>
//                                     <option>4.00 pm</option>
//                                     <option>5.00 pm</option>
//                                     <option>6.00 pm</option>
//                                     <option>7.00 pm</option>
//                                     <option>8.00 pm</option>
//                                     <option>9.00 pm</option>
//                                     <option>10.00 pm</option>
//                                     <option>11.00 pm</option>
//                                   </select>
//                                 </div>
//                               </div>
//                               <div className="col-12 col-md-6">
//                                 <div className="form-group">
//                                   <label>End Time</label>
//                                   <select className="form-control">
//                                     <option>Select</option>
//                                     <option>12.00 am</option>
//                                     <option>1.00 am</option>
//                                     <option>2.00 am</option>
//                                     <option>3.00 am</option>
//                                     <option>4.00 am</option>
//                                     <option>5.00 am</option>
//                                     <option>6.00 am</option>
//                                     <option>7.00 am</option>
//                                     <option>8.00 am</option>
//                                     <option>9.00 am</option>
//                                     <option>10.00 am</option>
//                                     <option>11.00 am</option>
//                                     <option>12.00 pm</option>
//                                     <option>1.00 pm</option>
//                                     <option>2.00 pm</option>
//                                     <option>3.00 pm</option>
//                                     <option>4.00 pm</option>
//                                     <option>5.00 pm</option>
//                                     <option>6.00 pm</option>
//                                     <option>7.00 pm</option>
//                                     <option>8.00 pm</option>
//                                     <option>9.00 pm</option>
//                                     <option>10.00 pm</option>
//                                     <option>11.00 pm</option>
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {edittimeslot &&
//                           edittimeslot.map((timeslot, index) => (
//                             <div
//                               className="row form-row hours-cont"
//                               key={index}
//                             >
//                               <div className="col-12 col-md-10">
//                                 <div className="row form-row">
//                                   <div className="col-12 col-md-6">
//                                     <div className="form-group">
//                                       <label>Start Time</label>
//                                       <select className="form-control">
//                                         <option>Select</option>
//                                         <option>12.00 am</option>
//                                         <option>1.00 am</option>
//                                         <option>2.00 am</option>
//                                         <option>3.00 am</option>
//                                         <option>4.00 am</option>
//                                         <option>5.00 am</option>
//                                         <option>6.00 am</option>
//                                         <option>7.00 am</option>
//                                         <option>8.00 am</option>
//                                         <option>9.00 am</option>
//                                         <option>10.00 am</option>
//                                         <option>11.00 am</option>
//                                         <option>12.00 pm</option>
//                                         <option>1.00 pm</option>
//                                         <option>2.00 pm</option>
//                                         <option>3.00 pm</option>
//                                         <option>4.00 pm</option>
//                                         <option>5.00 pm</option>
//                                         <option>6.00 pm</option>
//                                         <option>7.00 pm</option>
//                                         <option>8.00 pm</option>
//                                         <option>9.00 pm</option>
//                                         <option>10.00 pm</option>
//                                         <option>11.00 pm</option>
//                                       </select>
//                                     </div>
//                                   </div>
//                                   <div className="col-12 col-md-6">
//                                     <div className="form-group">
//                                       <label>End Time</label>
//                                       <select className="form-control">
//                                         <option>Select</option>
//                                         <option>12.00 am</option>
//                                         <option>1.00 am</option>
//                                         <option>2.00 am</option>
//                                         <option>3.00 am</option>
//                                         <option>4.00 am</option>
//                                         <option>5.00 am</option>
//                                         <option>6.00 am</option>
//                                         <option>7.00 am</option>
//                                         <option>8.00 am</option>
//                                         <option>9.00 am</option>
//                                         <option>10.00 am</option>
//                                         <option>11.00 am</option>
//                                         <option>12.00 pm</option>
//                                         <option>1.00 pm</option>
//                                         <option>2.00 pm</option>
//                                         <option>3.00 pm</option>
//                                         <option>4.00 pm</option>
//                                         <option>5.00 pm</option>
//                                         <option>6.00 pm</option>
//                                         <option>7.00 pm</option>
//                                         <option>8.00 pm</option>
//                                         <option>9.00 pm</option>
//                                         <option>10.00 pm</option>
//                                         <option>11.00 pm</option>
//                                       </select>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-12 col-md-2">
//                                 <label className="d-md-block d-sm-none d-none">
//                                   &nbsp;
//                                 </label>
//                                 <a
//                                   className="btn btn-danger trash"
//                                   onClick={() => removeedittimeschedule(index)}
//                                 >
//                                   <i
//                                     style={{ color: '#fff' }}
//                                     className="far fa-trash-alt"
//                                   />
//                                 </a>
//                               </div>
//                             </div>
//                           ))}
//                       </div>
//                       <div className="add-more mb-3">
//                         <a
//                           className="add-hours"
//                           style={{ cursor: 'pointer', color: '#1e88e5' }}
//                           onClick={() => edittimeschedule()}
//                         >
//                           <i className="fa fa-plus-circle" /> Add More
//                         </a>
//                       </div>
//                       <div className="submit-section text-center">
//                         <button
//                           type="button"
//                           className="btn btn-primary submit-btn"
//                         >
//                           Save Changes
//                         </button>
//                       </div>
//                     </form>
//                   </ModalBody>
//                 </Modal>
{
  /* /Page Content */
}
{
  /* Voice Call Modal */
}
// <Modal
//   className="modal-dialog-centered"
//   isOpen={state.isvoicecallmodal}
//   toggle={() => voicecallmodalClose()}
// >
//   <ModalBody>
//     <div className="call-box incoming-box">
//       <div className="call-wrapper">
//         <div className="call-inner">
//           <div className="call-user">
//             <img alt="User Image" src={USER} className="call-avatar" />
//             <h4>Jonathan Doe</h4>
//             <span>Connecting...</span>
//           </div>
//           <div className="call-items">
//             <a
//               href=""
//               className="btn call-item call-end"
//               data-dismiss="modal"
//               aria-label="Close"
//             >
//               <i className="material-icons">call_end</i>
//             </a>
//             <Link
//               to="/app/Pages/voice-call"
//               className="btn call-item call-start"
//             >
//               <i className="material-icons">call</i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </ModalBody>
// </Modal>
// {/* /Voice Call Modal */}
// {/* Video Call Modal */}
// <div className="modal fade call-modal" id="video_call">
//   <div className="modal-dialog modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-body">
//         {/* Incoming Call */}
//         <div className="call-box incoming-box">
//           <div className="call-wrapper">
//             <div className="call-inner">
//               <div className="call-user">
//                 <img
//                   className="call-avatar"
//                   src={USER}
//                   alt="User Image"
//                 />
//                 <h4>Dr. Darren Elder</h4>
//                 <span>Calling ...</span>
//               </div>
//               <div className="call-items">
//                 <a
//                   href=""
//                   className="btn call-item call-end"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <i className="material-icons">call_end</i>
//                 </a>
//                 <Link
//                   to="/app/Pages/video-call"
//                   className="btn call-item call-start"
//                 >
//                   <i className="material-icons">videocam</i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Incoming Call */}
//       </div>
//     </div>
//   </div>
// </div>
{/* <div className="col-md-12">
<div className="schedule-widget mb-0">
  {/* Schedule Header */}
//   <div className="schedule-header">
//     {/* Schedule Nav */}
//     <div className="schedule-nav">
//       <ul className="nav nav-tabs nav-justified">
//         {data &&
//           data.map((v, i) => (
//             <li
//               className="nav-item"
//               key={i}
//               onClick={() => selectDay(v.id)}
//             >
//               <a
//                 className={`nav-link ${v.className} `}
//                 data-toggle="tab"
//                 href={v.href}
//               >
//                 {v.body}
//               </a>
//             </li>
//           ))}
//       </ul>
//     </div>
 
//   </div>

//   <div className="tab-content schedule-cont">


//     {datasheudle.length > 0 &&
//       datasheudle.map((v, i) => (
//         <div
//           id={v.id}
//           key={v.id}
//           className={`tab-pane fade ${v.className} `}
//         >
//           <h4 className="card-title d-flex justify-content-between">
//             <span>Bo'sh dars soatlari</span>
//             <div
//               className="edit-link"
//               onClick={modalOpen}
//               style={{ cursor: 'pointer' }}
//             >
//               <i className="fa fa-plus-circle" /> Vaqt
//               qo'shish
//             </div>
//           </h4>
      
//           {day[weekDays].length > 0 ? (
//             <div className="user-times">
//               {day[weekDays] &&
//                 day[weekDays].map((v, i) => (
//                   <div
//                     className="user-slot-list d-flex align-items-center"
//                     key={i}
//                   >
//                     {v.time}
//                     <div
//                       className="delete_schedule ms-2"
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <i className="fa fa-times" />
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           ) : (
//             <p className="text-muted mb-0">
//               Mavjud emas
//             </p>
//           )}
//         </div>
//       ))}
//   </div>

// </div>
// </div> 