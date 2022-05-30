import {
  works,
  skills
} from '../data/data.js';

const technologies = document.querySelector('.technologies');
const projects = document.querySelector('.allProjects');

showProjects();
showSkills();

function showProjects() {
  works.map(function (work) {
    const html = `         
      <div class="mx-auto ">
        <a href="${work.url}" target="_blank">
          <div class="card mr-1 p-hover" style="width: 18rem;">
            <img src="img/project${work.id}.png" class="card-img-top" alt="project"/>
          <div class="card-body ">        
          <a href="${work.link}" target="_blank" class="btn-c btn btn-primary bg-dark rounded-pill col-6"><i
            class="bi bi-github"></i>View Code
          </a>
          <a href="${work.url}" target="_blank" 
                class="btn-c btn btn-primary bg-dark rounded-pill">
                <i class="bi bi-eye"></i>
                Live View
          </a>
          <p class="card-text text-dark d-flex justify-content-center pb-1">
            ${work.description}          
          </p>
        </a>
      </div>   
  `;
    projects.insertAdjacentHTML('beforeend', html);
  });
}

function showSkills() {
  skills.map(function (work) {
    const html = `         
      <span>${work}</span>   
  `;
    technologies.insertAdjacentHTML('beforeend', html);
  });
}