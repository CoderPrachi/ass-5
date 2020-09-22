let btnSubmit = document.querySelector("#sub");

btnShow = document.querySelector("#seestud");
btnSubmit.addEventListener("click", validate);
btnShow.addEventListener("click", showstud);

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
      let arr = {nm:name,ad:address,cg:clgnm,mb:mobno,em:email};
      let json = JSON.stringify(arr);
      // console.log(json);
      $.ajax({
        url : 'http://localhost/wt-api-5/insert.php',
        type : "POST",
        data : json,
        success : function(data){
        if(data.status == false){
           alert('not inserted...')
          }
          else{
            alert('record Saved...');
          }
        }
      });
    }
}

function showstud() {
  $.ajax({
    url : 'http://localhost/wt-api-5/show.php',
    type : "GET",
    success : function(data){
    if(data.status == false){
        $("#myTable").append("<tr><td colspan='8'><h2>"+data.Message+"</h2></td></tr>");
      }
      else{
        $.each(data, function(key, value){
          $("#myTable").append("<tr>" 
                          + "<td style='font-size:2pts;border:2px solid wheat'><h6>" + value.name + "</h6></td>"
                          + "<td style='font-size:2pts;border:2px solid wheat'><h6>" + value.addr + "</h6></td>"
                          + "<td style='font-size:2pts;border:2px solid wheat'><h6>" + value.clgnm + "</h6></td>"
                          + "<td style='font-size:2pts;border:2px solid wheat'><h6>" + value.mobile + "</h6></td>"
                          + "<td style='font-size:2pts;border:2px solid wheat'><h6>" + value.email + "</h6></td>"
                              );
        });
      }
    }
  });
}
