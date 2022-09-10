const path_start = "assets/images/";
const animals = [path_start + "giraffe.png", 
                path_start + "lion1.png",
                path_start + "tiger.png"];

function choose_random_animal() {

    let random_index = Math.floor(Math.random() * animals.length);
    let animal_path = animals[random_index];
    let animalx = animal_path.split(".")[0];
    console.log(animalx);
    let animal = animalx.split("/").pop();
    console.log(animal);

    document.getElementById("animals").src = animal_path;

}


function start_game() {
    document.getElementById("instructions").style.display = "none";
    choose_random_animal();
    document.getElementById("game").style.display = "block";
}



function next_animal(identifier) {
    choose_random_animal();
}