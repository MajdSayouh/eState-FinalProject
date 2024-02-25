import cardImage from "../../../assets/download.jpeg";
const CategorySection = () => {
  return (
    <div className="bg-light">
      <div className="pt-5 container ">
        <div className="pb-5 text-center">
          <h3>Category By:</h3>
        </div>
        <div className="d-flex gap-4">
          <div className="">
            <div className="dark-shadow-card ">
              <div className="card">
                <img src={cardImage} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center pt-5 text-white">
                    Villa
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {" "}
            <div className="dark-shadow-card">
              <div className="card">
                <img src={cardImage} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center pt-5 text-white">
                    House
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div className="dark-shadow-card">
              <div className="card">
                <img src={cardImage} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center pt-5 text-white">
                    Land
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div className="dark-shadow-card">
              <div className="card">
                <img src={cardImage} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center pt-5 text-white">
                    Land
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
