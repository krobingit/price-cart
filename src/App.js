import './App.css';
export default function App() {
  return (
    <div className="App">
      <PricePlan />
    </div>
  );
}
function PricePlan() {

  return (
    <section className="cards-container">
    <div className="card">
      <h5 className="card-title">Free</h5>
      <h6 className="card-price">$0<span className="month">/month</span></h6>
     <hr/>
      <ul className ="detail-container">
      <li><i className ="fas fa-check"></i> Single User</li>
      <li><i className ="fas fa-check"></i> 5GB Storage</li>
      <li><i className ="fas fa-check"></i> Unlimited Public Projects</li>
      <li><i className ="fas fa-check"></i> Community Access</li>
      <li className ="text-light"><i className ="fas fa-times"></i> Unlimited
      Private Projects</li>
      <li className ="text-light"><i className ="fas fa-times"></i> Dedicated
      Phone Support</li>
      <li className ="text-light"><i className ="fas fa-times"></i> Free Subdomain
      </li>
      <li className ="text-light"><i className ="fas fa-times"></i> Monthly Status
      Reports</li>
      </ul>
      <div className ="button">
          <button className="subscribe">SUBSCRIBE</button>
      </div>
      </div>
<div className="card">
            <h5 className="card-title">Plus</h5>
            <h6 className="card-price">$9<span className="month">/month</span></h6>
            <hr/>
            <ul className="detail-container">
              <li><i className="fas fa-check"></i><b> 5 Users</b></li>
              <li><i className="fas fa-check"></i> 50GB Storage</li>
              <li><i className="fas fa-check"></i> Unlimited Public Projects</li>
              <li><i className="fas fa-check"></i> Community Access</li>
              <li><i className="fas fa-check"></i> Unlimited Private Projects</li>
              <li><i className="fas fa-check"></i> Dedicated Phone Support</li>
              <li><i className="fas fa-check"></i> Free Subdomain</li>
              <li className="text-light"><i className="fas fa-times"></i> Monthly Status
                Reports</li>
            </ul>
            <div className="button">
          <button className="subscribe">SUBSCRIBE</button>
            </div>
          </div>
 <div className="card">
            <h5 className="card-title">Pro</h5>
            <h6 className="card-price">$49<span className="month">/month</span></h6>
            <hr/>
            <ul className="detail-container">
              <li><i className="fas fa-check"></i><b> Unlimited Users</b>
              </li>
              <li><i className="fas fa-check"></i> 150GB Storage</li>
              <li><i className="fas fa-check"></i> Unlimited Public Projects</li>
              <li><i className="fas fa-check"></i> Community Access</li>
              <li><i className="fas fa-check"></i> Unlimited Private Projects</li>
              <li><i className="fas fa-check"></i> Dedicated Phone Support</li>
              <li><i className="fas fa-check"></i><b> Unlimited</b> Free
                Subdomains</li>
              <li><i className="fas fa-check"></i> Monthly Status Reports</li>
            </ul>
            <div className="button">
          <button className="subscribe">SUBSCRIBE</button>
            </div>
          </div>

      </section>
  );
}

