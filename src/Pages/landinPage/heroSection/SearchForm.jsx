import "./searchForm-Style.css";
const SearchForm = () => {
  return (
    <div className="container">
      <form className="form ">
        <div className="form-control">
          <input
            type="text"
            // className="form-control"
            id="staticEmail2"
            required
          />
          <label htmlFor="staticEmail2">Email</label>
        </div>
        <div className="form-control">
          <label htmlFor="inputPassword2">Password</label>
          <input
            type="password"
            // className="form-control"
            id="inputPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="inputPassword2">Password</label>
          <input
            type="password"
            // className="form-control"
            id="inputPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div className=" form-control">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
