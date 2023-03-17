import '.././App.css';

import Nav from './nav';
function Home() {
  return (
    <>
      <Nav />
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className="carousel-caption d-none d-md-block">
              <h5 className="p-3 mb-2 bg-light text-dark">Book Management Systems </h5>
              <p className="text-warning">Purchase books Admin can also add the details of the book purchased from shops along with the shop name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="para">
        <h1>Book Management Project</h1>
      </div>
    
    </>
  )
}
export default Home
// https://source.unsplash.com/random/1920x1080/?black,dark