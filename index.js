let profileCard = document.getElementById("profileCard")
let loader = document.getElementById('loader')
let userImg
let searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', (e) => {
    profileCard.innerHTML = ""
    loader.classList.toggle("hidden")
    search()
})

async function search(){
    try {
        let searchText = document.getElementById('searchText').value
        if (searchText == "") {
            alert("Input field cannot be empty")
        }
        else{
            let profile = await fetch(`https://api.github.com/users/${searchText}`)
            let profileData = await profile.json()
            let div = `<div id="card">
            <div id="leftCard">
                <img src=${profileData.avatar_url} alt="User Image" id="userImg">    
                <p id="userName">${profileData.name}</p>
                <p id="userBio">${profileData.bio}</p>
            </div>
            <div id="rightCard">
                <div>
                    <div>
                        <p>Follower</p>
                        <p id="userFollower">${profileData.followers}</p>
                    </div>
                    <div>
                        <p>Following</p>
                        <p id="userFollowing">${profileData.following}</p>
                    </div>
                    <div>
                        <p>Repo</p>
                        <p id="userRepo">${profileData.public_repos}</p>
                    </div>
                </div>
                <div>
                    <a href=${profileData.html_url} id="visitProfile">Visit Profile</a>
                </div>
            </div>
        </div>`
        profileCard.innerHTML = div
        loader.classList.toggle("hidden") 
        console.log(div)
        }
    } catch (err) {
        console.log("Invalid user name")
    }
}