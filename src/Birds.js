import BirdList from "./BirdList";
import useFetch from "./useFetch";

const Birds = () => {
  const { error, isPending, data: birds } = useFetch('https://bird-json-server-five.vercel.app/Tbl_Bird')

  return (
    <div className="birds">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { birds && <BirdList brids={birds} /> }
    </div>
  );
}
 
export default Birds;