var openFile = function(event) 
    {
        var input = event.target;
      
        var reader = new FileReader();
        reader.onload = function() {
          var text = reader.result;
          var node = document.getElementById('output');
          node.innerText = text;
          console.log(reader.result.substring(0, 200));
        };
        reader.readAsText(input.files[0]);
      };

    function download(filename="download", text) 
    {
    var elHtml = document.getElementById("output").innerText;
    var e2Html = document.getElementById("datefunctionality").value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("Amount:  $"+ text + " |  Date (MM/DD/YYYY):  " + e2Html) + "\n" + encodeURIComponent(elHtml));
    element.setAttribute('download', filename="Finances_Download");
      
    element.style.display = 'none';
    document.body.appendChild(element);
      
    element.click();
      
    document.body.removeChild(element);
      }