import { Link } from "react-router-dom";
import "../css/not-found.css"

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Səhifə tapılmadı</h2>
      <p>Axtardığınız səhifə mövcud deyil və ya silinib.</p>

      <Link to="/" className="notfound-btn">
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
};

export default NotFound;

