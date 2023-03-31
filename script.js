let submit = document.querySelector(".btn");

submit.addEventListener('click', () => {

    var output = document.querySelector(".output");
    console.log(output);
    //console.log(generatedurl);



    //storing the data in objects getting from form
    const data = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        mob: document.getElementById("mob").value,
        email: document.getElementById("email").value,
        // gen: document.getElementById("gen").value,
        dep: document.getElementById("dep").value,
        
    };
    console.log(data);

    //Card Template
    let newlist = document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML = `
    <div class="result" style="border: 2px solid #60609c;
    background-color: #f44c0ad1;
    padding: 10px 10px;
    text-align: center;
    width: 300px;
    height: auto;
    margin: 10px 10px;
    font-size: 18px;
    text-decoration: none;
    border-radius: 20px;
    
}">
      <div class="name">${data.name}</div>
      <div class="dob">${data.dob}</div>
      <div class="mob">${data.mob}</div>
      <a href="https://www.youtube.com/watch?v=oomE4oltFRo">${data.email}</a><br>
      <div class="dep">${data.dep}</div>
      <br>
      <div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);

    //clearing the input fields after submission
    let input = document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
    });

})