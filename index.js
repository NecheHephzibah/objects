// 1. Creating objects using the constructor method

function instagramPost(authorsHandle, content, number_of_views, number_of_likes){
    this.authorsHandle = authorsHandle;
    this.content = content;
    this.number_of_views = number_of_views;
    this.number_of_likes = number_of_likes;
} 

const firstPost = new instagramPost("@ardenTaye", "Finally went on the vacation i've been longing for since 2019, this is me in Seatle, USA.", "https://www.example.com/seatle.jpg", "1.5K", "1.1K");
console.log(firstPost.authorsHandle);
console.log(firstPost.content);
console.log(firstPost.number_of_views);
console.log(firstPost.number_of_likes);

const secondPost = new instagramPost("@david333", "Check out my new shoes...", "https://www.example.com/shoes.png", "1M", "700K");
console.log(secondPost.authorsHandle);
console.log(firstPost.content);
console.log(firstPost.number_of_views);
console.log(firstPost.number_of_likes);




// 2. Creating Objects using the Factory Method

function createPerson(name, age, location){
    return {
        name : name,
        age : age,
        location : location,
        jambScore : {
            govt : " ",
            lit : " ",
            crk : " ",
        },
        createJambScore : function(govt, lit, crk){
            this.jambScore.govt = govt;            
            this.jambScore.lit = lit;            
            this.jambScore.crk = crk;            

        }
    }
}
const person1 = createPerson("Musa", 19, "Lekki, Lagos.");
person1.createJambScore("A1", "B2", "A1");
console.log(person1);




// 3. Different ways to clone an object
// a. Objects can be cloned using the object.assign method. Example
const myMotorBike = {
    model : "Suzuki",
    year : 2002,
    color : "black",
    power : "275 horse power"
};
console.log(myMotorBike)


const myBike = object.assign({}, myMotorBike);
console.log(myBike)





// 4. Object representing some Presidential Candidates

const presidentialCandidate = {
    AAC : 'Omoyele Sowore',
    ACCORD : 'Christopher Imumolen',
    APC : 'Bola Ahmed Tinubu',
    LP : 'Peter Obi',
    NNPP : 'Rabiu Kwankwaso',
    PDP : 'Atiku Abubakar'
};

let myCandidate = "";
for(const [key, value] of Object.entries(presidentialCandidate)) {
    myCandidate += `${key} is the Presidential candidate for ${value}\n`
}
console.log(myCandidate)