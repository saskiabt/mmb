const fetchPost = async () => {
  try {
    const response = await fetch("/api/posts");
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addPost = async (postData) => {
  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: postData.username,
        comment: postData.comment,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { fetchPost, addPost };
