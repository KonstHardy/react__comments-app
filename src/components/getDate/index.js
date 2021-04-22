function getDate() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let date = `${(day > 9 ? "" : "0") + day}/${
    (month > 9 ? "" : "0") + month
  }/${year}`;

  let time = `${(hours > 9 ? "" : "0") + hours}:${
    (minutes > 9 ? "" : "0") + minutes
  }:${(seconds > 9 ? "" : "0") + seconds}`;

  let fullDate = `${date} at ${time}`;
  return fullDate;
}

export default getDate;
