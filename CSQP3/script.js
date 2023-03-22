/* Story Points */
var SP = 0;
/* Love Points */
var LP = 0;
/* Quiz Points */
var QP = 0;
var QA = 0;
var AA = 0;
var AB = 0;
var AC = 0;
var BA = 0;
var BB = 0;
var BC = 0;
var CA = 0;
var CB = 0;
var CC = 0;
var DA = 0;
var DB = 0;
var DC = 0;
var EA = 0;
var EB = 0;
var EC = 0;
var FA = 0;
var FB = 0;
var FC = 0;
var hints = 3;
var counter = 20;
var interval;

function progress() {
    SP++;
}

function regress() {
    SP--;
}

function skip() {
    SP = 42;
}

function answered() {
    QA++;
}

function trapped() {
    if (SP>=43 && QA==0) {
        SP = 43;
    }
    if (SP>=48 && QA==1) {
        SP = 48;
    }
    if (SP>=53 && QA==2) {
        SP = 53;
    }
    if (SP>=58 && QA==3) {
        SP = 58;
    }
    if (SP>=63 && QA==4) {
        SP = 63;
    }
    if (SP>=68 && QA==4) {
        SP = 68;
    }
}

function zr1() {
    if (SP == 43) {
    AA++;
    QP++;
    }
}
function zr2() {
    if (SP == 43) {
    AB++;
    }
}
function zr3() {
    if (SP == 43) {
    AC++;
    }
}

function na1() {
    if (SP == 48) {
    BA++;
    }
}
function na2() {
    if (SP == 48) {
    BB++;
    }
}
function na3() {
    if (SP == 48) {
    BC++;
    QP++;
    }
}

function mol1() {
    if (SP == 53) {
    CA++;
    }
}
function mol2() {
    if (SP == 53) {
    CB++;
    QP++;
    }
}
function mol3() {
    if (SP == 53) {
    CC++;
    }
}

function lew1() {
    if (SP == 58) {
    DA++;
    }
}
function lew2() {
    if (SP == 58) {
    DB++;
    }
}
function lew3() {
    if (SP == 58) {
    DC++;
    QP++;
    }
}

function pri1() {
    if (SP == 63) {
    EA++;
    QP++;
    }
}
function pri2() {
    if (SP == 63) {
    EB++;
    }
}
function pri3() {
    if (SP == 63) {
    EC++;
    }
}

function imf1() {
    if (SP >= 64) {
    FA++;
    }
}
function imf2() {
    if (SP >= 64) {
    FB++;
    QP++;
    }
}
function imf3() {
    if (SP >= 64) {
    FC++;
    }
}

/* The whole script, all in ONE HUGE IF-CHAIN FUNCTION */
function dialogue() {
    if (SP==0) {
        document.getElementById("regress").className = "regressA";
        document.getElementById("skip").className = "skipA";
        document.getElementById("textBox").className = "";
        document.getElementById("BG").innerHTML = '<img src="Images/title.jpg" alt="" class="BG">';
        document.getElementById("BG").className = "MBG";
        document.getElementById("speaker").innerHTML = "";
        document.getElementById("speaker").className = "";
        document.getElementById("text").className = "";
        document.getElementById("text").innerHTML = "";
    }
    if (SP==1) {
        document.getElementById("regress").className = "regress";
        document.getElementById("skip").className = "skip";
        document.getElementById("textBox").className = "TB";
        document.getElementById("BG").innerHTML = '<img src="Images/CSL.jpg" alt="" class="BG">';
        document.getElementById("BG").className = "BG";
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").className = "text";
        document.getElementById("text").innerHTML = "Yet another interesting session in Computer science, Javascript seems like fun.";
    }
    /* Already am... */
    if (SP==2) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Can't wait to take HTML to a whole new level!";
    }
    /* OMG SIR JM GENDERBEND CAMEO?! */
    if (SP==3) {
        document.getElementById("BG").innerHTML = '<img src="Images/MMJ2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Ma'am MJ";
        document.getElementById("speaker").className = "MJ";
        document.getElementById("text").innerHTML = "Ok class, that ends our discussion for today. Good day 9-Samat.";
    }
    if (SP==4) {
        document.getElementById("BG").innerHTML = '<img src="Images/MMJ1.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Everyone";
        document.getElementById("speaker").className = "Everyone";
        document.getElementById("text").innerHTML = "Gooooood day and thank you ma'am MJ.";
    }
    if (SP==5) {
        document.getElementById("BG").innerHTML = '<img src="Images/MMJ1.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Well, best get going to the library.";
    }
    if (SP==6) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB.jpg" alt="" class="BG">';
        document.getElementById("text").innerHTML = "Ah the library, no place better to be in your free periods.";
    }
    /* THE AIRCON */
    if (SP==7) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "The silence, the books, the atmosphere, <b><i>the airconditioner</i></b>. What more can a scholar ask for?.";
    }
    if (SP==8) {
        document.getElementById("BG").innerHTML = '<img src="Images/DLCG.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "???";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "*Snoring*";
    }
    if (SP==9) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Ah right, <i>sleep</i>...";
    }
    if (SP==10) {
        document.getElementById("text").innerHTML = "And a lot of it...";
    }
    if (SP==11) {
        document.getElementById("text").innerHTML = "Hang on,";
    }
    if (SP==12) {
        document.getElementById("text").innerHTML = "Hang on, ISN'T THAT DOPAMINE?! THIS IS WHY SHE WAS ABSENT FOR CS?!";
    }
    if (SP==13) {
        document.getElementById("text").innerHTML = "Sigh, <i>she sure is something</i>.";
    }
    if (SP==14) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB.jpg" alt="" class="BG">';
        document.getElementById("text").innerHTML = "Best not disturb her, let's see if the library has any books of interest.";
    }
    /* Let the Genderbent teachers continue */
    if (SP==15) {
        document.getElementById("text").innerHTML = '"Campbells Biology textbook"... Maam Jen mentions that one a lot.';
    }
    if (SP==16) {
        document.getElementById("text").innerHTML = '"El Filibusterismo"... Ginoong Mendoza does a really good job at teaching it.';
    }
    if (SP==17) {
        document.getElementById("text").innerHTML = '"World History II"... Sir Len would like that.';
    }
    if (SP==18) {
        document.getElementById("text").innerHTML = '"Introduction to Statistics"... Maam Christine makes good use of it.';
    }
    if (SP==19) {
        document.getElementById("text").innerHTML = '"Basics of Algebra"... Maam Mari probably doesnt need a textbook to teach us well.';
    }
    if (SP==20) {
        document.getElementById("text").innerHTML = '"The Pale Blue Eye"... Sir Rome only gives the best literature recommendations!';
    }
    if (SP==21) {
        document.getElementById("text").innerHTML = '"Physics"... Maam Jane-D would appreciate such a simple title.';
    }
    if (SP==22) {
        document.getElementById("text").innerHTML = 'Ah, my favorite!';
    }
    /* I promise I don't annoy ma'am Cess nearly as much */
    if (SP==23) {
        document.getElementById("text").innerHTML = '"Organic Chemistry"... Sir Prince wouldnt mind a little advanced reading. (A lot of advanced reading)';
    }
    if (SP==24) {
        document.getElementById("text").innerHTML = "Let's take a seat and relax, this book sounds interesting.";
    }
    if (SP==25) {
        document.getElementById("speaker").innerHTML = "";
        document.getElementById("speaker").className = "";
        document.getElementById("text").innerHTML = '"Acetylcholine is a neurotransmitter, a chemical that carries messages from the brain to the body through nerves. It excites the nerve cells and boosts learning." (<i>Cleveland Clinic</i>, 2022)';
    }
    if (SP==26) {
        document.getElementById("speaker").innerHTML = "";
        document.getElementById("speaker").className = "";
        document.getElementById("text").innerHTML = '"Dopamine is a chemical released in the brain that makes you feel good. Having the right amount of dopamine is important both for your body and your brain." (<i>Healthdirect</i>, 2022)';
    }
    if (SP==27) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Interesting, those names sounds familiar.";
    }
    if (SP==27) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Funny how it doesn't mention how dopamine is a hyper relaxing stimulant that always makes you late for class, if you even attend at all that is.";
    }
    if (SP==28) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Speaking of Dopamine,";
    }
    if (SP==29) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB1.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"How long have you been staring?"';
    }
    if (SP==30) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Huh, me?"';
    }
    if (SP==31) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB1.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Who else?"';
    }
    if (SP==32) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Not too long."';
    }
    if (SP==33) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Do you need something?"';
    }
    if (SP==34) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"A bit..."';
    }
    if (SP==35) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Like..?"';
    }
    if (SP==36) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"I dont understand chemistry... could you help?"';
    }
    if (SP==37) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Sure thing, which part?"';
    }
    if (SP==38) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB2.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"All of it..."';
    }
    if (SP==39) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB3.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"All of it?! Sigh..."';
    }
    if (SP==40) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB4.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"From the top, lets get to it."';
    }
    if (SP==41) {
        document.getElementById("BG").innerHTML = '<img src="Images/LB4.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Take a seat, cramming all of chemistry 1 in one ISP wont be easy."';
    }
    if (SP==42) {
        document.getElementById("regress").className = "regressA";
        document.getElementById("skip").className = "skipA";
        document.getElementById("textBox").className = "";
        document.getElementById("BG").innerHTML = '<img src="Images/QT.jpg" alt="" class="BG">';
        document.getElementById("BG").className = "MBG";
        document.getElementById("speaker").innerHTML = "";
        document.getElementById("speaker").className = "";
        document.getElementById("text").className = "";
        document.getElementById("text").innerHTML = "";
    }
    if (SP==43) {
        document.getElementById("BG").innerHTML = '<img src="Images/G1D.jpg" alt="" class="BG">';
        document.getElementById("regress").className = "regress";
        document.getElementById("skip").className = "skip";
        document.getElementById("textBox").className = "TB";
        document.getElementById("BG").className = "BG";
        document.getElementById("text").className = "text";
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"There are so many of these weird letters, like, what does <b>Zr</b> even mean?"';
        document.getElementById("option1").innerHTML = "Zirconium";
        document.getElementById("option2").innerHTML = "Zironium";
        document.getElementById("option3").innerHTML = "ZawaRudo";
        document.getElementById("option1").className = "bn1 px-3";
        document.getElementById("option2").className = "bn2 px-3";
        document.getElementById("option3").className = "bn3 px-3";
    }
    if (SP==44 && AA>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Those are abreviations for elements, their symbols. Zr stands for the element Zirconium."';
    }
    if (SP==45 && AA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"How am I supposed to know that? Is it like a pattern?"';
    }
    if (SP==46 && AA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"The symbol usually helps spell the element, but for the most part its memorization."';
    }
    if (SP==47 && AA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Nooooooooo!!!"';
    }
    if (SP==44 && AB>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Those are abreviations for elements, their symbols. Zr stands for the element Zironium."';
    }
    if (SP==45 && AB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"AH, I got everything up until that last part. If I remember correctly its Zirconium right?"';
    }
    if (SP==46 && AB>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"AH right, my bad..."';
    }
    if (SP==47 && AB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Honest mistake really."';
    }
    if (SP==44 && AC>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"ZA WARUDO"';
    }
    if (SP==45 && AC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"MUDA MUDA MUDA MUDA"';
    }
    if (SP==46 && AC>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"JoJo のリファレンスをどのように挿入したのでしょうか。" (How did we slip in a JoJo reference?)';
    }
    if (SP==47 && AC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"私もわかりません、化学に戻りましょう!" (I dont know either, lets get back to chemistry!)';
    }
    if (SP==48) {
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Look! They got bigger, what does this <b>NaCl</b> mean?!"';
        document.getElementById("option1").innerHTML = "Potassium Chlorine";
        document.getElementById("option2").innerHTML = "Nanovium Monochlorate";
        document.getElementById("option3").innerHTML = "Sodium Chloride";
    }
    if (SP==49 && BA>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Those are abreviations for compounds, when elements mix together we also mix their symbols. NaCl stands for the compound Potassium Chlorine."';
    }
    if (SP==50 && BA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Actually its starting to sound familliar, doesnt Na mean sodium?"';
    }
    if (SP==51 && BA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Ah right, Sodium Chloride, my bad!"';
    }
    if (SP==52 && BA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Its fine!"';
    }
    if (SP==49 && BC>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Those are abreviations for compounds, when elements mix together we also mix their symbols. NaCl stands for the compound Sodium Chloride, otherwise known as table salt"';
    }
    if (SP==50 && BC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Ooh, is there a system for reaidng them? Cause Cl is Chlorine, not chloride right?"';
    }
    if (SP==51 && BC>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Yep, we have ones for ionic, covalent, and mettallic bonds. It takes more memorization, youll pick it up in no time promise."';
    }
    if (SP==52 && BC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Ah ---- here we go again."';
    }
    if (SP==49 && BB>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Those are abreviations for compounds, when elements mix together we also mix their symbols. NaCl stands for the compound Nanovium Monochlorate."';
    }
    if (SP==50 && BB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"If I recall correctly thats covalent bonding nomclature, but Ive never heard of Nanovium, do you mean Sodium?"';
    }
    if (SP==51 && BB>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Remind me again why you asked me for help when YOU KNOW THIS YOURSELF?!"';
    }
    if (SP==52 && BB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Do a better Job at remembering!"';
    }
    if (SP==53) {
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Wait, WHY IS MATH SHOWING UP, WHAT DO THE NUMBERS MEAN MASON?! What is a <b>mol</b> and why are we using it!?"';
        document.getElementById("option1").innerHTML = "Molecule";
        document.getElementById("option2").innerHTML = "Mole";
        document.getElementById("option3").innerHTML = "Molecular Mass";
    }
    if (SP==54 && CA>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Ah, thats stoichiometry, molcular math, mol the unit for a molecule."';
    }
    if (SP==55 && CA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Wow, one molecule of water about is about 22.4 liters!"';
    }
    if (SP==56 && CA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"WAIT WHAT?!"';
    }
    if (SP==57 && CA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"I take it thats not right..."';
    }
    if (SP==54 && CB>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Welcome to stoichiometry, molecular math! We use the unit moles a the basis for many equations, it is equal to 6.022 x 10 raised to the 24th power molecules, isnt it awesome?"';
    }
    if (SP==55 && CB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"You know a 5.00 in chemistry isnt looking too bad now."';
    }
    if (SP==56 && CB>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Kaya mo yan!" (You can do it!)';
    }
    if (SP==57 && CB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Wanna bet?"';
    }
    if (SP==54 && CC>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Ah, thats stoichiometry, molcular math, mol the unit for a molecular mass."';
    }
    if (SP==55 && CC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Thats odd, then what does MM mean?"';
    }
    if (SP==56 && CC>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Molecular... mass..."';
    }
    if (SP==57 && CC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Its ok, I understand it now."';
    }
    if (SP==58) {
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"What are these drawings? Why are there <b>lines</b> and <b>dots</b> between the letters?!"';
        document.getElementById("option1").innerHTML = "Skeletal Structure";
        document.getElementById("option2").innerHTML = "Brownian Model";
        document.getElementById("option3").innerHTML = "Lewis Structure";
    }
    if (SP==59 && DA>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Thats a way we illustrate molecules, the skeletal structure."';
    }
    if (SP==60 && DA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Isnt that the one with hexagons and no dots?"';
    }
    if (SP==61 && DA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Shoot, right."';
    }
    if (SP==62 && DA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"..."';
    }
    if (SP==59 && DB>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Its a way for us to illustrate molecules, the brownian model."';
    }
    if (SP==60 && DB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Isnt it Brownian motion?"';
    }
    if (SP==61 && DB>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Shoot, wrong scientist."';
    }
    if (SP==62 && DB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"You mean Lewis?"';
    }
    if (SP==59 && DC>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Its a way we illustrate molecules, the Lewis structure. Those dots are free electrons, and the lines are covalent bonds, for when they share electrons."';
    }
    if (SP==60 && DC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Do I really need to know this?"';
    }
    if (SP==61 && DC>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"We still have resonance and VSEPR theory to cover!"';
    }
    if (SP==62 && DC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"End me."';
    }
    if (SP==63) {
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"I know Im a total moron for asking this, but whats the name of our chemistry teacher?"';
        document.getElementById("option1").innerHTML = "Sir Prince Digneneng";
        document.getElementById("option2").innerHTML = "Ma'am Angela Batoon";
        document.getElementById("option3").innerHTML = "Ma'am Roanne Tilwani";
    }
    if (SP==64 && EA>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"ARE YOU SERIOUS?! ITS BEEN 3 QUARTERS ALREADY!"';
    }
    if (SP==65 && EA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Hehe..."';
    }
    if (SP==65 && EA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"... Its sir Prince Digneneing, the one who has a "chinita engineer with a good sense of humour" girlfriend."';
    }
    if (SP==66 && EA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"OHHH, THATS HIM."';
    }
    if (SP==67 && EA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"DUH."';
    }
    if (SP==64 && EB>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Its maam Angela Batoon."';
    }
    if (SP==65 && EB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Preeeeeeetty sure its a he."';
    }
    if (SP==66 && EB>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Ahhh, IS2 memories come flooding back."';
    }
    if (SP==67 && EB>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"So that was the name of our IS2 teacher?!"';
    }
    if (SP==64 && EC>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Its maam Rohit Tilwani."';
    }
    if (SP==65 && EC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Preeeeeeeetty sure its a he."';
    }
    if (SP==66 && EC>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Nothing wrong with remembering the name of my future teacher."';
    }
    if (SP==67 && EC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"..."';
    }
    if (SP==68) {
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "What does <b>IMF</b> mean again?";
        document.getElementById("option1").innerHTML = "Immense Molecular Fractals";
        document.getElementById("option2").innerHTML = "Inter-Molecular Forces";
        document.getElementById("option3").innerHTML = "I Might've Forgot...";
    }
    if (SP==69 && FA>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Immense Molecular fractals.";
    }
    if (SP==70 && FA>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "I don't think that's it...";
    }
    if (SP==71 && FA>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Ah right, I meant...";
    }
    if (SP==69 && FB>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        SP = SP+3;
    }
    if (SP==69 && FC>=1) {
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "I Might've Forgot...";
    }
    if (SP==70 && FC>=1) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "Huh?!";
    }
    if (SP==71 && FC>=1) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "Only kidding!";
    }
    if (SP==72) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "It stands for Inter-Molecular Forces.";
    }
    if (SP==73) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "They're forces of electromagnetism dictated by electrical charge that is created due to the shape of the molecule.";
    }
    if (SP==74) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "Baby words please?";
    }
    if (SP==75) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "It's being well... <b><i>Chemically Attracted</i></b>.";
    }
    if (SP==76) {
        document.getElementById("option1").innerHTML = "";
        document.getElementById("option2").innerHTML = "";
        document.getElementById("option3").innerHTML = "";
        document.getElementById("option1").className = "";
        document.getElementById("option2").className = "";
        document.getElementById("option3").className = "";
        document.getElementById("BG").innerHTML = '<img src="Images/End.jpg" alt="" class="BG">';
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "Chemically Attracted...";
    }
    if (SP==77) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = "Chemically Attracted... I like that!";
    }
    if (SP==78 && QP <= 3) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "After that terrible display of my stupidity, it's safe to say Dopamine was right to look for a better tutor in chemistry.";
    }
    if (SP==79 && QP <= 3) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "I mean it's a relief I don't have the responsibility to tutor someone, but I wonder, if I was better could that chance have made our relationship blossom?";
    }
    if (SP==80 && QP <= 3) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "I guess I'll never know...";
    }
    if (SP==81 && QP <= 3) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "<b><i>Bad Ending</i></b>";
    }
    if (SP==78 && QP >= 4) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "One fleeting chance, all one needs to do it to reach out and grasp it firmly.";
    }
    if (SP==79 && QP >= 4) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "It's been a while since I first tutored Dopamine, and it's safe to say she kept coming back after she got better and better in chemistry.";
    }
    if (SP==80 && QP >= 4) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "However it seems chemistry wasn't the only reason she came back, and eventually we started dating.";
    }
    if (SP==81 && QP >= 4) {
        document.getElementById("speaker").innerHTML = "Acetylcholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = "<b><i>Good Ending</i></b>";
    }
    if (SP==82) {
        document.getElementById("regress").className = "regressA";
        document.getElementById("skip").className = "skipA";
        document.getElementById("textBox").className = "";
        document.getElementById("BG").innerHTML = '<img src="Images/End2.jpg" alt="" class="BG">';
        document.getElementById("BG").className = "MBG";
        document.getElementById("speaker").innerHTML = "";
        document.getElementById("speaker").className = "";
        document.getElementById("text").className = "";
        document.getElementById("text").innerHTML = "";
    }
    if (SP==83) {
        document.getElementById("regress").className = "regress";
        document.getElementById("skip").className = "skip";
        document.getElementById("textBox").className = "TB";
        document.getElementById("BG").className = "BG";
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").className = "text";
        document.getElementById("text").innerHTML = '"Seriously, thank you so much for enjoying our short game!"';
    }
    if (SP==84) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Mhm!!"';
    }
    if (SP==85) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"And a big thanks to out idols who created and made the game possible!"';
    }
    if (SP==86) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Our idols of course being Alexa De Pano and Jashley Serdoncillio."';
    }
    if (SP==87) {
        document.getElementById("speaker").innerHTML = "Charles";
        document.getElementById("speaker").className = "Everyone";
        document.getElementById("text").innerHTML = '"*Ahem"';
    }
    if (SP==88) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"What are you doing here?"';
    }
    if (SP==89) {
        document.getElementById("speaker").innerHTML = "Charles";
        document.getElementById("speaker").className = "Everyone";
        document.getElementById("text").innerHTML = '"I drew the CGI,"';
    }
    if (SP==90) {
        document.getElementById("speaker").innerHTML = "Charles";
        document.getElementById("speaker").className = "Everyone";
        document.getElementById("text").innerHTML = '"I coded the framework,"';
    }
    if (SP==91) {
        document.getElementById("speaker").innerHTML = "Charles";
        document.getElementById("speaker").className = "Everyone";
        document.getElementById("text").innerHTML = '"I WROTE THE SCRIPT."';
    }
    if (SP==92) {
        document.getElementById("speaker").innerHTML = "Alexa";
        document.getElementById("speaker").className = "MJ";
        document.getElementById("text").innerHTML = '"Oops, sorry about thet lods!!"';
    }
    if (SP==93) {
        document.getElementById("speaker").innerHTML = "Charles";
        document.getElementById("speaker").className = "Everyone";
        document.getElementById("text").innerHTML = '"Dont you "lods" me!"';
    }
    if (SP==94) {
        document.getElementById("speaker").innerHTML = "Jashley";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Our bad guys, he just needs a full 8 hours of sleep."';
    }
    if (SP==95) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Please make sure he gets it!!"';
    }
    if (SP==96) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"And be sure you guys do too!"';
    }
    if (SP==97) {
        document.getElementById("speaker").innerHTML = "Acetycholine";
        document.getElementById("speaker").className = "Ace";
        document.getElementById("text").innerHTML = '"Ingat mga lods!"';
    }
    if (SP==98) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Take care guys!!"';
    }
    if (SP==99) {
        document.getElementById("speaker").innerHTML = "Dopamine";
        document.getElementById("speaker").className = "Dop";
        document.getElementById("text").innerHTML = '"Thank you!!"';
    }
    if (SP==100) {
        document.getElementById("speaker").innerHTML = "Sir JM";
        document.getElementById("speaker").className = "MJ";
        document.getElementById("text").innerHTML = '"..."';
    }
    if (SP==101) {
        document.getElementById("speaker").innerHTML = "Sir JM";
        document.getElementById("speaker").className = "MJ";
        document.getElementById("text").innerHTML = '"I see no problems with it."';
    }
    if (SP==102) {
        document.getElementById("speaker").innerHTML = "Sir JM";
        document.getElementById("speaker").className = "MJ";
        document.getElementById("text").innerHTML = '"Good work."';
    }
    if (SP==103) {
        document.getElementById("regress").className = "regressA";
        document.getElementById("skip").className = "skipA";
        document.getElementById("textBox").className = "";
        document.getElementById("BG").innerHTML = '<img src="Images/End2.jpg" alt="" class="BG">';
        document.getElementById("BG").className = "MBG";
        document.getElementById("speaker").innerHTML = "";
        document.getElementById("speaker").className = "";
        document.getElementById("text").className = "";
        document.getElementById("text").innerHTML = "";
    }
}