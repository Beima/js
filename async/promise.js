let promise = new Promise((resolve, reject)=>{
    let posts = [
        {
            id: 1,
            name: "Post 1",
        },
        {
            id: 2,
            name: "Post 2",
        },
    ];
    resolve(posts);
});

promise.then((response) => {
    console.log("Response: ", response);
});
