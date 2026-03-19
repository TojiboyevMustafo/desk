 fetch("/components/intro/intro.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("intro").innerHTML = data;
      });
    fetch("/components/rating/rating.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("rating").innerHTML = data;
      });
      fetch("/components/video/video.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("video").innerHTML = data;
      });
      fetch("/components/news/news.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("news").innerHTML = data;
      });
      fetch("/components/store/store.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("store").innerHTML = data;
      });
      fetch("/components/location/location.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("location").innerHTML = data;
      });
      fetch("/components/guest/guest.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("guest").innerHTML = data;
      });