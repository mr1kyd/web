 var questions = [
  [
    " 1. Производительность процессора зависит от ",
    "его типа и скорости работы",
    "его разрядности и тактовой частоты",
    "его разъёмов",
    2
  ],
  [
    "2. Для оптического ввода в компьютер и преобразования в компьютерную форму изображений, а также текстовых документов используется ",
    "графический планшет",
    "сканер",
    "принтер",
    2
  ],
  [
    "3. Информация, представленная в двоичном компьютерном коде (представляет собой последовательность 0 и 1) называется ",
    "программа",
    "файл",
    "данные",
    3
  ],
  [
    "4. Качество изображения монитора определяется ",
    "способом подключения",
    "разрешающей способностью",
    "типом видеокарты",
    2
  ],
  [
    "5. Пути повышения производительности процессора заключаются в ",
    "в увеличении числа разъемов процессора",
    "в изменении функциональной схемы",
    "в совершенствовании архитектуры, кэш-памяти, использовании нескольких ядер",
    3
  ],
  [
    "6. Какие устройства относятся к устройствам ввода информации? ",
    "принтер, сканер, клавиатура",
    "монитор, сканер, клавиатура",
    "графический планшет, клавиатура, микрофон, сканер",
    3
  ],
  [
    "7. Для того чтобы компьютер смог выполнить обработку данных по программе, программа и данные должны быть загружены ",
    "на жёсткий диск",
    "в магистраль",
    "в оперативную память",
    3
  ],
  [
    "8. Какие принтеры обеспечивают типографическое качество печати, высокую скорость печати при меньших затратах на расходные материалы?  ",
    "струйные",
    "лазерные",
    "матричные",
    2
  ],
  [
    "9. Что хранится в ячейках оперативной памяти? ",
    "двоичный код",
    "микрочипы",
    "модули памяти",
    1
  ],
  [
    " 10. Информация на оптическом диске хранится ",
    "на определённых дорожках",
    "на одной спиралевидной дорожке, идущей от центра к периферии",
    "в определённых секторах",
    2
  ]
];

var res = 0;

var root;

var myButton;

var currentQuestion = 0;

function myStart(){
  root = document.getElementById('root');
  var start = document.getElementById('start_text');
  start.remove();
  myButton = document.createElement('input');
  myButton.type = 'button';
  myButton.className = 'myButton';
  myButton.value = 'Дальше';
  myButton.setAttribute('onclick', 'nextQuestion()')
  root.appendChild(myButton);
  createQuestion();
}

function createQuestion(){
  var i;
  var div = document.createElement('div');
  div.id = "question_" + currentQuestion;
  div.innerHTML = questions[currentQuestion][0] + '<br/>';
  for(i = 1; i < 4; i++){
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name  = 'question_' + currentQuestion;
    if(i == questions[currentQuestion][4]){
      radio.id = 'true_' + currentQuestion;
    }
    div.appendChild(radio);
    div.innerHTML += questions[currentQuestion][i] + '<br/>';
  }
  div.className = 'quiz';
  root.insertBefore(div, myButton);
  //div.appendChild(item);
}

function nextQuestion(){
  var qu = document.getElementById('question_' + currentQuestion);
  if(document.getElementById('true_' + currentQuestion).checked){
    res++;
  }
  qu.remove();
  if(currentQuestion < questions.length - 1){
    currentQuestion++;
    createQuestion();
  }
  else{
    var p = document.createElement('div');
    p.innerHTML = "Ваш результат - " + res +". "
    if(res < 4){
      p.innerHTML += "Вам необходимо лучше разобраться в устройстве и особенностях функционирования компьютера.";
    }
    else if(res < 8){
      p.innerHTML += "Вы неплохо разбераетесь в устройстве компьютера и в случае необходимости сможете поддержать диалог.";
    }
    else{
      p.innerHTML += "Вы <span class=\"bold\">ТЫЖПРОГРАММИСТ!!!</span>";
    }
    root.insertBefore(p, myButton);
    myButton.setAttribute('onclick', 'window.location.href = \'index.html\';')
  }
}
