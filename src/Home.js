import React, { useState } from "react";
import birds from "./bird3.webp";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Home.css";

const Home = () => {
  const [counterOn, setConterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setConterOn(true)}
      onExit={() => setConterOn(false)}
    >
      <div className="container" style={{ height: "92vh" }}>
        <div className="row align-items-center"></div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center" data-aos="fade-up"
                  data-aos-duration="1000">
            <img src={birds} alt="bird" className=" w-100" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center"data-aos="fade-right"
                data-aos-duration="1000">
            <h1 className=" mb-5">ငှက်</h1>
            <p className="txtcol">
              ငှက် (မျိုးပေါင်း Aves) သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ
              နှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။ သို့သော်
              အားလုံး ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ အချို့ငှက်များသည်
              အလွန်အပြေးသန်သူများဖြစ်ကြပြီး အချို့ကတော့ အလွန်ရေကူး
              ကျွမ်းကျင်သူများ ဖြစ်ကြသည်။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး
              ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။ ဥက ပေါက်ဖွားလာသော
              ကလေးငယ်များကို စောင့်ရှောက်လေ့ ရှိကြသည်။ အသက်ရှင်နေထိုင်လျက်
              ရှိသော ငှက်အမျိုးကွဲပေါင်း ၁၀၀၀၀ ကျော်ရှိသည်။
            </p>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-3 mb-5" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={1000}
                >
              <Card
                className="hov shadow rounded-5"
                style={{
                  width: "200px",
                  height: "200px",
                }}
              >
                <Card.Body className=" d-flex align-items-center justify-content-center flex-column">
                  <Card.Title className="fs-1 text-danger">
                  {counterOn && (
                        <CountUp
                          start={1000}
                          end={8600}
                          duration={10}
                          delay={2}
                        ></CountUp>
                      )}
                  </Card.Title>
                  <Card.Text className=" mt-2 fs-6 txtcol">
                    ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-5" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={1200}>
              <Card
                className=" hov shadow rounded-5"
                style={{
                  width: "200px",
                  height: "200px",
                }}
              >
                <Card.Body className=" d-flex align-items-center justify-content-center flex-column">
                  <Card.Title className="fs-1">
                  {counterOn && (
                        <CountUp
                          start={0}
                          end={1600}
                          duration={10}
                          delay={4}
                        ></CountUp>
                      )}
                  </Card.Title>
                  <Card.Text className=" mt-2 fs-6 txtcol">
                    မျိုးစုပေါင်း
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-5" data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay={1400}>
              <Card
                className="hov shadow rounded-5"
                style={{
                  width: "200px",
                  height: "200px",
                }}
              >
                <Card.Body className=" d-flex align-items-center justify-content-center flex-column">
                  <Card.Title className="fs-1">
                  {counterOn && (
                        <CountUp
                          start={0}
                          end={155}
                          duration={10}
                          delay={6}
                        ></CountUp>
                      )}
                    </Card.Title>
                  <Card.Text className=" mt-2 fs-6 txtcol">
                    မျိုးရင်းပေါင်း
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-5" data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay={1600}>
              <Card
                className="hov shadow rounded-5"
                style={{
                  width: "200px",
                  height: "200px",
                }}
              >
                <Card.Body className=" d-flex align-items-center justify-content-center flex-column">
                  <Card.Title className="fs-1">
                  {counterOn && (
                        <CountUp
                          start={0}
                          end={27}
                          duration={20}
                          delay={8}
                        ></CountUp>
                      )}
                    </Card.Title>
                  <Card.Text className=" mt-2 fs-6 txtcol">
                    မျိုးစဉ်ပေါင်း
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Home;
