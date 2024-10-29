$(document).ready(function () {
   // For аssessment
   $("li").click(function (event) {
      var clickedElement = event.target;
      var $checkbox = $(clickedElement).find("input[type='checkbox']");
      var $radio = $(clickedElement).find("input[type='radio']");

      if ($checkbox.length > 0) {
         $checkbox.prop("checked", !$checkbox.prop("checked"));
      } else if ($radio.length > 0) {
         $radio.prop("checked", true);
      }
   });

   $("input[type='checkbox'], input[type='radio']").click(function (event) {
      event.stopPropagation();
   });


   // Подія натискання на кнопку  
   $('#submitBtn').click(function () {

      $('#reloadBtn').click(function () {
         // Show correct answers
         $('input[type="checkbox"], input[type="radio"]').each(function () {
            var questionName = $(this).attr('name');
            var correctAnswer;
            if (questionName in correctAnswers) {
               correctAnswer = correctAnswers[questionName];
            }
      
            if ($(this).is(':checked')) {
               // Correct answer, mark as green
               if (Array.isArray(correctAnswer)) {
                  if (correctAnswer.includes($(this).val())) {
                     $(this).next('label').css('color', 'green');
                  }
               } else if ($(this).val() === correctAnswer) {
                  $(this).next('label').css('color', 'green');
               }
            } else {
               // Incorrect answer, mark as red
               if (Array.isArray(correctAnswer)) {
                  if (!correctAnswer.includes($(this).val())) {
                     $(this).next('label').css('color', 'red');
                  }
               } else if ($(this).val() !== correctAnswer) {
                  $(this).next('label').css('color', 'red');
               }
            }
         });
      });
      
      // Змінні для збереження результатів тестування
      var q1Answer = $('input[name="q1"]:checked').val();
      var q2Answers = $('input[name="q2"]:checked').map(function () {
            return $(this).val();
      }).get();
      var q3Answers = $('#q3 .dropzone').map(function () {
         return $(this).val();
      }).get();
      var q4Answer = $('input[name="q4"]:checked').val();
      var q5Answer = $('input[name="q5"]:checked').val();
      var q6Answer = $('input[name="q6"]:checked').val();
      var q7Answers = $('input[name="q7"]:checked').map(function () {
         return $(this).val();
      }).get();
      var q8Answers = $('#q8 .dropzone').map(function () {
         return $(this).val();
      }).get();
      var q9Answers = $('input[name="q9"]:checked').map(function () {
         return $(this).val();
      }).get();
      var q10Answers = $('#q10 .dropzone').map(function () {
         return $(this).val();
      }).get();


      // Правильні відповіді
      var correctAnswers = {
         q1: 'A',
         q2: ['red', 'green', 'yellow'],
         q3: ['D', 'C', 'B'],
         q4: 'C',
         q5: 'D',
         q6: 'C',
         q7: ['A', 'B', 'F', 'G'],
         q8: ['B', 'A'],
         q9: ['C', 'E'],
         q10: ['A', 'B', 'D', 'A', 'A', 'C', 'E']
      };
      // Початкова кількість балів
      var score = 0;
      // Отримання відповіді від 1-го завдання 
      if (q1Answer === correctAnswers.q1) {
         score = score + 5;
      }
      // Отримання відповідей від 2-го завдання 
      if (q2Answers.length === correctAnswers.q2.length && q2Answers.every(function (value) {
         return correctAnswers.q2.includes(value);
      })) {
         score = score + 5;
      }
      // Отримання відповідей від 3-го завдання 
      if (q3Answers.length === correctAnswers.q3.length && q3Answers.every(function (value, index) {
         return value === correctAnswers.q3[index];
      })) {
         score = score + 10;
      }
      // Отримання відповіді від 4-го завдання 
      if (q4Answer === correctAnswers.q4) {
         score = score + 5;
      }
      // Отримання відповіді від 5-го завдання 
      if (q5Answer === correctAnswers.q5) {
         score = score + 10;
      } 
      // Отримання відповіді від 6-го завдання 
      if (q6Answer === correctAnswers.q6) {
         score = score + 10;
      }
      // Отримання відповідей від 7-го завдання 
      if (q7Answers.length === correctAnswers.q7.length && q7Answers.every(function (value) {
         return correctAnswers.q7.includes(value);
      })) {
         score = score + 10;
      }
      // Отримання відповідей від 8-го завдання 
      if (q8Answers.length === correctAnswers.q8.length && q8Answers.every(function (value, index) {
         return value === correctAnswers.q8[index];
      })) {
         score = score + 10;
      }
      // Отримання відповідей від 9-го завдання 
      if (q9Answers.length === correctAnswers.q9.length && q9Answers.every(function (value) {
         return correctAnswers.q9.includes(value);
      })) {
         score = score + 10;
      }
      // Отримання відповідей від 10-го завдання 
      if (q10Answers.length === correctAnswers.q10.length && q10Answers.every(function (value, index) {
         return value === correctAnswers.q10[index];
      })) {
         score = score + 25;
      }

      // Визнаячення оцінки
      var grade = '';
      if (score >= 90) {
         grade = ' Відмінно';
         $('#grade').css({
            'color': 'rgb(167, 147, 255)'
         });
      } else if (score >= 75) {
         grade = ' Добре';
         $('#grade').css({
            'color': 'green'
         });
      } else if (score >= 60) {
         grade = ' Задовільно';
         $('#grade').css({
            'color': 'rgb(168, 168, 168)'
         });
      } else {
         grade = ' Незадовільно';
         $('#grade').css({
            'color': 'red'
         });
      }


      // Відображення вікна з результатами тестування
      $('#results-content').attr("id", "results-content-display")
      $('#my-results').attr("id", "my-results-display")
      // Відображення оцінки в числофому форматі
      $('#score').text(score);
      // Відображення оцінки в текстовому форматі
      $('#grade').text(grade);
   });
})
