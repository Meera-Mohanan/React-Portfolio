//imports the images for each project
import passwordGenerator from "../../assets/images/Password-generator.png";
import CurrencyConvertor from "../../assets/images/Screenshot Project1.png";
import Weather_Dashboard from "../../assets/images/Screen_Shot_Weather_Dashboard.png";
import Tech_Blog from "../../assets/images/screen-short_MVC.png";
import LogoGenerator from "../../assets/images/Screenshot Logogenerator.png";
import WorkDayScheduler from "../../assets/images/Screen-Shot-Work-Day-Scheduler.png";
import codeQuiz from "../../assets/images/screenShot-codeQuiz.png";
import noteTaker from "../../assets/images/Screenshot-noteTaker.png";
import booktique from "../../assets/images/Screenshot Project2 booktique.png";

const projectList = [
        {
        title: "Password-Generator",
        appUrl: "https://meera-mohanan.github.io/Password-Generator-JS-Challenge/",
        image: passwordGenerator,
        description: "Password generator using javascript",
        technologies: "HTML,CSS,JAVASCRIPT",
        GithubRepo: "https://github.com/Meera-Mohanan/Password-Generator-JS-Challenge"
    },
    {
        title: "Booktique",
        appUrl: "https://booktique-3b89fd189961.herokuapp.com/",
        image:booktique,
        description: "Booktique is a book review app that allows users to discover and review their favorite books. It provides a RESTful API built with Node.js, Express.js, and MySQL, and uses Handlebars.js as the template engine.",
        technologies: "MySQL, Express.js, Node.js, Handlebars.js, CSS",
        GithubRepo: "https://github.com/Meera-Mohanan/Booktique"
    },
    {
        title: "Weather-Dashboard",
        appUrl: "https://meera-mohanan.github.io/Weather-Dashboard/",
        image: Weather_Dashboard,
        description: " weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
        technologies: "Javascript, JQuery, Bootstrap, HTML, CSS",
        GithubRepo: "https://github.com/Meera-Mohanan/Weather-Dashboard"
    },
    {
        title: "Tech-Blog",
        appUrl: "https://tech-blog-app-heroku-c5bd3b7b367a.herokuapp.com/",
        image: Tech_Blog,
        description: "Tech_Blog creates a blog-style app where developers can create an account, edit their information, make or edit posts and comment on other users posts.",
        technologies: "Nodejs,Express,Sequelize,MySQL,",
        GithubRepo: "https://github.com/Meera-Mohanan/Tech-Blog"
    },
    
    {
        title: "Work-Day-Scheduler",
        appUrl: "https://meera-mohanan.github.io/Work-Day-Scheduler-Third-Party-API-Challenge/",
        image: WorkDayScheduler,
        description: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM.",
        technologies: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
        GithubRepo: "https://github.com/Meera-Mohanan/Work-Day-Scheduler-Third-Party-API-Challenge"
    },
    {
        title: "Code-Quiz",
        appUrl: "https://meera-mohanan.github.io/Code-Quiz/",
        image: codeQuiz,
        description: "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
        technologies: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
        GithubRepo: "https://github.com/Meera-Mohanan/Code-Quiz"
    },
    {
        title: "Currency-convertor",
        appUrl: " https://anju0806.github.io/currency-convertor-project/",
        image: CurrencyConvertor,
        description: "First Group Project.The Currency Converter is a useful tool for anyone who needs to deal with multiple currencies, whether for personal or business purposes.",
        technologies: "Html,Css,Bulma,Javascript,Jquery",
        GithubRepo: "https://github.com/Anju0806/currency-convertor-project"
    },
    {
        title: "Note-Taker",
        appUrl: " https://notetaker-github-e89f2e0e9bf0.herokuapp.com/",
        image: noteTaker,
        description: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
        technologies: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
        GithubRepo: "https://github.com/Meera-Mohanan/Note-Taker"
    },
    {
        title: "Logo-Generator",
        appUrl: "https://meera-mohanan.github.io/Password-Generator-JS-Challenge/",
        image: LogoGenerator,
        description: "The application enables users to generate a logo file with the input of text(3 characters),text color,choice of shape(circle, triangle and square) and shape color",
        technologies: "Html,Css,Javascript,Node.js",
        GithubRepo: "https://github.com/Meera-Mohanan/Password-Generator-JS-Challenge"
    },
]

export default projectList;
