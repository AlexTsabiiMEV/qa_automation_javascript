import dataFromFile from "./example.json" assert { type: "json" };
console.log(dataFromFile);

const dataJSON = {
  name: "123sasss",
  job: "dfhjvhhhjhbjk",
};

const dataJSONObject = {
  name: "123sasss",
  job: "dfhjvhhhjhbjk",
};

async function createSingleUser() {
  const post_response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(dataFromFile),
  });
  let statusCode = post_response;
  console.log(statusCode);
  // let data_response = JSON.parse(post_response.data)
  // console.log(data_response)
}

createSingleUser();
