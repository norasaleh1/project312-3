 
/******** Register New Kid Page ********/
document.addEventListener("DOMContentLoaded", function () {
const registerButton = document.getElementById("Register-Button");
if (registerButton) {
    registerButton.addEventListener("click", function () {
        let firstName = document.getElementById("first-name").value.trim();
        let lastName = document.getElementById("last-name").value.trim();
        let fullName = firstName + " " + lastName;
        let dob = document.getElementById("dob").value;
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value;
        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("email").value.trim();
        let photoInput = document.getElementById("photo");

        if (!firstName || !lastName || !dob || !age || !gender || !phone || !email) {
            alert("Please fill in all fields.");
            return;
        }
		
if (/^\d/.test(firstName) || /^\d/.test(lastName)) {
    alert("Child's name cannot start with a number.");
    return;
}



        if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
            alert("Phone number must be 10 digits.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address, Email must contain '@'");
            return;
        }

        if (new Date(dob) > new Date("2020-12-31")) {
            alert("Child must be at least 5 years old.");
            return;
        }

        let kids = JSON.parse(localStorage.getItem("kids")) || [];
        kids.push(fullName);
        localStorage.setItem("kids", JSON.stringify(kids));

        let reader = new FileReader();

        reader.onload = function () {
            let kidData = `
                <div style="border: 1px solid #ccc; padding: 20px; margin-top: 20px;">
                    <h3>Child registered successfully</h3>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Date of Birth:</strong> ${dob}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <img src="${reader.result}" width="150" style="margin-top:10px;" />
                </div>
            `;
            document.querySelector(".Register-container").insertAdjacentHTML("beforeend", kidData);
        };

        if (photoInput.files[0]) {
            reader.readAsDataURL(photoInput.files[0]);
        } else {
            let kidData = `
                <div style="border: 1px solid #ccc; padding: 20px; margin-top: 20px;">
                    <h3>Child registered successfully</h3>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Date of Birth:</strong> ${dob}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p>No photo uploaded.</p>
                </div>
            `;
            document.querySelector(".Register-container").insertAdjacentHTML("beforeend", kidData);
        }
    });
}
 
 
 
 
 
document.querySelectorAll('.testimonial').forEach(testimonial => {
    const hoverBox = testimonial.querySelector('.hover-info');
    const name = testimonial.dataset.name;
    const rating = testimonial.dataset.rating;
    const feedback = testimonial.dataset.feedback;

    hoverBox.innerHTML = `
        <strong>Parent Name:</strong> ${name}<br>
        <strong>Rating:</strong> ${'★'.repeat(rating)}<br>
        <strong>Feedback:</strong> ${feedback}
    `;
});

const customizeButton = document.getElementById('customize-button');
const head = document.head;

let isDarkMode = false;
let darkThemeLink;

if (customizeButton) {
    customizeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
        
            darkThemeLink = document.createElement('link');
            darkThemeLink.rel = 'stylesheet';
            darkThemeLink.href = 'style2.css';
            darkThemeLink.id = 'blue-theme-style';
            head.appendChild(darkThemeLink);
        } else {
        
            const existingLink = document.getElementById('blue-theme-style');
            if (existingLink) {
                existingLink.remove();
            }
        }
    });
}
});




/******** Admin Page ********/


	
	
	
	document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      document.querySelectorAll(".more-kid").forEach(item => {
        item.classList.remove("d-none");
      });
      this.style.display = "none"; 
    });
  }
});

	


	document.addEventListener("DOMContentLoaded", function () {
	const today = new Date();
	const dayOfWeek = today.getDay(); 

	const sunday = new Date(today);
	sunday.setDate(today.getDate() - dayOfWeek);

	const options = { weekday: 'long', day: 'numeric', month: 'long' };
	const formattedDate = sunday.toLocaleDateString('en-US', options);

	
	const dateBox = document.getElementById("date-box");
	if (dateBox) {
		dateBox.innerHTML = `<h2>Week starting: ${formattedDate}</h2>`;
	} 
});
 
 document.addEventListener("DOMContentLoaded", function () {
  const customizeBtn = document.getElementById("customize-button");
  let isCustom = false;

  if (customizeBtn) {
    customizeBtn.addEventListener("click", function () {
      const heroImg = document.querySelector(".hero img");
      if (heroImg) {
        if (isCustom) {
          heroImg.src = "img/imghero.png";
        } else {
          heroImg.src = "img/imghero3.png";
        }
        isCustom = !isCustom;
      }
    });
  }
});







/******** ِActivty_Evaltion (activities) Page ********/

    document.addEventListener("DOMContentLoaded", function () {
  const enrollForm = document.getElementById("enrollForm");
  const kidSelect = document.getElementById("kid");
  const resultContainer = document.getElementById("resultContainer");
  const filterSelect = document.getElementById("enroll-filter");
  const activityCards = document.querySelectorAll(".enroll-card");

  if (!enrollForm || !kidSelect || !resultContainer || !filterSelect || activityCards.length === 0) return;

  
  const storedKids = JSON.parse(localStorage.getItem("kids")) || [];
  kidSelect.innerHTML = '<option value="">-- Select Kid --</option>';
  storedKids.forEach(name => {
    const option = document.createElement("option");
    option.value = option.textContent = name;
    kidSelect.appendChild(option);
  });

 
  const activityData = [
    { name: "Swimming", coach: "Faisal Ahmed", prerequisite: "swim-gear", objective: "fitness" },
    { name: "Karate", coach: "Omar Khalid", prerequisite: "commitment", objective: "self-confidence" },
    { name: "Horse Riding", coach: "Fabio Matteo", prerequisite: "clothing", objective: "focus" },
    { name: "Theater Arts", coach: "James William", prerequisite: "acting", objective: "public-speaking" },
    { name: "Gardening", coach: "Wang Mei", prerequisite: "nature", objective: "sustainability" },
    { name: "Handicrafts", coach: "Saleh Yousuf", prerequisite: "patience", objective: "creativity" },
    { name: "Coding Basics", coach: "Nora Smith", prerequisite: "none", objective: "logic-building" }
  ];

  
  const coaches = [...new Set(activityData.map(a => a.coach))];
  const prerequisites = [...new Set(activityData.map(a => a.prerequisite))];
  const objectives = [...new Set(activityData.map(a => a.objective))];

  filterSelect.innerHTML = ""; 

  const buildOptGroup = (label, items) => {
    const group = document.createElement("optgroup");
    group.label = label;
    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item.toLowerCase().replace(/\s+/g, '-');
      option.textContent = item;
      group.appendChild(option);
    });
    return group;
  };

  filterSelect.appendChild(buildOptGroup("Coach", coaches));
  filterSelect.appendChild(buildOptGroup("Prerequisite", prerequisites.filter(p => p !== "none")));
  filterSelect.appendChild(buildOptGroup("Objective", objectives));

  
  filterSelect.addEventListener("change", function () {
    const selectedFilter = filterSelect.options[filterSelect.selectedIndex].textContent.toLowerCase();


    activityCards.forEach(card => {
      const tag = card.querySelector(".tag");
      if (!tag) return;

      const activityName = tag.textContent.trim();
      const activity = activityData.find(a => a.name.toLowerCase() === activityName.toLowerCase());
      if (!activity) return;

      const match =
        activity.coach.toLowerCase().includes(selectedFilter) ||
        activity.prerequisite.toLowerCase().includes(selectedFilter) ||
        activity.objective.toLowerCase().includes(selectedFilter);

      card.style.display = match ? "inline-block" : "none";
    });
  });

 
  enrollForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedKid = kidSelect.value;
    const selectedActivities = Array.from(enrollForm.querySelectorAll("input[name='activity']:checked"));

    if (!selectedKid) {
      alert("Please select a kid to enroll.");
      return;
    }
    if (selectedActivities.length === 0) {
      alert("Please select at least one activity.");
      return;
    }

    resultContainer.innerHTML = "";
    const listItems = selectedActivities.map(cb => {
      const activity = activityData.find(a => a.name.toLowerCase() === cb.value.toLowerCase());
      return activity ? `<li><strong>${activity.name}</strong> - Coach: ${activity.coach}</li>` : "";
    }).join("");

    resultContainer.innerHTML = `
      <h3>Enrollment Successful!</h3>
      <p><strong>Kid:</strong> ${selectedKid}</p>
      <ul>${listItems}</ul>
    `;

    enrollForm.reset();
    activityCards.forEach(card => card.style.display = "inline-block");
  });
});



   //Parent dashboard

function getKidsFromHTML() {
    const htmlCards = document.querySelectorAll(".parent-card");
    const kids = [];

    htmlCards.forEach(card => {
        const name = card.querySelector("strong")?.textContent.trim();
        const lines = card.querySelector("div").innerText.trim().split("\n");
        const age = parseInt(lines[1]);
        const gender = lines[2];
        const image = card.querySelector("img")?.getAttribute("src");

        if (name && age && gender && image) {
            kids.push({ name, age, gender, image });
        }
    });

    return kids;
}


function getKidsFromStorage() {
    const kidsFromStorage = JSON.parse(localStorage.getItem("kids")) || [];

    
    const filtered = kidsFromStorage.filter(name => {
        return typeof name === 'string' && name.trim().length > 2 && isNaN(name);
    });

    return filtered.map(name => ({
        name: name,
        age: 10,
        gender: "Unknown",
        image: ""
    }));
}


function displayKids(kids) {
    const container = document.querySelector(".Parentcard-box");
    if (!container) return; // Exit if element not found

    container.innerHTML = "";

    kids.forEach(kid => {
        const card = document.createElement("div");
        card.className = "parent-card";
        card.innerHTML = `
            <img src="${kid.image}" alt="Child">
            <div>
                <strong>${kid.name}</strong><br>
                ${kid.age}<br>
                ${kid.gender}
            </div>
        `;
        container.appendChild(card);
    });
}


function sortKids(kids, method) {
    const sorted = [...kids];

    if (method === "Ascending-name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (method === "Descending-name") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (method === "Ascending-age") {
        sorted.sort((a, b) => a.age - b.age);
    } else if (method === "Descending-age") {
        sorted.sort((a, b) => b.age - a.age);
    }

    return sorted;
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".Parentcard-box");
    const sortSelect = document.getElementById("sort");

    
    if (container && sortSelect) {
        const htmlKids = getKidsFromHTML();
        const storedKids = getKidsFromStorage();
        const allKids = [...htmlKids];

        
        storedKids.forEach(kidFromStorage => {
            const isDuplicate = allKids.some(htmlKid => htmlKid.name === kidFromStorage.name);
            if (!isDuplicate) {
                allKids.push(kidFromStorage);
            }
        });

        displayKids(allKids);

        
        sortSelect.addEventListener("change", () => {
            const updatedHTML = getKidsFromHTML();
            const updatedStorage = getKidsFromStorage();
            const allUpdated = [...updatedHTML];

            updatedStorage.forEach(kidFromStorage => {
                const isDuplicate = allUpdated.some(htmlKid => htmlKid.name === kidFromStorage.name);
                if (!isDuplicate) {
                    allUpdated.push(kidFromStorage);
                }
            });

            const sorted = sortKids(allUpdated, sortSelect.value);
            displayKids(sorted);
        });
    }
});