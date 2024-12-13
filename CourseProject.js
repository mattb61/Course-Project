// If statement to check each question title. Nested If statement to check button clicked.

"use strict";

const $ = selector => document.querySelector(selector);

let answer1 = document.getElementById("start");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let qTitle = document.getElementById("questionTitle");

let score = 0;

let correctAnswers = [];

let cAnswer1 = false;
let cAnswer2 = false;
let cAnswer3 = false;
let cAnswer4 = false;
let cAnswer5 = false;
let cAnswer6 = false;
let cAnswer7 = false;
let cAnswer8 = false;
let cAnswer9 = false;
let cAnswer10 = false;

const checkAnswerBool = () => {
    if (cAnswer1 = true) {
        score = score + 1;
    }
    if (cAnswer2 = true) {
        score = score + 1;
    }
    if (cAnswer3 = true) {
        score = score + 1;
    if (cAnswer4 = true) {
        score = score + 1;
    }
    if (cAnswer5 = true) {
        score = score + 1;
    }
    if (cAnswer6 = true) {
        score = score + 1;
    }
    if (cAnswer7 = true) {
        score = score + 1;
    }
    if (cAnswer8 = true) {
        score = score + 1;
    }
    if (cAnswer9 = true) {
        score = score + 1;
    }
    if (cAnswer10 = true) {
        score = score + 1;
    }
}
}

const checkAnswer = () => {
    if (qTitle.textContent == "Who was the first Elden Lord?") {
        answer2.addEventListener("click", () => {
            cAnswer1 = true;
            console.log(score);
            secondQuestion()},
        answer1.addEventListener("click", () => {
            secondQuestion();
        }),
        answer3.addEventListener("click", () => {
            secondQuestion();
        }),
        answer4.addEventListener("click", () => {
            secondQuestion();
        })
        );
    }
    
    if (qTitle.textContent == "Who was responsible for the Night of the Black Knives?") {
        cAnswer1 = false;
        answer3.addEventListener("click", () => {
            cAnswer2 = true;
            thirdQuestion()},
        answer1.addEventListener("click", () => {
            thirdQuestion();
        }),
        answer2.addEventListener("click", () => {
            thirdQuestion();
        }),
        answer4.addEventListener("click", () => {
            thirdQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who resurrected and recalled the Tarnished to become Elden Lord?") {
        cAnswer2 = false;
        answer3.addEventListener("click", () => {
            
            cAnswer3 = true;
            fourthQuestion()},
        answer1.addEventListener("click", () => {
            fourthQuestion();
        }),
        answer2.addEventListener("click", () => {
            fourthQuestion();
        }),
        answer4.addEventListener("click", () => {
            fourthQuestion();
        })
        );
    }

    if (qTitle.textContent == "What is the other name for the Rune of Death?") {
        cAnswer3 = false;
        answer4.addEventListener("click", () => {
            
            cAnswer4 = true;
            fifthQuestion()},
        answer1.addEventListener("click", () => {
            fifthQuestion();
        }),
        answer2.addEventListener("click", () => {
            fifthQuestion();
        }),
        answer3.addEventListener("click", () => {
            fifthQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who is the strongest demigod in terms of abilities?") {
        cAnswer4 = false;
        answer2.addEventListener("click", () => {
            
            cAnswer5 = true;
            sixthQuestion()},
        answer1.addEventListener("click", () => {
            sixthQuestion();
        }),
        answer3.addEventListener("click", () => {
            sixthQuestion();
        }),
        answer4.addEventListener("click", () => {
            sixthQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who is the final boss of Elden Ring?") {
        cAnswer5 = false;
        answer3.addEventListener("click", () => {
            
            cAnswer6 = true;
            seventhQuestion()},
        answer1.addEventListener("click", () => {
            seventhQuestion();
        }),
        answer2.addEventListener("click", () => {
            seventhQuestion();
        }),
        answer4.addEventListener("click", () => {
            seventhQuestion();
        })
        );
    }

    if (qTitle.textContent == "Which dragon's spear is located in Leyndell? (Literal and/or item pickup)") {
        cAnswer6 = false;
        answer4.addEventListener("click", () => {
            
            cAnswer7 = true;
            eighthQuestion()},
        answer1.addEventListener("click", () => {
            eighthQuestion();
        }),
        answer2.addEventListener("click", () => {
            eighthQuestion();
        }),
        answer3.addEventListener("click", () => {
            eighthQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who is the first major boss you're TECHNICALLY supposed to fight?") {
        cAnswer7 = false;
        answer2.addEventListener("click", () => {
            
            cAnswer8 = true;
            ninthQuestion()},
        answer1.addEventListener("click", () => {
            ninthQuestion();
        }),
        answer3.addEventListener("click", () => {
            ninthQuestion();
        }),
        answer4.addEventListener("click", () => {
            ninthQuestion();
        })
        );
    }

    if (qTitle.textContent == "What is the name of the tree Miquella planted to replace the Erdtree?") {
        cAnswer8 = false;
        answer4.addEventListener("click", () => {
            
            cAnswer9 = true;
            tenthQuestion()},
        answer1.addEventListener("click", () => {
            tenthQuestion();
        }),
        answer2.addEventListener("click", () => {
            tenthQuestion();
        }),
        answer3.addEventListener("click", () => {
            tenthQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who is St. Trina?") {
        cAnswer9 = false;
        answer3.addEventListener("click", () => {
            
            cAnswer10 = true;
            checkAnswerBool();
            sessionStorage.setItem("score", score);
            window.location.href = "ScorePresentation.html"});
        answer1.addEventListener("click", () => {
            checkAnswerBool();
            sessionStorage.setItem("score", score);
            (window.location.href = "ScorePresentation.html");
        }),
        answer2.addEventListener("click", () => {
            checkAnswerBool();
            sessionStorage.setItem("score", score);
            (window.location.href = "ScorePresentation.html");
        }),
        answer4.addEventListener("click", () => {
            checkAnswerBool();
            sessionStorage.setItem("score", score);
            (window.location.href = "ScorePresentation.html");
        });
    }
}

const firstQuestion = () => {
    qTitle.textContent = "Who was the first Elden Lord?";
    qTitle.setAttribute("class", "visible");
    answer1.setAttribute("class", "visible");
    answer1.setAttribute("id", "answer1");
    answer1.textContent = "Hoarah Loux";
    answer2.setAttribute("class", "visible");
    answer2.textContent = "Dragonlord Placidusax";
    answer3.setAttribute("class", "visible");
    answer3.textContent = "Radagon";
    answer4.setAttribute("class", "visible");
    answer4.textContent = "The Tarnished";
}

const secondQuestion = () => {
    qTitle.textContent = "Who was responsible for the Night of the Black Knives?";
    answer1.textContent = "Godwyn";
    answer2.textContent = "Queen Marika";
    answer3.textContent = "Ranni the Witch";
    answer4.textContent = "You? Somehow?";
}

const thirdQuestion = () => {
    qTitle.textContent = "Who resurrected and recalled the Tarnished to become Elden Lord?";
    answer1.textContent = "Elden Lord Godfrey";
    answer2.textContent = "Gideon Ofnir";
    answer3.textContent = "Queen Marika";
    answer4.textContent = "Renna the Witch";
}

const fourthQuestion = () => {
    qTitle.textContent = "What is the other name for the Rune of Death?";
    answer1.textContent = "Absolute Death";
    answer2.textContent = "The Rune of the End";
    answer3.textContent = "The Judgement Rune";
    answer4.textContent = "Destined Death";
}

const fifthQuestion = () => {
    qTitle.textContent = "Who is the strongest demigod in terms of abilities?";
    answer1.textContent = "Malenia, Blade of Miquella";
    answer2.textContent = "Miquella the Kind";
    answer3.textContent = "Ranni the Witch";
    answer4.textContent = "Starscourge Radahn";
}

const sixthQuestion = () => {
    qTitle.textContent = "Who is the final boss of Elden Ring?";
    answer1.textContent = "Radagon";
    answer2.textContent = "Malenia";
    answer3.textContent = "The Elden Beast";
    answer4.textContent = "Queen Marika";
}

const seventhQuestion = () => {
    qTitle.textContent = "Which dragon's spear is located in Leyndell? (Literal and/or item pickup)";
    answer1.textContent = "Sennesax";
    answer2.textContent = "Fortissax";
    answer3.textContent = "Lansseax";
    answer4.textContent = "Gransax";
}

const eighthQuestion = () => {
    qTitle.textContent = "Who is the first major boss you're TECHNICALLY supposed to fight?";
    answer1.textContent = "Queen Rennala";
    answer2.textContent = "Margit, the Fell Omen";
    answer3.textContent = "Morgot, the Fell Omen";
    answer4.textContent = "Godrick";
}

const ninthQuestion = () => {
    qTitle.textContent = "What is the name of the tree Miquella planted to replace the Erdtree?";
    answer1.textContent = "The Erdtree (seriously?)";
    answer2.textContent = "An oak tree";
    answer3.textContent = "The World Tree";
    answer4.textContent = "The Haligtree";
}

const tenthQuestion = () => {
    qTitle.textContent = "Who is St. Trina?";
    answer1.textContent = "Some random priest";
    answer2.textContent = "Some random saint";
    answer3.textContent = "Miquella's alter ego";
    answer4.textContent = "Miquella's old friend";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#start").addEventListener("click", firstQuestion);

    let timer = null;

    if(timer == null) {
        timer = setInterval(checkAnswer, 100);
    };
});