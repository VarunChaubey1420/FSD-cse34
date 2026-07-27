function updateClock(){
    const now = new Date();
    const timeOptions={
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:true
    };
    const dateOptions={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    };
    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-US",timeOptions);
    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US",dateOptions);
}
setInterval(updateClock,1000);
updateClock();

const startScreen=document.getElementById("startScreen");
const quizScreen=document.getElementById("quizScreen");
const resultScreen=document.getElementById("resultScreen");
const subjectSelect=document.getElementById("subjectSelect");
const startBtn=document.getElementById("startBtn");
const questionText=document.getElementById("questionText");
const optionsContainer=document.getElementById("optionsContainer");
const nextBtn=document.getElementById("nextBtn");
const progressFill=document.getElementById("progressFill");
const questionNumber=document.getElementById("questionNumber");
const finalScore=document.getElementById("finalScore");
const percentage=document.getElementById("percentage");
const countdown=document.getElementById("countdown");
const subjectName=document.getElementById("subjectName");

const quizzes = {
  os: [
    {
      question:
        "Which software acts as an interface between user and hardware?",
      options: ["Compiler", "Operating System", "Database", "Assembler"],
      answer: 1,
    },

    {
      question:
        "Which scheduling algorithm gives minimum average waiting time?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      answer: 1,
    },

    {
      question: "Which scheduling algorithm is preemptive?",
      options: ["FCFS", "SJF", "Round Robin", "LIFO"],
      answer: 2,
    },

    {
      question: "Which memory is fastest?",
      options: ["RAM", "Hard Disk", "Cache", "SSD"],
      answer: 2,
    },

    {
      question: "Which memory is volatile?",
      options: ["ROM", "Hard Disk", "RAM", "DVD"],
      answer: 2,
    },

    {
      question: "Deadlock occurs when...",
      options: [
        "CPU is overloaded",
        "Processes wait forever",
        "RAM is full",
        "Cache misses occur",
      ],
      answer: 1,
    },

    {
      question: "Which is NOT a necessary condition for deadlock?",
      options: ["Mutual Exclusion", "Hold and Wait", "Paging", "Circular Wait"],
      answer: 2,
    },

    {
      question: "FIFO is mainly used in...",
      options: ["Scheduling", "Page Replacement", "Encryption", "Compilation"],
      answer: 1,
    },

    {
      question:
        "Which page replacement algorithm suffers from Belady's anomaly?",
      options: ["LRU", "FIFO", "Optimal", "Clock"],
      answer: 1,
    },

    {
      question: "Which scheduling algorithm uses time quantum?",
      options: ["Priority", "FCFS", "Round Robin", "SJF"],
      answer: 2,
    },

    {
      question: "Which OS allows multiple users simultaneously?",
      options: ["Single User", "Batch", "Multi User", "Embedded"],
      answer: 2,
    },

    {
      question: "Linux is an example of...",
      options: ["Closed Source", "Open Source", "Firmware", "Compiler"],
      answer: 1,
    },

    {
      question: "Which system call creates a new process in Linux?",
      options: ["exec()", "fork()", "clone()", "spawn()"],
      answer: 1,
    },

    {
      question: "What is Thrashing?",
      options: [
        "Virus attack",
        "Excessive paging",
        "CPU overheating",
        "Disk failure",
      ],
      answer: 1,
    },

    {
      question: "Semaphore is used for...",
      options: [
        "Scheduling",
        "Synchronization",
        "Memory Allocation",
        "Compilation",
      ],
      answer: 1,
    },

    {
      question: "Which scheduling algorithm may cause starvation?",
      options: ["Priority Scheduling", "Round Robin", "FCFS", "FIFO"],
      answer: 0,
    },

    {
      question: "Context Switching occurs when...",
      options: [
        "Changing RAM",
        "Switching CPU between processes",
        "Changing OS",
        "Formatting disk",
      ],
      answer: 1,
    },

    {
      question: "Which memory cannot be modified easily?",
      options: ["RAM", "ROM", "Cache", "Registers"],
      answer: 1,
    },

    {
      question: "Which OS is mainly used on smartphones?",
      options: ["Windows XP", "Android", "DOS", "UNIX only"],
      answer: 1,
    },

    {
      question: "Which scheduling algorithm is simplest?",
      options: ["Round Robin", "FCFS", "Priority", "SJF"],
      answer: 1,
    },
  ],
  cn: [
    {
      question: "Which device operates at the Network Layer?",
      options: ["Hub", "Switch", "Router", "Repeater"],
      answer: 2,
    },

    {
      question: "Which protocol is used to browse websites?",
      options: ["FTP", "SMTP", "HTTP", "SNMP"],
      answer: 2,
    },

    {
      question: "HTTPS uses which protocol for security?",
      options: ["SSL/TLS", "UDP", "ARP", "ICMP"],
      answer: 0,
    },

    {
      question: "Which layer is responsible for routing?",
      options: ["Transport", "Network", "Data Link", "Session"],
      answer: 1,
    },

    {
      question: "IP stands for:",
      options: [
        "Internet Protocol",
        "Internal Process",
        "Internet Process",
        "Interface Protocol",
      ],
      answer: 0,
    },

    {
      question: "Which protocol is connection-oriented?",
      options: ["UDP", "TCP", "ICMP", "ARP"],
      answer: 1,
    },

    {
      question: "Which protocol is connectionless?",
      options: ["TCP", "UDP", "FTP", "HTTP"],
      answer: 1,
    },

    {
      question: "Which port does HTTP use by default?",
      options: ["20", "21", "80", "443"],
      answer: 2,
    },

    {
      question: "Which port does HTTPS use?",
      options: ["80", "21", "443", "23"],
      answer: 2,
    },

    {
      question: "Which device forwards packets using MAC addresses?",
      options: ["Router", "Switch", "Hub", "Gateway"],
      answer: 1,
    },

    {
      question: "DNS is used to:",
      options: [
        "Transfer files",
        "Resolve domain names",
        "Send emails",
        "Assign IP addresses",
      ],
      answer: 1,
    },

    {
      question: "Which protocol sends emails?",
      options: ["SMTP", "HTTP", "FTP", "ARP"],
      answer: 0,
    },

    {
      question: "Which protocol receives emails?",
      options: ["POP3", "HTTP", "FTP", "SSH"],
      answer: 0,
    },

    {
      question: "Which command checks network connectivity?",
      options: ["ping", "mkdir", "copy", "format"],
      answer: 0,
    },

    {
      question: "IPv4 address consists of:",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      answer: 1,
    },

    {
      question: "IPv6 address consists of:",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      answer: 2,
    },

    {
      question: "Which protocol maps IP addresses to MAC addresses?",
      options: ["DNS", "ARP", "ICMP", "FTP"],
      answer: 1,
    },

    {
      question: "The OSI model has how many layers?",
      options: ["5", "6", "7", "8"],
      answer: 2,
    },

    {
      question: "Which topology connects every device to every other device?",
      options: ["Star", "Bus", "Ring", "Mesh"],
      answer: 3,
    },

    {
      question: "Which topology uses a central hub or switch?",
      options: ["Ring", "Star", "Bus", "Mesh"],
      answer: 1,
    },
  ],
  dbms: [
    {
      question: "DBMS stands for?",
      options: [
        "Database Management System",
        "Data Backup Management System",
        "Digital Base Management System",
        "Database Memory System",
      ],
      answer: 0,
    },

    {
      question: "Which language is used to interact with databases?",
      options: ["HTML", "SQL", "Python", "C"],
      answer: 1,
    },

    {
      question: "Which SQL command retrieves data?",
      options: ["GET", "SELECT", "FETCH", "SHOW"],
      answer: 1,
    },

    {
      question: "Which SQL command removes all rows but keeps the table?",
      options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
      answer: 2,
    },

    {
      question: "Which command permanently removes a table?",
      options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
      answer: 1,
    },

    {
      question: "Which key uniquely identifies each record in a table?",
      options: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key"],
      answer: 1,
    },

    {
      question: "A Foreign Key is used to:",
      options: [
        "Delete records",
        "Link two tables",
        "Sort records",
        "Encrypt data",
      ],
      answer: 1,
    },

    {
      question: "Which SQL clause filters rows?",
      options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
      answer: 2,
    },

    {
      question: "Which SQL clause sorts records?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "SORT"],
      answer: 0,
    },

    {
      question: "Which SQL function counts rows?",
      options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
      answer: 1,
    },

    {
      question: "Normalization is used to:",
      options: [
        "Increase redundancy",
        "Reduce redundancy",
        "Delete tables",
        "Increase storage",
      ],
      answer: 1,
    },

    {
      question: "Which normal form removes partial dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: 1,
    },

    {
      question: "Which join returns matching rows from both tables?",
      options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      answer: 2,
    },

    {
      question: "Which join returns all rows from the left table?",
      options: ["RIGHT JOIN", "INNER JOIN", "LEFT JOIN", "CROSS JOIN"],
      answer: 2,
    },

    {
      question: "ACID property 'A' stands for:",
      options: ["Atomicity", "Accuracy", "Availability", "Accessibility"],
      answer: 0,
    },

    {
      question: "Which SQL statement adds a new row?",
      options: ["ADD", "INSERT", "UPDATE", "APPEND"],
      answer: 1,
    },

    {
      question: "Which SQL statement modifies existing data?",
      options: ["UPDATE", "CHANGE", "MODIFY", "ALTER"],
      answer: 0,
    },

    {
      question: "Which SQL statement deletes selected rows?",
      options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
      answer: 0,
    },

    {
      question: "A table row is also called:",
      options: ["Field", "Tuple", "Attribute", "Column"],
      answer: 1,
    },

    {
      question: "A table column is also called:",
      options: ["Record", "Tuple", "Attribute", "Relation"],
      answer: 2,
    },
  ],
  java: [
    {
      question: "Java was developed by?",
      options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
      answer: 1,
    },

    {
      question: "Which keyword is used to create an object?",
      options: ["create", "new", "object", "make"],
      answer: 1,
    },

    {
      question: "Which method is the entry point of a Java program?",
      options: ["run()", "main()", "start()", "init()"],
      answer: 1,
    },

    {
      question: "Which of these is NOT a primitive data type?",
      options: ["int", "float", "String", "char"],
      answer: 2,
    },

    {
      question: "Which keyword is used for inheritance?",
      options: ["extends", "implements", "inherits", "super"],
      answer: 0,
    },

    {
      question: "Which keyword refers to the current object?",
      options: ["self", "this", "current", "super"],
      answer: 1,
    },

    {
      question: "Which keyword is used to prevent inheritance?",
      options: ["const", "static", "final", "private"],
      answer: 2,
    },

    {
      question: "Which package is imported automatically?",
      options: ["java.util", "java.io", "java.lang", "java.net"],
      answer: 2,
    },

    {
      question: "Which loop executes at least once?",
      options: ["for", "while", "do-while", "foreach"],
      answer: 2,
    },

    {
      question: "Which operator compares object references?",
      options: ["==", "equals()", "compare()", "same()"],
      answer: 0,
    },

    {
      question: "Which method compares the contents of two Strings?",
      options: ["==", "compare()", "equals()", "match()"],
      answer: 2,
    },

    {
      question: "Which exception occurs when dividing by zero using integers?",
      options: [
        "IOException",
        "ArithmeticException",
        "NullPointerException",
        "ArrayIndexOutOfBoundsException",
      ],
      answer: 1,
    },

    {
      question: "Which collection stores unique elements only?",
      options: ["List", "Queue", "Set", "ArrayList"],
      answer: 2,
    },

    {
      question: "Which class implements a dynamic array?",
      options: ["LinkedList", "HashMap", "ArrayList", "Stack"],
      answer: 2,
    },

    {
      question: "Java is a _____ language.",
      options: ["Procedural", "Object-Oriented", "Assembly", "Scripting only"],
      answer: 1,
    },

    {
      question: "Which keyword is used to inherit an interface?",
      options: ["extends", "implements", "inherits", "interface"],
      answer: 1,
    },

    {
      question: "Which access modifier provides the widest accessibility?",
      options: ["private", "protected", "default", "public"],
      answer: 3,
    },

    {
      question: "Which keyword is used to define a constant variable?",
      options: ["const", "static", "final", "fixed"],
      answer: 2,
    },

    {
      question: "Which class is the parent of all Java classes?",
      options: ["Object", "Main", "Parent", "Root"],
      answer: 0,
    },

    {
      question: "Java source files have which extension?",
      options: [".class", ".exe", ".java", ".jar"],
      answer: 2,
    },
  ],
  python: [
    {
      question: "Who developed Python?",
      options: [
        "James Gosling",
        "Guido van Rossum",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
      answer: 1,
    },

    {
      question: "Python is a _____ language.",
      options: ["Compiled only", "Interpreted", "Assembly", "Machine"],
      answer: 1,
    },

    {
      question: "Which keyword is used to define a function?",
      options: ["func", "define", "def", "function"],
      answer: 2,
    },

    {
      question: "Which data type is immutable?",
      options: ["List", "Dictionary", "Set", "Tuple"],
      answer: 3,
    },

    {
      question: "Which symbol starts a comment in Python?",
      options: ["//", "#", "/*", "--"],
      answer: 1,
    },

    {
      question: "Which function prints output?",
      options: ["echo()", "printf()", "print()", "display()"],
      answer: 2,
    },

    {
      question: "Which function takes user input?",
      options: ["scan()", "cin()", "input()", "read()"],
      answer: 2,
    },

    {
      question: "Which collection stores key-value pairs?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      answer: 2,
    },

    {
      question: "Which keyword is used for a loop?",
      options: ["repeat", "loop", "for", "iterate"],
      answer: 2,
    },

    {
      question: "Which keyword exits a loop immediately?",
      options: ["continue", "break", "stop", "exit"],
      answer: 1,
    },

    {
      question: "Which keyword skips the current iteration?",
      options: ["pass", "skip", "continue", "next"],
      answer: 2,
    },

    {
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "*", "//"],
      answer: 1,
    },

    {
      question: "What is the output type of input()?",
      options: ["Integer", "Float", "String", "Boolean"],
      answer: 2,
    },

    {
      question: "Which method adds an element to the end of a list?",
      options: ["insert()", "append()", "add()", "push()"],
      answer: 1,
    },

    {
      question: "Which method removes the last element of a list?",
      options: ["remove()", "delete()", "pop()", "clear()"],
      answer: 2,
    },

    {
      question: "Which keyword is used to create a class?",
      options: ["object", "class", "struct", "define"],
      answer: 1,
    },

    {
      question: "Which special method acts as a constructor?",
      options: ["__main__", "__start__", "__init__", "constructor"],
      answer: 2,
    },

    {
      question: "Python files have which extension?",
      options: [".py", ".python", ".pt", ".pyt"],
      answer: 0,
    },

    {
      question: "Which value represents 'no value' in Python?",
      options: ["null", "None", "0", "undefined"],
      answer: 1,
    },

    {
      question: "Which built-in function returns the length of a list?",
      options: ["size()", "count()", "len()", "length()"],
      answer: 2,
    },
  ],
};

let questions=[];
let currentQuestion=0;
let score=0;
let selectedAnswer=null;
let timer;
let timeLeft=900;

startBtn.addEventListener("click",()=>{
    const subject=subjectSelect.value;
    if(subject===""){
        alert("Please select a subject.");
        return;
    }
    subjectName.textContent=
        subjectSelect.options[
            subjectSelect.selectedIndex
        ].text;
    questions = [...quizzes[subject]]
        .sort(() => Math.random() - 0.5)
        .slice(0,10);
    currentQuestion=0;
    score=0;
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    startTimer();
    showQuestion();
});

function showQuestion(){
    nextBtn.disabled=true;
    selectedAnswer=null;
    const q=questions[currentQuestion];
    questionText.textContent=q.question;
    questionNumber.textContent=
    `Question ${currentQuestion+1} / ${questions.length}`;
    progressFill.style.width=
    `${((currentQuestion+1)/questions.length)*100}%`;
    optionsContainer.innerHTML="";
    q.options.forEach((option,index)=>{
        const div=document.createElement("div");
        div.className="option";
        div.textContent=option;
        div.addEventListener("click",()=>selectOption(div,index));
        optionsContainer.appendChild(div);
    });
}

function selectOption(element,index){
    document.querySelectorAll(".option").forEach(option=>{
        option.classList.remove("selected");
    });
    element.classList.add("selected");
    selectedAnswer=index;
    nextBtn.disabled=false;
}

nextBtn.addEventListener("click",()=>{
    if(selectedAnswer===questions[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion<questions.length){
        showQuestion();
    }else{

        finishQuiz();

    }
});

function startTimer(){
    clearInterval(timer);
    timeLeft=900;
    timer=setInterval(()=>{
        const minutes=Math.floor(timeLeft/60);
        const seconds=timeLeft%60;
        countdown.textContent=
        `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        timeLeft--;
        if(timeLeft<0){
            clearInterval(timer);
            finishQuiz();
        }
    },1000);
}

function finishQuiz(){
    clearInterval(timer);
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScore.textContent=`${score} / ${questions.length}`;
    percentage.textContent=
    `${Math.round((score/questions.length)*100)} %`;
}