const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post-wrapper")

let content = ""

for (let i=0; i < posts.length; i++) {
 
    content += `
                <section>
                    <div class="user-info">
                        <div>
                            <img class="avatar" src=${posts[i].avatar}>
                            </div>
                        <div>
                            <p class="bold small-text">${posts[i].name}</p>
                            <p class="small-text">${posts[i].location}</p>
                        </div>
                    </div>
                    <div>
                        <img class="post-img" src=${posts[i].post}>
                    </div>
                        <div>
                            <div class="icon-wrapper">
                            <img class="icons" src="images/icon-heart.png">
                            <img class="icons" src="images/icon-comment.png">
                            <img class="icons" src="images/icon-dm.png">
                        </div>
                        <p class="bold" id="likes">${posts[i].likes}</p>
                        <p><span class="bold">${posts[i].username}</span>${posts[i].comment}</p>
                    </div>
                </section>
              `  
}

postEl.innerHTML = content
