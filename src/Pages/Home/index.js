import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
       <h1>Home</h1>
      <br/>
      <Link to="/Filme">Filme</Link>
    </div>
  );
}
