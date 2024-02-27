import { Link } from "react-router-dom";

const BirdList = ({ brids }) => {
  return (
    <div className="row">
      {brids.map((bird) => (
        <div className="col-md-4 mb-4" style={{ width: "18rem" }} key={bird.id}>
          <div className="card">
          <Link to={`/birds/${bird.id}`}>
            <div className="card-body">
            <img src={require(`../src/${bird.ImagePath}`)} style={{ maxWidth: "100%", height: "100%"}}/>
              <div className="card-text">
                <h5>{bird.BirdMyanmarName}</h5>
                <h5>{bird.BirdEnglishName}</h5>
              </div>
            </div>
          </Link>
        </div>
        </div>
      ))}
    </div>
  );
};

export default BirdList;
