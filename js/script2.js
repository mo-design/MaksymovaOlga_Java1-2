alert('Введите, пожалуйста, следущую информацию:');
var arrNames = [ ,  ,  ,  ,  ];
for (var i=0; i<5; i++)
	{
		arrNames[i]= prompt('Введите имя номер  '+(i+1));

	}


var User = prompt('А теперь введите имя пользователя.');

var flag = false;

for (var i=0; i<5; i++) {
	if (User == arrNames[i]) {
		flag = true;
	}
}

if (flag) { alert(User + ', Вы успешно вошли')} 
else {alert(User + ', сорри, Вам доступ запрещен')} 

