const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("a");
links[0].textContent = siteContent ["nav"]["nav-item-1"];
links[1].textContent = siteContent ["nav"]["nav-item-2"];
links[2].textContent = siteContent ["nav"]["nav-item-3"];
links[3].textContent = siteContent ["nav"]["nav-item-4"];
links[4].textContent = siteContent ["nav"]["nav-item-5"];
links[5].textContent = siteContent ["nav"]["nav-item-6"];

// new nav
let newLink = document.createElement("a");
let mainNav =document.querySelector("nav")
newLink.innerText = "Reviews"
mainNav.prepend(newLink)
newLink.style.color = "teal"
newLink.style.fontSize ='1.2rem'

let newLink2 =document.createElement("a")
let mainNav2 =document.querySelector("nav")
newLink2.innerText = "Info"
mainNav2.append(newLink2)
newLink2.style.color = "teal"
newLink2.style.fontSize ='1.2rem'




links.forEach(function (element) {
  element.style.color = "teal"
  element.style.fontSize ='1.2rem'
})



const head = document.querySelector("h1");
head.textContent =siteContent["cta"]["h1"];
let button = document.querySelector("button")
button.textContent = siteContent ["cta"]["button"];
const headimg = document.getElementById("cta-img");
headimg.setAttribute('src', siteContent["cta"][ "img-src"]);

let hfour = document.querySelectorAll("h4");
hfour[0] .textContent = siteContent["main-content"]["features-h4"];
hfour[1] .textContent = siteContent["main-content"]["about-h4"];
hfour[2] .textContent = siteContent["main-content"] ["services-h4"];
hfour[3] .textContent = siteContent["main-content"]["product-h4"];
hfour[4] .textContent = siteContent["main-content"] ["vision-h4"];
hfour[5] .textContent =siteContent ["contact"] ["contact-h4"];
let midimg =document .getElementById("middle-img");
midimg .setAttribute('src', siteContent ["main-content"]["middle-img-src"]);

const para =document .querySelectorAll("p");
para[0] .textContent =siteContent ["main-content"]["features-content"];
para[1] .textContent =siteContent ["main-content"]["about-content"];
para[2] .textContent =siteContent ["main-content"]["services-content"];
para[3] .textContent =siteContent ["main-content"] ["product-content"];
para[4] .textContent =siteContent ["main-content"] ["vision-content"];
para[5] .textContent =siteContent ["contact"] ["address"];
para[6] .textContent =siteContent ["contact"] ["phone"];
para[7] .textContent =siteContent ["contact"] ["email"];
para[8] .textContent =siteContent ["footer"] ["copyright"]




