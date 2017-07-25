async function subscribe(path) {
  const response = await fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  setTimeout(function() {
    subscribe("http://localhost:8080/poll");
  }, 3000);

  return await response.json().then(function(data){
    console.log("data", data);
  })
}



var data = subscribe("http://localhost:8080/poll");
