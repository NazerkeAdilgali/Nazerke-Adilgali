<!DOCTYPE html>
<html>
<body>
<script>
document.querySelector("h1").innerHTML="Nazerke Adilgali,CS-2122";
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
const today = new Date();
document.write('Year:' + today.getFullYear() + '<br/>' +
'Today is:' + days[today.getDay()] + '<br/>' +
'Date:' + today.getDate() + '<br/>' +
'Month:' + months[(today.getMonth())]);
</script>
<script>
document.write('<br/>')
var grad=new Date(2024, 7, 20);
var one_day=1000*60*60*24;
document.write(Math.ceil((grad.getTime()-today.getTime())/(one_day))+
" days left until the freedom!");
</script>
</body>
  <body>
      <form>
          1st Number : <input type="text" id="fn" /><br>
          2nd Number: <input type="text" id="sn" /><br>

          <input type="button" onClick="multiplyBy()" Value="Multiply" />
          <input type="button" onClick="divideBy()" Value="Divide" />
      </form>

      <p>The Result is : <br>
          <span id = "result"></span>
      </p>

      <script type="text/javascript">

       function multiplyBy()
       {
          num1 = document.getElementById("fn").value;
          num2 = document.getElementById("sn").value;
          document.getElementById("result").innerHTML = num1 * num2;
      }

      function divideBy()
      {
          num1 = document.getElementById("fn").value;
          num2 = document.getElementById("sn").value;
          document.getElementById("result").innerHTML = num1 / num2;
      }
  </body>
</html>
