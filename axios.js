console.clear();
/*
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1") // sends GET request
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      */

/*
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: "foo",
          body: "bar",
          userId: 1,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      */

/*
       axios
        .put("https://jsonplaceholder.typicode.com/posts/1", {
          id: 1,
          title: "foota",
          body: "bar",
          userId: 1,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      */

/*
      axios
        .patch("https://jsonplaceholder.typicode.com/posts/1", {
          title: "foota",
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      */

/*
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      */

const makeRequest = (config) => {
  axios(config)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.response.data.message));
};

// const getData = () => {
//   makeRequest("http://127.0.0.1:5000/users/1");
// };
// getData();

// const createData = () => {
//   makeRequest({
//     url: "http://127.0.0.1:5000/users",
//     method: "POST",
//     data: {
//       email: "nayem@example.com",
//       fullname: "test",
//       pass: "test",
//     },
//   });
// };
// createData();

// const updateData = () => {
//   let res = makeRequest({
//     url: "http://127.0.0.1:5000/users/1",
//     method: "PUT",
//     data: {
//       fullname: "foobar",
//       pass: "foobar",
//       email: "foo@bar.com",
//     },
//   });
// };
// updateData();

// const patchData = () => {
//   let res = makeRequest({
//     url: "http://127.0.0.1:5000/users/1",
//     method: "PATCH",
//     data: {
//       fullname: "foota",
//     },
//   });
// };
// patchData();

// const deleteData = () => {
//   let res = makeRequest({
//     url: "http://127.0.0.1:5000/users",
//     method: "DELETE",
//     data: {
//       email: "nayem@example.com",
//     },
//   });
// };
// deleteData();
