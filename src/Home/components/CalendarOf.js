import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
const CalendarOf = () => {
  const [lessonCount, setLessonCount] = useState(12);
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [subject, setSubject] = useState();
  const [array, setArray] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState();
  const addLesson = (e) => {
    e.preventDefault();
    if (lessonCount === 0) {
      alert("O'quvchining sotib olgan darslari tugadi");
      setLessonCount(0);
    }
    if (
      (date == "" || date == undefined,
      date == null ||
        startTime == "" ||
        startTime == undefined ||
        startTime == null ||
        endTime == "" ||
        endTime == undefined ||
        endTime == null ||
        subject == "" ||
        subject == undefined ||
        subject == null)
    ) {
      alert("Malumotlarni to'liq kiriting.");
    } else {
      let arrayclone = [...array];
      arrayclone.push({
        // id: arrayclone?.length + 1,
        date: date,
        startTime: startTime,
        endTime: endTime,
        subject: subject,
      });
      setLessonCount(lessonCount - 1);
      setArray(arrayclone);
      setSubject("");
    }
  };
  const handledelete = (i) => {
    let arrayclone = [...array];
    arrayclone.splice(i, 1);
    setArray(arrayclone);
    setLessonCount(lessonCount - 1);
  };
  const handleEdit = (i) => {
    setIndex(i);
    setDate(array[i].date);
    setStartTime(array[i].startTime);
    setEndTime(array[i].endTime);
    setSubject(array[i].subject);
    setIsModal(true);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };
  const save = () => {
    let arrayclone = [...array];
    arrayclone[index].date = date;
    arrayclone[index].startTime = startTime;
    arrayclone[index].endTime = endTime;
    arrayclone[index].subject = subject;
    setIsModal(false);
    setDate("");
    setStartTime("");
    setEndTime("");
    setSubject("");
  };
  return (
    <div className="container py-5 card my-5">
      <form onSubmit={addLesson}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> Darslar soni </label>
              <div className="form-control d-flex align-items-center">
                {lessonCount}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> Dars sanasi </label>
              <input
                defaultValue={date || ""}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> Start time </label>
              <select
                value={startTime || ""}
                className="form-control select"
                onChange={(e) => setStartTime(e.target.value)}
              >
                <option value="06:00">06:00</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> End time </label>
              <select
                value={endTime || ""}
                className="form-control select"
                onChange={(e) => setEndTime(e.target.value)}
              >
                <option value="06:00">06:00</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>Mavzu</label>
              <input
                value={subject || ""}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center p-3">
            <button className="btn btn-primary" type="submit">
              Saqlash
            </button>
          </div>
        </div>
      </form>
      {array?.length > 0 && (
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Sana</th>
                <th>Dars vaqti</th>
                <th>Mavzu</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {array.map((v, i) => (
                <tr key={i}>
                  <td className="align-middle">{v.id}</td>
                  <td className="align-middle">{v.date}</td>
                  <td className="align-middle">
                    {v.startTime + "-" + v.endTime}
                  </td>
                  <td className="align-middle">{v.subject}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(i)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>{" "}
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => handledelete(i)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>{" "} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal
        className="modal-dialog-centered"
        isOpen={isModal}
        toggle={() => handleModalClose()}
      >
        <ModalHeader
          close={
            <button className="close" onClick={() => handleModalClose()}>
              ×
            </button>
          }
          toggle={() => handleModalClose()}
        >
          Taxrirlash
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label> Dars sanasi </label>
                <input
                  className="form-control"
                  value={date || ""}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Start time</label>
                <select
                  className="form-control select"
                  value={startTime || ""}
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <select
                  className="form-control select"
                  value={endTime || ""}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label> Mavzu </label>
                <input
                  className="form-control"
                  value={subject || ""}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center p-3">
              <button className="btn btn-primary" onClick={save}>
                Saqlash
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CalendarOf;

// <div>
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
//             endDate: new Date("2020-08-11T12:30:00.000Z"),
//             ranges: {
//               "Last 30 Days": [
//                 new Date("2020-07-12T04:57:17.076Z"),
//                 new Date("2020-08-10T04:57:17.076Z"),
//               ],
//               "Last 7 Days": [
//                 new Date("2020-08-04T04:57:17.076Z"),
//                 new Date("2020-08-10T04:57:17.076Z"),
//               ],
//               "Last Month": [
//                 new Date("2020-06-30T18:30:00.000Z"),
//                 new Date("2020-07-31T18:29:59.999Z"),
//               ],
//               "This Month": [
//                 new Date("2020-07-31T18:30:00.000Z"),
//                 new Date("2020-08-31T18:29:59.999Z"),
//               ],
//               Today: [
//                 new Date("2020-08-10T04:57:17.076Z"),
//                 new Date("2020-08-10T04:57:17.076Z"),
//               ],
//               Yesterday: [
//                 new Date("2020-08-09T04:57:17.076Z"),
//                 new Date("2020-08-09T04:57:17.076Z"),
//               ],
//             },
//             startDate: new Date("2020-08-10T04:30:00.000Z"),
//             timePicker: false,
//           }}
//         >
//           <input type="text" style={{ borderColor: "transparent" }} />
//         </DateRangePicker>
//         <i className="fas fa-chevron-down ml-2" />
//       </div>
//     </div>
//   </div>
//   {/* Schedule Widget */}
//   {Calendar.map((v, i) => (
//     <div className="card booking-schedule schedule-widget" key={i}>
//       {/* Schedule Header */}
//       <div className="schedule-header">
//         <div className="row">
//           <div className="col-md-12">
//             {/* Day Slot */}
//             <div className="day-slot">
//               <ul>
//                 <li className="left-arrow">
//                   <a href="">
//                     <i className="fa fa-chevron-left" />
//                   </a>
//                 </li>
//                 {v.dayOfWeek.map((v, i) => (
//                   <li key={i}>
//                     <span>{v.weekDays}</span>
//                     <span className="slot-date">
//                       {v.day} December{" "}
//                       <small className="slot-year">2021</small>
//                     </span>
//                   </li>
//                 ))}

//                 <li className="right-arrow">
//                   <a href="">
//                     <i className="fa fa-chevron-right" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* /Day Slot */}
//           </div>
//         </div>
//       </div>
//       {/* /Schedule Header */}
//       {/* Schedule Content */}
//       <div className="schedule-cont">
//         <div className="row">
//           <div className="col-md-12">
//             {/* Time Slot */}
//             <div className="time-slot">
//               <ul className="clearfix">
//                 {v.dayOfWeek.map((v, i) => (
//                   <li key={i}>
//                     {v.hours.map((v, i) => (
//                       <a className="timing" href="#" key={i}>
//                         <span>{v}:00</span> <span>AM</span>
//                       </a>
//                     ))}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* /Time Slot */}
//           </div>
//         </div>
//       </div>
//       {/* /Schedule Content */}
//     </div>
//   ))}

//   {/* /Schedule Widget */}
//   {/* Submit Section */}
//   <div className="submit-section proceed-btn text-right">
//     <div className="row">
//       <div className="col-12 col-sm-6 d-flex align-items-center">
//         {/* <img className="payIcon me-3" src={click} alt="click" />
//         <img className="payIcon" src={payme} alt="payme" /> */}
//       </div>
//       <div className="col-12 col-sm-6 d-flex align-items-center justify-content-end">
//         <Link
//           to="/app/Mentee/checkout"
//           className="btn btn-primary submit-btn"
//         >
//           To'lovga o'tish
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
