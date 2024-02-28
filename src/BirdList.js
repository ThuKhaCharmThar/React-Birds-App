import { Link } from "react-router-dom";
import "./BirdList.css";

const BirdList = ({ brids }) => {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-4 g-4 mt-5" data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay={100}>
      {brids.map((bird) => (
        <div className="col mb-3" key={bird.id}>
          <div
            className="card border-0 shadow rounded-3"
            style={{
              // width: "300px",
              // height: "300px",
              backgroundColor: "#fffff",
             
            }}
          >
            <Link
              to={`/birds/${bird.id}`}
              className="text-decoration-none text-dark"
            > 
              <div className="" style={{  overflow: "hidden",height:"200px" }}>
                <img
                  src={require(`../src/${bird.ImagePath}`)}
                  className="zoom img-fluid card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              </div>

              <div className="card-body mt-3 p-2">
                <h6 className="card-title">{bird.BirdMyanmarName}</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {bird.BirdEnglishName}
                </h6>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BirdList;
