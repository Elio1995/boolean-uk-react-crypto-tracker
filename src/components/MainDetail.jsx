import { useEffect, useState } from "react";
import { getCriptoUpdateUrl } from "../constants";

// This function give us the current time in seconds
function currentTime() {
  return Math.round(Date.now() / 1000);
}

/*
  Use this function with the updated_at timestamp you get from each coin item in the API response
 */
function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling dates
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}

export default function MainDetail(props) {
  return (
    <>
      <section className="main-detail__central">
        <div className="main-detail__update">
          {/* This part is for the challenge */}
        </div>
        <div className="main-detail__name">
          <h2>{props.selectedCripto.id}</h2>
          <p><span className="small">a.k.a </span>{props.selectedCripto.symbol}</p>
        </div>
        <div className="main-detail__price">
        <p>{`£${props.selectedCripto["current_price"]}`}</p>
        <p>{`Last updated at ${props.selectedCripto["last_updated"]}`}</p>
        </div>
      </section>
    </>
  );
}
