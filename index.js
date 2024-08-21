let profileCard = document.getElementById("profileCard")
let loader = document.getElementById('loader')
let userImg
let searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    profileCard.innerHTML = ""
    loader.classList.toggle("hidden")
    search()
})

async function search() {
    try {
        let searchText = document.getElementById('searchText').value

        if (searchText == "") {
            alert("Input field cannot be empty")
        }
        else {
            let profile = await fetch(`https://api.github.com/users/${searchText}`)
            let profileData = await profile.json()

            if (profile.status === 404) {              // Check if the user is not found
                profileCard.innerHTML = `<h2>No result found. Please check the username and try again.</h2>`;
                loader.classList.toggle("hidden");
                return;
            }

            let div = `<div id="card">
            <div id="leftCard">
                <img src=${profileData.avatar_url} alt="User Image" id="userImg">    
                <h1 id="userName">${profileData.name}</h1>
                <p id="userBio">${profileData.bio}</p>
            </div>
            <div id="rightCard">
                <div id="rightCardTop">
                    <div class="rightCardBox">
                        <p>Follower</p>
                        <p id="userFollower">${profileData.followers}</p>
                    </div>
                    <div class="rightCardBox">
                        <p>Following</p>
                        <p id="userFollowing">${profileData.following}</p>
                    </div>
                    <div class="rightCardBox">
                        <p>Repo</p>
                        <p id="userRepo">${profileData.public_repos}</p>
                    </div>
                </div>
                <div id="rightCardBottom">
                    <a href=${profileData.html_url} target="_blank" id="visitProfileText">Visit Profile</a>
                </div>
            </div>
            </div>`
            profileCard.innerHTML = div
            loader.classList.toggle("hidden")
        }
    } catch (err) {
        console.log("Invalid user name")
    }
}