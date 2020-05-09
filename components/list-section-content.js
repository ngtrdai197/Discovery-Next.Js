import { useState } from 'react';

export default function ListSectionContent() {
  const [aboutMe] = useState([
    'I am currently a final year student of the post and telecommunications technology school. Information technology major!',
    'I learned how to build a website with the Front-End: Angular framework, and a bit with Reactjs - Vuejs.',
    'In life I like to do and learn new things, but in work I like to learn new languages, good solutions to apply to work.',
  ]);
  return (
    <>
      <section id="experiences">
        <div
          className="text-center"
          style={{ fontWeight: 'bold', color: '#fff' }}
        >
          Experiences
        </div>
        <div className="line-css">
          <div className="vuong"></div>
        </div>
        <div className="timeline">
          <div className="container-cover right">
            <div className="content">
              <p className="time-join">November 2019 - Present</p>
              <h4>Software Development Engineer</h4>
              <p className="company">@ANT-TECH</p>
              <p>Web development for backend</p>
            </div>
          </div>
          <div className="container-cover left">
            <div className="content">
              <p className="time-join">February 2019 - October 2019</p>
              <h4>Software Development Engineer</h4>
              <p className="company">@JANETO</p>
              <p>Web development for backend and frontend</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div
            className="text-center"
            style={{ fontWeight: 'bold', color: '#000' }}
          >
            About me
          </div>
          <div className="line-css">
            <div className="vuong"></div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 mb-3">
              <div className="ab-logo">
                <img
                  style={{ width: '250px', borderRadius: '50%' }}
                  src="/images/avatar.jpg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="description">
                <h4>I'm Nguyen Dai</h4>
                <div className="content mt-3">
                  {aboutMe.map((rec, index) => (
                    <p key={index}>{rec}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="text-center" style={{ fontWeight: 'bold' }}>
            Contact
          </div>
          <div className="line-css">
            <div className="vuong"></div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <div className="cover">
                <h3>Thông tin liên hệ</h3>
                <p>
                  Nếu bạn có bất kì câu hỏi hoặc thắc mắc nào về tôi. Có thể
                  liên hệ với tôi thông qua thông tin bên dưới.
                </p>
              </div>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <span>
                    429/6 phường Tăng Nhơn Phú A, Quận 9, TP.Hồ Chí Minh
                  </span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <span>nguyendai.coder@gmail.com</span>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <span>
                    <strong>037.562.9888</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-6">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Name ..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Email ..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Subject ..."
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Content ..."
                  ></textarea>
                </div>
                <div className="btn btn-block btn-danger mb-4 mt-4">Send</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
