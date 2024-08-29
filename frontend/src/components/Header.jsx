

export default function Header() {
  return (
    <div className="shadow-sm">
      <div className="container mt-4">
        <div className="row" style={{ color: "whitesmoke" }}>
          <div className="col-3">
            <a className="pt-0"  href="#">
              <img src="frontend\public\logo.png" alt="Bootstrap" width={80} height={30} />
            </a>
          </div>
          <div className="col">
            <nav class="nav nav-underline">
              <a className="nav-link me-3" style={{ color: "#626262" }}>
                Dashboard
              </a>
              <a className="nav-link me-3" style={{ color: "#626262" }}>
                Orders
              </a>
              <a className="nav-link me-3" style={{ color: "#626262" }}>
                Holdings
              </a>
              <a className="nav-link me-3" style={{ color: "#626262" }}>
                Posiions
              </a>
              <a className="nav-link me-3" style={{ color: "#626262" }}>
                Bids
              </a>
              <a className="nav-link me-3" style={{ color: "#626262" }}>
                Funds
              </a>{" "}
              |
              <a className="nav-link mx-3" style={{ color: "#626262" }}>
                <i class="bi bi-person-circle me-2" style={{color:"cornflowerblue",fontSize:"1.2rem"}}></i>DEMOUSER
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
