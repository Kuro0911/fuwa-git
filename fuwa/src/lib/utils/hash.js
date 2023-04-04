let mat = [];
let rand = [
	11, 14, 25, 1, 6, 10, 17, 20, 2, 13, 9, 22, 3, 26, 13, 14, 1, 7, 12, 11, 15, 21, 10, 24, 3, 8
];
function fillMatrix() {
	let a = 1,
		z = 26;
	for (let i = a; i <= z; i++) {
		let col = [];
		for (let j = i; j <= z; j++) {
			col.push(j);
		}
		for (let j = a; j < i; j++) {
			col.push(j);
		}
		mat.push(col);
	}
}
function cleanEmail(email) {
	let new_email = email.replace('@gmail.com', '');
	new_email = new_email.replace(/[^a-z]/gi, '');
	return new_email;
}
function getDigestArray(d) {
	let x = Math.ceil(26 / d.length),
		col = [];
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < d.length; j++) {
			col.push(d.charCodeAt(j) - 96);
		}
		d = d.split('').reverse().join('');
	}
	return col.slice(0, 26);
}

function transpose(matrix) {
	return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

function setMatrix(digest) {
	let digest_arr = getDigestArray(digest);
	let x = 0,
		y = 13;
	for (let k = 0; k < 4; k++) {
		transpose([mat]);
		let arr = k % 2 == 0 ? digest_arr : rand;
		for (let i = x; i < y; i++) {
			// even itr or the ones with digest arr we rotate clock wise
			// odd or the ones with random arr we rotate anti clock wise

			let f_half = k % 2 == 0 ? mat[i].slice(-arr[i]) : mat[i].slice(arr[i]);
			let s_half = k % 2 == 0 ? mat[i].slice(0, 26 - arr[i]) : mat[i].slice(0, arr[i]);
			mat[i] = f_half.concat(s_half);
		}
		if (k == 1) {
			(x = 13), (y = 26);
		}
	}
}

export const getHash = (email) => {
	fillMatrix();
	let digest = cleanEmail(email);
	setMatrix(digest);
	let hash = '';
	for (var i = 0; i < 26; i++) {
		for (var j = 0; j < 26; j++) {
			if (i === 0) hash += String.fromCharCode(mat[i][j] + 96);
			else if (i === 25) hash += String.fromCharCode(mat[i][j] + 96);
			else if (j === 0) hash += String.fromCharCode(mat[i][j] + 96);
			else if (j === 25) hash += String.fromCharCode(mat[i][j] + 96);
		}
	}
	mat = [];
	return hash;
};
