import React from "react";
import { defer, useLoaderData, useAsyncValue, Form } from "react-router-dom";
import { getPackageLocation } from "../api/packages";
import { getContact, updateContact, sleep } from "../contacts";

export async function loader({ params }) {
  const packageLocationPromise = getPackageLocation(params.packageId);

  return defer({
    packageLocation: packageLocationPromise,
  });
}

export function About() {
  return (
    <div
      className="container"
      style={{ height: "1500px", backgroundColor: "#eee" }}
    >
      <Form method="get" action="/slc/hotels">
        <select name="sort">
          <option value="price">Price</option>
          <option value="stars">Stars</option>
          <option value="distance">Distance</option>
        </select>

        <fieldset>
          <legend>Star Rating</legend>
          <label>
            <input type="radio" name="stars" value="5" /> ★★★★★
          </label>
          <label>
            <input type="radio" name="stars" value="4" /> ★★★★
          </label>
          <label>
            <input type="radio" name="stars" value="3" /> ★★★
          </label>
          <label>
            <input type="radio" name="stars" value="2" /> ★★
          </label>
          <label>
            <input type="radio" name="stars" value="1" /> ★
          </label>
        </fieldset>

        <fieldset>
          <legend>Amenities</legend>
          <label>
            <input type="checkbox" name="amenities" value="pool" /> Pool
          </label>
          <label>
            <input type="checkbox" name="amenities" value="exercise" /> Exercise
            Room
          </label>
        </fieldset>
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}

function PackageLocation() {
  const packageLocation = useAsyncValue();
  return (
    <p>
      Your package is at {packageLocation.latitude} lat and{" "}
      {packageLocation.longitude} long.
    </p>
  );
}

function PackageLocation2() {
  const packageLocation = useAsyncValue();
  return (
    <p>
      Your package is at xxxxx {packageLocation.latitude} lat and xxxxx
      {packageLocation.longitude} long.
    </p>
  );
}
