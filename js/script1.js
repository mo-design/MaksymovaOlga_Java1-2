function Pow (a, x)
	{
		x = Math.round(x); 
		
		if (x == 0) {
			if (a == 0) {
				alert('Ноль в нулевой степени не имеет смысла');
				return 'ERROR';
			}
			return 1;
			}
			
			
		if (x > 0) {
			var result=1;
			for (var i=1; i<=x; i++) result=result*a;
			return result;
			}
		
		if (x < 0) {
			if (a == 0) {
				alert('Ноль нельзя возвести в отрицательную степень');
				return 'ERROR';
			}
			var result=1;
			for (var i=1; i<=(-x); i++) result=result/a;
			return result;
			}
			
			
	}
		
		
		




var a = prompt('Введите число, которое возведем в степень');

var i = 0;

while (i<1) {
	if (isNaN(a)) {a = prompt('Вы ввели не число. Введите число.'); }
	else {i++;}
}

var x = prompt('Введите степень, желательно целое число. Нецелое будет округлено.');

var i = 0;

while (i<1) {
	if (isNaN(x)) {x = prompt('Вы ввели не число. Попробуйте еще раз.'); }
	else {i++;}
}

var result = Pow (a, x);

console.log(result);



