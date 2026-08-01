import { Link } from "react-router";
import Image404 from "../../assets/img/404.svg";

function Page404() {
  return (
    <main className="error-page">
      <section className="error-card">
        <a className="auth-brand justify-content-center" href="index.html">
          <span className="brand-icon">
            <i className="bi bi-grid-1x2-fill" aria-hidden="true"></i>
          </span>
          <span>
            <strong>adminHMD</strong>
            <small>Error Center</small>
          </span>
        </a>
        <img className="error-illustration" src={Image404} alt="Page not found illustration" />
        <div className="error-code">404</div>
        <h1 className="h3 mb-2">Page Not Found</h1>
        <p className="text-muted mb-4">The page you are looking for does not exist or has been moved.</p>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <Link className="btn btn-primary" to="/">
            <i className="bi bi-speedometer2" aria-hidden="true"></i> Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page404;
