export default function Content() {
  return (
    <div className="container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2>Profile</h2>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-3 text-center">
            <i
              class="bi bi-file-image"
              style={{ color: "cornflowerblue", fontSize: "7rem" }}
            ></i>
          </div>
          <div className="col-5 pt-5">
          <h3 >DEMO USER</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-5">
            <h2>Account</h2>
            <hr />
            <div className="row mb-3">
              <div className="col-3">
                <span style={{ color: "#a8a8a8" }}>E-mail</span>
              </div>
              <div className="col-3"></div>
              <div className="col-3">demo@xyz.com</div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <span style={{ color: "#a8a8a8" }}>PAN</span>
              </div>
              <div className="col-3"></div>
              <div className="col-3">*123C</div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <span style={{ color: "#a8a8a8" }}>Phone</span>
              </div>
              <div className="col-3"></div>
              <div className="col-3">123456789</div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <span style={{ color: "#a8a8a8" }}>Demat(BO)</span>
              </div>
              <div className="col-3"></div>
              <div className="col-3">1200000000011111</div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <h2>Bank Accounts</h2>
            <hr />
            <div className="row mb-3">
              <div className="col">
                <span>*1234 </span>
                <span style={{ color: "#a8a8a8" }}> ICICI BANK</span>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5">
            <h2>Settings</h2>
            <hr />
            <div className="row mb-3">
              <div className="col-3">
                <span style={{ color: "#444444" }}>Chart</span>
              </div>
              <div className="col-3"></div>
              <div className="col-5">
                <input type="radio" name="chart" className="me-2" />
                <span>ChartIQ</span>
                <br />
                <input type="radio" name="chart" className="me-2" />
                TradingView v1.0
                <br />
                <input type="radio" name="chart" className="me-2" />
                TradingView v2.0
                <br />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <span style={{ color: "#444444" }}>Theme</span>
              </div>
              <div className="col-3"></div>
              <div className="col-5">
                <input type="radio" name="theme" className="me-2" />
                <span>Default</span>
                <input type="radio" name="theme" className="me-2 ms-4" />
                <span>Dark</span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <h2>Sessions</h2>
            <a style={{ color: "#4184f3" }} href="#">
              Clear All
            </a>
            <hr />
            <div className="row mb-3">
              <div className="col">
                <span>Web</span>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
