import React, { useState } from "react";
const About = () => {
  const [accordion, setAccordion] = useState(0);
  const openAccordion = (id) => {
    if (accordion !== id) {
      setAccordion(id);
    } else if (accordion == id) {
      setAccordion(0);
    }
  };
  return (
    <div className="about">
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
                  My Teacher haqida
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">My Teacher haqida</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container  py-5">
      <div className="border-bottom px-4">
      <div className="accordion_menu ">
          <div className="accordion_btn" onClick={() => openAccordion(1)}>
            <span>Biz haqimizda</span>
            {accordion == 1 ? (
              <i className="fas fa-minus"></i>
            ) : (
              <i className="fas fa-plus"></i>
            )}{" "}
          </div>
          <div
            className={`accordion_body ${
              accordion == 1 ? "accordion_active" : ""
            }`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            vitae sapiente, expedita tempore omnis consequatur velit culpa
            voluptate. Cum amet voluptas fugiat ipsa totam optio nesciunt ipsam
            id iste! Deserunt suscipit doloribus error eius quisquam quae non
            perspiciatis quos voluptates nemo aliquam, cum, natus saepe magnam
            possimus obcaecati voluptatum officia sed molestiae aperiam, nostrum
            dicta! Eligendi et suscipit, explicabo, obcaecati beatae porro amet
            quod voluptas animi inventore quidem exercitationem eveniet sapiente
            voluptate. Totam soluta eveniet eaque dignissimos omnis et
            consectetur consequatur illum distinctio deserunt iste, impedit
            dolore cupiditate necessitatibus sed! Doloremque iusto voluptatum
            perferendis. Quia ex molestiae provident praesentium vero rem
            aperiam excepturi, laboriosam quisquam a fugit. Numquam soluta
            nesciunt quaerat minima provident explicabo fugiat deserunt nostrum,
            praesentium unde a laborum reprehenderit, incidunt autem iusto
            dolorem similique? Unde recusandae odio mollitia ea non aspernatur
            nobis cupiditate commodi, autem nostrum impedit debitis, quae est
            deleniti odit fuga beatae porro voluptatibus eveniet libero, animi
            voluptas tenetur consequatur. Deserunt doloremque, ut porro illo
            dolorem natus maiores atque quia vero vitae ducimus minima facere
            quisquam cupiditate fugit nesciunt perferendis debitis, accusamus
            voluptates sequi aperiam! Minima accusamus sunt repellat blanditiis
            ducimus maxime ratione. Excepturi earum dolor debitis? Sint optio
            consequatur perspiciatis minus accusantium maiores expedita.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
