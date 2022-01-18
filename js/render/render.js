import { data } from '../data/data.js';

const projects = document.querySelector('.allProjects');

renderProjects();

function renderProjects() {
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
    projects.insertAdjacentHTML('beforeend', html);
  });
}
