function createTable() {
    //Write your code here
	const table=document.getElementById("myTable");

	const rn=Number(prompt("Input numbers of rows"))
	const cn=Number(prompt("Input numbers of columns"))

	for(let i=0;i<rn;i++){
		let row=document.createElement("tr")
		for(let j=0;j<cn;j++){
			let cell=document.createElement("td");
			cell.innerText=`Row-${i} Column-${j}`
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
  
}
