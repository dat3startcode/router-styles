/*
This is the Horizontal Navigation Bar Example with Active/Current Navigation Link
From here https://www.w3schools.com/css/css_navbar.asp
*/

ul.header {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.header li {
  float: left;
}

ul.header li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
ul.header li a:hover:not(.active) {
  background-color: #111;
}

.selected {
  background-color: #4caf50;
}
