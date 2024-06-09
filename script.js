const buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});

let color = prompt('Enter your colour Code:');
let h2 = document.querySelector('h2');
let colorChange = (color) => {
  try {
    document.body.style.backgroundColor = `${color}`;
  } catch (err) {
    console.log(err);
    h2.innerText = 'Error occured:' + err;
  }
};

colorChange(color);
