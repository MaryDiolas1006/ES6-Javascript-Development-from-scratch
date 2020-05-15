promise = new Promise((resolved, reject) => {
    var request = new HTMLRequest()

      request.onload = () => {
          resolved();
      }
});

promise
      .then(() => console.log('mskjlklsjkvsk'))
      .then(() => console.log('jskhshfcssk'))
      .catch(() => console.log('ohohoh'))