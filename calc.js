function Calc(mathOperation, num1, num2) {
	let result;
	const isNotValid =
		mathOperation == undefined ||
		num1 == undefined ||
		num2 == undefined ||
		typeof num1 !== 'number' ||
		typeof num2 !== 'number';

	if (isNotValid) {
		result = 'Error';
		return console.log(result);
	}

	switch (mathOperation) {
		case 'sum':
			result = num1 + num2;
			break;
		case 'multi':
			result = `${num1} x ${num2} = ${num1 * num2}`;
			break;
		case 'Subt':
			result = `${num1} - ${num2} = ${num1 - num2}`;
			break;
		case 'Dvsn':
			result = `${num1} / ${num2} = ${num1 / num2}`;
			break;
		case 'Exp':
			result = `${num1} в ${num2} степени: ${num1 ** num2}`;
			break;
		case 'Rmndr':
			result = `Остаток от деления ${num1} на ${num2}: ${num1 % num2}`;
			break;
		default:
			result = 'unknown operation';
			break;
	}
	return console.log(result);
}

Calc('sum', 5, 9);
Calc('multi', 24, 3);
Calc('Subt', 6, 3);
Calc('Dvsn', 24, 3);
Calc('Exp', 12, 3);
Calc('Rmndr', 9, 3);
Calc('su', 2, 3);
Calc('su', '', 3);
Calc('su', 2, '');
Calc('sum', 3);
