for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(res => res.json())
      .then(data => {
        document.getElementById('email-list').innerHTML += `<li>${data.response}</li>`;
      });
  }
  