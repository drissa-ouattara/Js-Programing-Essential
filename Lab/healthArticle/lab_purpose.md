# Setting up fetch request:
    You have created an object xhr to get data to define where the data is present.
    You asked for data using xhr.open('GET', url, true); to prepare to receive data in a specific format (xhr.responseType = 'json';).

# Using the received data:
    You created the function xhr.onload = function() { ... } to retrieve specific information like articles, and decided where to show them on the webpage using document.getElementById('articles').

# Putting it all together:
    For each article, you created webpage parts like title descriptions and filled them with data.
    You then fetched these parts on the webpage and sent the request to get the data xhr.send();.