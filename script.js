//alert("js here");
let btnSubmit = document.querySelector("#sub");
//alert("got id");


btnSubmit.addEventListener("click", validate);

function validate() {
  let address;
let name;
let email;
let mobno;
let clgnm;
let mesg="";
  name = document.querySelector("#name").value;
  //alert(name);
  email = document.querySelector("#mail").value;
  //alert(email);
  mobno = document.querySelector("#mobno").value;
  clgnm = document.querySelector("#clg").value;
  address = document.querySelector("#address").value;
    //alert("validation");      
    // alert(document.getElementById("#name"));  
    if (name == "")
    {
      mesg=mesg+" name required";
      //return false;
    }
    
    if (email == "")
    {
      mesg=mesg+" email required";
      // return false;
    }
    let n = email.includes("@");
    if(n==false)
    {
      mesg=mesg+" heyy enter valid email";
      // return false;
    }
    
    if (mobno == "")
    {
      mesg=mesg+" enter mobile number";
      // return false;
    }
    let mob = parseInt(mobno);
    if(mob>10000000000 || mob <1000000000 || isNaN(mobno))
    {
      mesg=mesg+" Mobile No. is not valid";
      // return false;
    }
    
    if (clgnm == "")
    {
      mesg=mesg+" Clg Name is Required ";
      // return false;
    }

    if(!(mesg=="")){
      alert(mesg);
    }
    else{
      alert("All right");
      $.post('submit.php',{dv:10},function(data){
        alert(data);
        alert("in the post");
      });
      alert("back to js");
    }

  
  
    let table = document.getElementById("#myTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("#name").value;
    cell2.innerHTML = document.getElementById("#email").value;
    cell3.innerHTML = document.getElementById("#mobno").value;
  
    document.getElementById("#name").value = "";
    document.getElementById("#email").value = "";
    document.getElementById("#clg").value = "";
    document.getElementById("#mobno").value = "";
    document.getElementById("#address").value = "";
  
    document.getElementById("#myCheck").checked = false;
    document.getElementById("#myCheck1").checked = false;
    document.getElementById("#myCheck2").checked = false;
  
  }
 