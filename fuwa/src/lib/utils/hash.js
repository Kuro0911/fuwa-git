let mat = [];
let rand = [
	11, 14, 25, 1, 6, 10, 17, 20, 2, 13, 9, 22, 3, 26, 13, 14, 1, 7, 12, 11, 15, 21, 10, 24, 3, 8
];
function fillMatrix() {
	let a = 97,
		z = 26 + 96;
	for (let i = a; i <= z; i++) {
		let col = [];
		for (let j = i; j <= z; j++) {
			col.push(String.fromCharCode(j));
		}
		for (let j = a; j < i; j++) {
			col.push(String.fromCharCode(j));
		}
		mat.push(col);
	}
}
function cleanEmail(email) {
	let new_email = email.replace('@gmail.com', '');
	new_email = new_email.replace(/[^a-zA-Z]/gi, '');
	return new_email.toLowerCase();
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
	return matrix.map((col, i) => matrix.map((row) => row[i]));
}

function setMatrix(digest) {
	let digest_arr = getDigestArray(digest);
	for (let k = 0; k < 4; k++) {
		mat = transpose(mat);
		let arr = k === 0 || k === 3 ? digest_arr : rand;
		for (let i = k === 0 || k === 3 ? 0 : 1; i < 26; i++) {
			let f_half = k === 1 || k === 2 ? mat[i].slice(-arr[i]) : mat[i].slice(arr[i]);
			let s_half = k === 1 || k === 2 ? mat[i].slice(0, 26 - arr[i]) : mat[i].slice(0, arr[i]);
			mat[i] = f_half.concat(s_half);
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
			if (i === 0) hash += mat[i][j];
			else if (i === 25) hash += mat[i][j];
			else if (j === 0) hash += mat[i][j];
			else if (j === 25) hash += mat[i][j];
		}
	}
	mat = [];
	return hash;
};
