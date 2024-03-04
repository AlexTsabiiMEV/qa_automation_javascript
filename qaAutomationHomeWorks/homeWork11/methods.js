import dataFromFile from "./example.json" with { type: "json" };

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
    body: dataFromFile,
  });
  let statusCode = post_response;
  console.log(statusCode);
  // let data_response = JSON.parse(post_response.data)
  // console.log(data_response)
}

createSingleUser();

// Conver JSON

let convertJSONInJs = JSON.parse(dataJSON);
