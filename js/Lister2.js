//creates a loop that looks for a true value in clownsObj //

clownsObj.forEach(function(splat) {
    if (splat.statusActive == true) { //this line create the splat iteration local variable that the results are ported into.//
        console.log(splat.name); //outputs to the log.
        document.write('<ul>' + '<li>' + '<h1>' + splat.name + '</h1>' + '</li>' + '<li class="biopic">' + splat.image + '</li>' + '<li class="tag">' + splat.tagline + '</li>' + '<li class="disc">' + splat.description + '</li>' + '<li class="actor">' + splat.actor + '</li>' + '</ul>'); //outputs to the page. 
    }
});
