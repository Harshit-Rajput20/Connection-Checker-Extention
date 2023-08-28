let online = true;
let popup = document.querySelector(".popup");
const set = popup.querySelector(".title");
const msg = popup.querySelector(".desc");
popup.classList.add("show");
const checkConn = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    online = response.status >= 200;
  } catch (error) {
    online = false;
  }

  console.log(online);
  handlePopup(online);
};

const handlePopup = (status) => {
  if (status) {
    // return popup.classList.remove("show");
    set.innerText = "good connection";
    msg.innerText = "your connection is available";
    popup.classList.add("goodConnection");
  } else {
    console.log(status);

    set.innerText = "lost connection";
    msg.innerText = "your connection is unavailable";
    popup.classList.remove("goodConnection");
    popup.classList.add("popup");
  }
  //   popup.classList.add("show");
};

checkConn();
