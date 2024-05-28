const projects = [
  {
    img: "./image/foodexpress.png",
    alt: "Food Delivery App",
    title: "Food Delivery App",
    description:
      "A task management web application with User Authentication built using Django framework.",
    linkgithub: "https://github.com/DipeshShrestha123/Food-Ordering-Application",
    linklive: "",
    filter: "Android App",
  },
  {
    img: "./image/Weather.png",
    alt: "Weather img",
    title: "Weather Web App",
    description:
      "A simple weather application that displays the current weather forecasts based on geolocation or search",
    linkgithub: "https://github.com/DipeshShrestha123/Weather_App",
    linklive: "https://dipeshshrestha123.github.io/Weather_App/",
    filter: "vanillajs",
  },
  {
    img: "./image/Todo.jpg",
    alt: "TO-DO",
    title: "TO-DO",
    description:"A simple To-Do web app made using HTML, CSS, and JavaScript.",
    linkgithub: "#",
    linklive: "#",
    filter: "React",
  },
  {
    img: "./image/quiz.png",
    alt: "quiz-generator",
    title: "Quiz Generator",
    description:
      "A dynamic quiz generator appl built using ReactJs, that creates a quiz based on the difficulty level and topics specified by the user.",
    linkgithub: "https://github.com/DipeshShrestha123/Quiz-Generator",
    linklive: "https://dipeshshrestha123.github.io/Quiz-Generator/",
    filter: "React",
  },
  {
    img: "./image/temp-converter.png",
    alt: "temperature-converter",
    title: "Temperature Converter",
    description:
      "A simple temperature converter webapp made using HTML, CSS and Javascript.",
    linkgithub: "https://github.com/DipeshShrestha123/Temperature-Converter",
    linklive: "https://dipeshshrestha123.github.io/Temperature-Converter/",
    filter: "vanillajs",
  },
  {
    img: "./image/background-generator.jpeg",
    alt: "background-generator",
    title: "Background Generator",
    description:
      "A simple javascript app that lets users to create different backgrounds and generates its CSS code.",
    linkgithub: "https://github.com/DipeshShrestha123/Background-Generator",
    linklive: "https://dipeshshrestha123.github.io/Background-Generator/",
    filter: "vanillajs",
  },
];

// Initially show all project cards
window.onload = () => {
  projects.forEach((project) => {
    createProjectCard(project);
  });
};

const handleFilter = (e) => {
  const filterName = e.target.value;
  const filteredProjects =
    filterName === "all"
      ? projects
      : projects.filter((project) => project.filter == filterName);

  const container = document.getElementById("project-wrapper");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  filteredProjects.forEach((project) => {
    createProjectCard(project);
  });

  changeFilterButtonColor(e, filterName);
};

const createProjectCard = (project) => {
  const cardWrap = document.createElement("div");
  cardWrap.className = "card-wrap";

  const image = document.createElement("img");
  image.src = project.img;
  image.alt = project.alt;
  image.className = "card-img";

  const title = document.createElement("div");
  title.textContent = project.title;
  title.className = "card-title";

  const description = document.createElement("div");
  description.textContent = project.description;
  description.className = "card-desc";

  const cardLinks = document.createElement("div");
  cardLinks.className = "card-links";

  // Add Live Preview link if available
  if (project.linklive) {
    const livePreviewLink = document.createElement("a");
    livePreviewLink.href = project.linklive;
    livePreviewLink.target = "_blank";
    livePreviewLink.textContent = "Live Preview";
    cardLinks.appendChild(livePreviewLink);
  }

  const githubLink = document.createElement("a");
  githubLink.href = project.linkgithub;
  githubLink.target = "_blank";
  const githubIcon = document.createElement("i");
  githubIcon.className = "fa-brands fa-github";
  const githubText = document.createElement("p");
  githubText.textContent = "Git Repo";
  githubLink.appendChild(githubIcon);
  githubLink.appendChild(githubText);

  cardLinks.appendChild(githubLink);

  cardWrap.appendChild(image);
  cardWrap.appendChild(title);
  cardWrap.appendChild(description);
  cardWrap.appendChild(cardLinks);

  const container = document.getElementById("project-wrapper");
  container.appendChild(cardWrap);
};

const changeFilterButtonColor = (e, filterName) => {
  const buttons = document.querySelectorAll(".filter-option");

  buttons.forEach((button) => button.classList.remove("filter-option-active"));

  const elem = e.target;
  elem.classList.add("filter-option-active");
};
