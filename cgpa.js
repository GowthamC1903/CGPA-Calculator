var divsubject, subinput, subbtn;
var table, rowcount,row, data1, data2, data3, inp1, inp2, inp3, calc;
var g0,g1,g2,g3,g4,g5;
var c0,c1,c2,c3,c4,c5,c6;
var marks,credit;
var gpamarks,gpacredit;
var cgpamarks=0,cgpacredit=0;
var gpares,cgpares;
var semcount=0;
var divleft, divright;
var sublabel;
var maindiv;
function noofsems()
{
    var count = document.getElementById("semcount").value;
    if (count>8)
    {
        alert("Number of semesters should be below 8");
    }
}
function next()
{
    divsubject = document.getElementById("subject");
    semcount = semcount + 1;
    if (semcount==0)
    {
        alert("Number of semesters should not be zero");
    }
    else if (semcount>8)
    {
        document.getElementById("sembtn").disabled=true;
        alert("Semester Limit Exceeded");  
    }
    else
    {
        goNext();
    }
}
function goNext()
{
    document.getElementById("sembtn").disabled = true;
    sublabel = document.createElement("h2");
    sublabel.setAttribute("id","semheading");
    sublabel.innerHTML="SEMESTER "+ semcount;
    divsubject.appendChild(sublabel)
    subhead = document.createElement("label");
    subhead.innerHTML="Enter number of subjects: ";
    divsubject.appendChild(subhead);
    divsubject.appendChild(document.createElement("br"));
    divsubject.appendChild(document.createElement("br"));
    subinput = document.createElement("input");
    subinput.setAttribute("id","subcount"+semcount);
    subinput.setAttribute("type","number");
    divsubject.appendChild(subinput);
    divsubject.appendChild(document.createElement("br"));
    divsubject.appendChild(document.createElement("br"));
    divsubject.appendChild(document.createElement("br"));
    subbtn = document.createElement("button");
    subbtn.setAttribute("id","subbtn");
    subbtn.setAttribute("type","button");
    subbtn.innerHTML="NEXT";
    subbtn.setAttribute("onclick","createTable()");
    divsubject.appendChild(subbtn);
}
function createTable()
{
    document.getElementById("subcount"+semcount).disabled = true;
    subbtn.disabled = true;
    maindiv = document.createElement("div");
    maindiv.setAttribute("id","container");
    divsubject.appendChild(maindiv);
    divleft = document.createElement("div");
    divleft.setAttribute("id","left");
    maindiv.appendChild(divleft);
    table = document.createElement("table");
    table.setAttribute("id","tb"+semcount);
    divleft.appendChild(table);
    rowcount = document.getElementById("subcount"+semcount).value;
    console.log(rowcount)
    for (let i=1;i<=rowcount;i++)
    {
        row = document.createElement("TR");
        row.setAttribute("id","tr"+semcount+""+i);
        document.getElementById("tb"+semcount).appendChild(row);

        data1 = document.createElement("td");
        data1.setAttribute("id","td"+semcount+"1");
        row.appendChild(data1);
        inp1 = document.createElement("input");
        inp1.setAttribute("id",semcount+"r"+i+"c1");
        inp1.setAttribute("type","text");
        inp1.setAttribute("placeholder","Sub Name/Sub Code");
        data1.appendChild(inp1);
        row.appendChild(data1);

        data2 = document.createElement("td");
        data2.setAttribute("id","td"+semcount+"2");
        row.appendChild(data2);
        inp2 = document.createElement("select");
        inp2.setAttribute("id",semcount+"r"+i+"c2");
        data2.appendChild(inp2);
        g0 = document.createElement("option");
        g0.setAttribute("value","-");
        g0.innerHTML="GRADE";
        inp2.appendChild(g0);
        g1 = document.createElement("option");
        g1.setAttribute("value","O");
        g1.innerHTML="O";
        inp2.appendChild(g1);
        g2 = document.createElement("option");
        g2.setAttribute("value","A+");
        g2.innerHTML="A+";
        inp2.appendChild(g2);
        g3 = document.createElement("option");
        g3.setAttribute("value","A");
        g3.innerHTML="A";
        inp2.appendChild(g3);
        g4 = document.createElement("option");
        g4.setAttribute("value","B+");
        g4.innerHTML="B+";
        inp2.appendChild(g4);
        g5 = document.createElement("option");
        g5.setAttribute("value","B");
        g5.innerHTML="B";
        inp2.appendChild(g5);

        data3 = document.createElement("td");
        data3.setAttribute("id","td"+semcount+"3");
        row.appendChild(data3);
        inp3 = document.createElement("select");
        inp3.setAttribute("id",semcount+"r"+i+"c3");
        data3.appendChild(inp3);
        c0 = document.createElement("option");
        c0.setAttribute("value","-1");
        c0.innerHTML="CREDIT";
        inp3.appendChild(c0);
        c1 = document.createElement("option");
        c1.setAttribute("value","4");
        c1.innerHTML="4";
        inp3.appendChild(c1);
        c2 = document.createElement("option");
        c2.setAttribute("value","3");
        c2.innerHTML="3";
        inp3.appendChild(c2);
        c3 = document.createElement("option");
        c3.setAttribute("value","2");
        c3.innerHTML="2";
        inp3.appendChild(c3);
        c4 = document.createElement("option");
        c4.setAttribute("value","1");
        c4.innerHTML="1";
        inp3.appendChild(c4);
        c5 = document.createElement("option");
        c5.setAttribute("value","1.5");
        c5.innerHTML="1.5";
        inp3.appendChild(c5);
        c6 = document.createElement("option");
        c6.setAttribute("value","0");
        c6.innerHTML="0";
        inp3.appendChild(c6);

    }
    calc=document.createElement("button");
    calc.setAttribute("id","btn"+semcount);
    calc.setAttribute("type","button");
    calc.innerHTML="CALCULATE";
    calc.setAttribute("onclick","calculate()");
    divleft.appendChild(calc);
    divright = document.createElement("div");
    divright.setAttribute("id","right");
    maindiv.appendChild(divright);
    gpares = document.createElement("h3");
    gpares.innerHTML = "Your GPA is: _";
    divright.appendChild(gpares);
    cgpares = document.createElement("h3");
    cgpares.innerHTML = "Your CGPA is: _";
    divright.appendChild(cgpares);
}
function calculate()
{
    gpamarks = 0; gpacredit = 0;
    for (let i=1;i<=rowcount;i++)
    {
        var grade =  document.getElementById(semcount+"r"+i+"c2").value;
        if (grade=="O") marks=10;
        else if (grade=="A+") marks=9;
        else if (grade=="A") marks=8;
        else if (grade=="B+") marks=7;
        else if (grade=="B") marks=6;
        credit = parseFloat(document.getElementById(semcount+"r"+i+"c3").value);
        gpamarks+=(marks*credit);
        gpacredit+=credit;
    }
    cgpamarks+=gpamarks;
    cgpacredit+=gpacredit;
    gpares.innerHTML = "Your GPA is: "+(gpamarks/gpacredit).toFixed(2);
    cgpares.innerHTML= "Your CGPA is: "+(cgpamarks/cgpacredit).toFixed(2);
    for (let i=1;i<=rowcount;i++)
    {
        document.getElementById(semcount+"r"+i+"c1").disabled= true;
        document.getElementById(semcount+"r"+i+"c2").disabled= true;
        document.getElementById(semcount+"r"+i+"c3").disabled= true;
    }
    document.getElementById("btn"+semcount).disabled=true;
    document.getElementById("sembtn").disabled = false;
}