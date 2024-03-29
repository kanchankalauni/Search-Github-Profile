let userImg = document.getElementById('userImg')
let userName = document.getElementById('userName')
let userBio = document.getElementById('userBio')
let userFollower = document.getElementById('userFollower')
let userFollowing = document.getElementById('userFollowing')
let userRepo = document.getElementById('userRepo')

let searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', (e) => {
    search()
})

async function search(){
    try {
        let searchText = document.getElementById('searchText').value
        // console.log(searchText)
        let profile = await fetch(`https://api.github.com/users/${searchText}`)
        let profileData = await profile.json()
        userImg.innerHTML = profileData.avatar_url
        userName.innerHTML = profileData.name
        userBio.innerHTML = profileData.bio
        userFollower.innerHTML = profileData.followers
        userFollowing.innerHTML = profileData.following
        userRepo.innerHTML = profileData.public_repos

        console.log(profileData)
        console.log(profileData.avatar_url)
    } catch (err) {
        console.log("Invalid user name")
    }
}