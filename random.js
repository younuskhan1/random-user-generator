const loadRandomUsers = async () => {
    // If you want to see all female or male, just change
    //  the male or female after = (equal to) sign of this below url. 
    const url = `https://randomuser.me/api/?gender=male`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const randomUser = data.results[0];
        displayRandomUsers(randomUser);
    }
    catch (error) {
        console.log(error);
    }
}
const displayRandomUsers = (randomUser) => {
    console.log(randomUser);
    const randomContainer = document.getElementById("random-section");
    randomContainer.innerHTML = `
    <p>Name: ${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}</p>
    <img class="random-image" src="${randomUser.picture.large}" alt="">
    <p> My Id : ${randomUser.id.name ? randomUser.id.name : "Not available"} ${randomUser.id.value ? randomUser.id.value : "Not available"}</p>
    <p> My Phone Number : ${randomUser.phone}</p>
    <p> My Email : ${randomUser.email}</p>
    <p> My Gender : ${randomUser.gender} My cell : ${randomUser.cell}</p>
    <p> Registered Date : ${randomUser.registered.date}</p>
    <p>Username : ${randomUser.login.username} password : ${randomUser.login.password}</p>
    <p> Login Status : ${randomUser.login.uuid}</p>
    <p> My Date of Birth : ${randomUser.dob.date} My age : ${randomUser.dob.age} </p>
    <p> My Location : ${randomUser.location.street.name} ${randomUser.location.city} ${randomUser.location.state} ${randomUser.location.country}</p>
       `;
}

loadRandomUsers();