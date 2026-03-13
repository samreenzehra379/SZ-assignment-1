// BOOK NOW BUTTON
const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", () => {
  alert("Booking request received! We will contact you soon.");
});

// PHOTO CATEGORIES ARRAY
const categories = [
  "Wedding Photography",
  "Portrait Photography",
  "Event Photography",
  "Nature Photography",
  "Fashion Photography"
];
const categoryList = document.getElementById("categoryList");

// ARROW FUNCTION: DISPLAY PHOTO CATEGORIES
const displayCategories = () => {
  categories.forEach(category => {
    const div = document.createElement("div");
    div.className = "category";
    div.textContent = category;
    categoryList.appendChild(div);
  });
};
displayCategories();

// FORM VALIDATION
const validateForm = () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if(name === "" || email === "" || message === ""){
    return false;
  }
  return true;
};

// SHOW FORM MESSAGE
const showMessage = (text) => {
  document.getElementById("formMessage").textContent = text;
};

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  if(validateForm()){
    showMessage("Form submitted successfully!");
  } else {
    showMessage("Please fill all fields!");
  }
});

// SMOOTH SCROLL
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior:"smooth" });
  });
});

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");
sections.forEach(sec => {
  if(sec.getBoundingClientRect().top < window.innerHeight){
    sec.classList.add("show");
  }
});
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 50){
      sec.classList.add("show");
    }
  });
});
