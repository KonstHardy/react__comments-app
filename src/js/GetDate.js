import React from "react";

function getDate() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let fullDate = `${(day > 9 ? "" : "0") + day}/${
    (month > 9 ? "" : "0") + month
  }/${year} в ${(hours > 9 ? "" : "0") + hours}:${
    (minutes > 9 ? "" : "0") + minutes
  }:${(seconds > 9 ? "" : "0") + seconds}`;
  return fullDate;
}

export default getDate;
