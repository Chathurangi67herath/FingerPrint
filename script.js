document.getElementById("submit").onclick = function () {
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];
    var list6 = [];
    var list7 = [];

    var n = 1;
    var x = 0;


      var AddRow = document.getElementById("show");
      var NewRow = AddRow.insertRow(n);
      var FingerId = document.getElementById("FingerId").value;
      var UserName = document.getElementById("UserName").value;
      var Addrs = document.getElementById("Addrs").value;
      var EmlAddrs = document.getElementById("EmlAddrs").value;
      var TelNo = document.getElementById("TelNo").value;
      var Bdy = document.getElementById("Bdy").value;
      var gen = document.getElementById("gen").value;

      list1[x] = document.getElementById("FingerId").value;
      list2[x] = document.getElementById("UserName").value;
      list3[x] = document.getElementById("Addrs").value;
      list4[x] = document.getElementById("EmlAddrs").value;
      list5[x] = document.getElementById("TelNo").value;
      list6[x] = document.getElementById("Bdy").value;
      list7[x] = document.getElementById("gen").value;

      var cell1 = NewRow.insertCell(0);
      var cell2 = NewRow.insertCell(1);
      var cell3 = NewRow.insertCell(2);
      var cell4 = NewRow.insertCell(3);
      var cell5 = NewRow.insertCell(4);
      var cell6 = NewRow.insertCell(5);
      var cell7 = NewRow.insertCell(6);

      cell1.innerHTML = list1[x];
      cell2.innerHTML = list2[x];
      cell3.innerHTML = list3[x];
      cell4.innerHTML = list4[x];
      cell5.innerHTML = list5[x];
      cell6.innerHTML = list6[x];
      cell7.innerHTML = list7[x];

      n++;
      x++;
      document.getElementById("FingerId").value = "";
      document.getElementById("UserName").value = "";
      document.getElementById("Addrs").value = "";
      document.getElementById("EmlAddrs").value = "";
      document.getElementById("TelNo").value = "";
      document.getElementById("Bdy").value = "";
      //document.getElementById("gen").value = "";*/

      //alert(FingerId + " Student Successfully Added");
    }