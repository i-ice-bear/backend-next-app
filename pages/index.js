import React from "react";
import NavbarComponent from "./Router/Navbar";

const IndexComponent = () => {
  return (
    <>
    <div className="container my-5">
      <div class="container">
        <form>
          <fieldset class="mb-3 row">
            <legend class="col-form-legend col-4">Lexend Giga</legend>
            <div class="col-8">
              Login now
            </div>
          </fieldset>
          <div class="mb-3 row">
            <label for="inputName" class="col-4 col-form-label">Name</label>
            <div class="col-8 my-3">
              <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Enter your name" />
            </div>
            <label for="inputName" class="col-4 col-form-label">Email</label>
            <div class="col-8">
              <input type="email" class="form-control my-3" name="inputName" id="inputName" placeholder="Enter your email" />
            </div>
            <label for="inputName" class="col-4 col-form-label">Password</label>
            <div class="col-8">
              <input type="password" class="form-control my-3" name="inputName" id="inputName" placeholder="Enter your password" />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="offset-sm-4 col-sm-8">
              <button type="submit" class="btn btn-primary">Submit now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default IndexComponent;
