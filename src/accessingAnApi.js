 // the api to access and write out the json results
const getPosts = () => {
    return fetch(`http://finra.org/posts`)
        .then(res => res.json())
        .then(posts => console.log(posts))
}

// set up test post
const post = {
    title: 'The title of the post',
    body: 'The body of the post',
    userID: Math.random()
}

// post to the api
const newPost = post => {
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    return fetch(`http://finra.org/posts`, options)
    .then(res => res.json())
}

new post(post) 

// can be used for update and delete
