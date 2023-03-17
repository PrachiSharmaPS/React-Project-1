import '.././App.css';

import Nav from './nav';
function Home() {
  return (
    <>
      <Nav />
          <div className="carousel-item active">
            <div className="carousel-caption d-none d-md-block">
              <h5 className="p-3 mb-2 bg-light text-dark">Book Management Systems </h5>
            </div>
           
          </div>
     
      <div className="Headding">
        <h1>Book Management Project</h1>
      </div>
      <div className="fields">
                <div className="field" onClick={() => window.location.href='/Register'}><h3>Create Account</h3></div>
                <div className="field" onClick={() => window.location.href='/Login'}><h3>Login</h3></div>
                <div className="field" onClick={() => window.location.href='/AddBook'}><h3>Add Book</h3></div>
      </div>
    
    </>
  )
}
export default Home