function makeItem(title, price, imgURL) {
	return {
		title,
		price,
		imgURL
	}
}

let itemList = [makeItem("Shoes", 10, "/test.png"), ...]

const display = document.querySelector(...);

for (let i = 0; i < itemList.length, i++) {
	display.innerHTML += `
	<img src="${itemList[i].imgURL} />
	`
}
// Luu tat ca trong 1 cai shop item trong 1 Array
// Khi load trang render ra tu trong cai Array
// Them 3 truong input (HTML) la title, imgUrl, price va 1 nut "Add".
// Khi an nut "Add" neu ma co day du 3 thong tin thi se add 1 object vao mang chua cai items
// Va update o UI.
// Luu y la UI cho dep