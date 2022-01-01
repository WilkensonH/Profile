const projects = document.querySelector(".allProjects");

const data = [
  // {
  //   id: 6,
  //   URL: "https://wilkensonh.github.io/restaurant_app/",
  //   LINK: "https://github.com/WilkensonH/restaurant_app/",
  //   LANG: " HTML Bootstrap",
  // },
  // {
  //   id: 5,
  //   URL: "https://wilkensonh.github.io/restaurant_app/",
  //   LINK: "https://github.com/WilkensonH/restaurant_app/",
  //   LANG: " HTML Bootstrap",
  // },
  {
    id: 4,
    URL: "https://wilkensonh.github.io/Guessing/",
    LINK: "https://github.com/WilkensonH/Guessing.git",
    LANG: "number Guessing game with javaScript",
  },
  {
    id: 3,
    URL: "https://wilkensonh.github.io/dicegame/",
    LINK: "https://github.com/WilkensonH/dicegame.git",
    LANG: "dice game with javaScript ",
  },
  {
    id: 2,
    URL: "https://bit.ly/3DKA81S",
    LINK: "https://github.com/WilkensonH/commerce.git",
    LANG: " React,Material-UI, commerce.js ",
  },
  {
    id: 1,
    URL: "https://wilkensonh.github.io/restaurant_app/",
    LINK: "https://github.com/WilkensonH/restaurant_app/",
    LANG: " HTML Bootstrap",
  },
];

data.map(function (data) {
  const html = `         
      <div class="mb-1 mx-auto p-height card-project">
        <a href="${data.URL}" target="_blank">
          <div class="card mr-1 p-hover" style="width: 18rem;">
            <img src="img/project${data.id}.png" class="card-img-top" alt="project"/>
          <div class="card-body ">
          <p class="card-text text-dark d-flex justify-content-center pb-1">
            ${data.LANG}          
          </p>
          <a href="${data.LINK}" target="_blank" class="btn-c btn btn-primary bg-dark rounded-pill col-6"><i
            class="bi bi-github"></i>View Code
          </a>
          <a href="${data.URL}" target="_blank" 
                class="btn-c btn btn-primary bg-dark rounded-pill">
                <i class="bi bi-eye"></i>
                Live View
          </a>
        </a>
      </div>   
  `;

  projects.innerHTML += html;
});
