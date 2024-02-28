import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BirdDetails = () => {
  const { id } = useParams();
  const { data: bird, error, isPending } = useFetch('https://bird-json-server-five.vercel.app/Tbl_Bird/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('https://bird-json-server-five.vercel.app/Tbl_Bird/' + id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/BirdList');
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {bird && (
            <article className="mt-4">
              <div className="card">
              <img src={require(`../src/${bird.ImagePath}`)} alt={bird.BirdEnglishName} className="card-img-top" style={{ maxHeight: "400px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h2 className="card-title">{bird.BirdMyanmarName}</h2>
                  <h2 className="card-title">{bird.BirdEnglishName}</h2>
                  <p className="card-text">{bird.Description}</p>
                  <button onClick={() => navigate('/BirdList')} className="btn btn-dark  mx-3">Back</button>
                  <button onClick={handleClick} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default BirdDetails;
