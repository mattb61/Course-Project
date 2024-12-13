// If statement to check each question title. Nested If statement to check button clicked.

"use strict";

const $ = selector => document.querySelector(selector);

let answer1 = document.getElementById("start");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let qTitle = document.getElementById("questionTitle");

const checkAnswer = () => {
    if (qTitle.textContent == "Who was the first Elden Lord?") {
        answer2.addEventListener("click", () => {
            secondQuestion();
            sessionStorage.setItem("score", "1")},
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
        answer3.addEventListener("click", () => {
            thirdQuestion();
            sessionStorage.setItem("score", "2")},
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
        answer3.addEventListener("click", () => {
            fourthQuestion();
            sessionStorage.setItem("score", "3")},
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
        answer4.addEventListener("click", () => {
            fifthQuestion();
            sessionStorage.setItem("score", "4")},
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
        answer2.addEventListener("click", () => {
            sixthQuestion();
            sessionStorage.setItem("score", "5")},
        answer1.addEventListener("click", () => {
            sixthQuestion();
        }),
        answer2.addEventListener("click", () => {
            sixthQuestion();
        }),
        answer4.addEventListener("click", () => {
            sixthQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who is the final boss of Elden Ring?") {
        answer3.addEventListener("click", () => {
            seventhQuestion();
            sessionStorage.setItem("score", "6")},
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
        answer4.addEventListener("click", () => {
            eighthQuestion();
            sessionStorage.setItem("score", "7")},
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
        answer2.addEventListener("click", () => {
            ninthQuestion();
            sessionStorage.setItem("score", "8")},
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
        answer4.addEventListener("click", () => {
            tenthQuestion();
            sessionStorage.setItem("score", "9")},
        answer1.addEventListener("click", () => {
            ninthQuestion();
        }),
        answer2.addEventListener("click", () => {
            ninthQuestion();
        }),
        answer3.addEventListener("click", () => {
            ninthQuestion();
        })
        );
    }

    if (qTitle.textContent == "Who is St. Trina?") {
        answer3.addEventListener("click", () => {
            sessionStorage.setItem("score", "10"),
            (window.location.href = "ScorePresentation.html");
        answer1.addEventListener("click", () => {
            (window.location.href = "ScorePresentation.html");
        }),
        answer2.addEventListener("click", () => {
            (window.location.href = "ScorePresentation.html");
        }),
        answer4.addEventListener("click", () => {
            (window.location.href = "ScorePresentation.html");
        });
        })
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
    sessionStorage.setItem("score", "0");
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
    answer3.textContent = "CLICK THIS BUTTON TO SKIP TO RESULTS PAGE";
    answer4.textContent = "Miquella's old friend";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#start").addEventListener("click", firstQuestion);

    let timer = null;

    if(timer == null) {
        timer = setInterval(checkAnswer, 100);
    }
});