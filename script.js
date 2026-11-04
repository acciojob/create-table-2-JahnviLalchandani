function createTable() {
    //Write your code here
	const table=document.getElementById("myTable");
 const rnInput = prompt("Input number of rows");
    const cnInput = prompt("Input number of columns");

    // Check if input is empty or not a valid number
    if (rnInput === null || rnInput.trim() === "" ||
        cnInput === null || cnInput.trim() === "" ||
        isNaN(rnInput) || isNaN(cnInput)) {

        alert("Please enter valid numbers");
        return;
    }

    const rn = Number(rnInput);
    const cn = Number(cnInput);

    // Check for zero or negative numbers
    if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than zero");
        return;
    }

    // Check for decimal numbers
    if (!Number.isInteger(rn) || !Number.isInteger(cn)) {
        alert("Please enter whole numbers only");
        return;
    }


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
