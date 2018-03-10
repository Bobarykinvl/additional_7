module.exports = function solveSudoku(matrix) {
	var lengthArr = 9;
	var arrCheck = new Array();
	var arrCheck2 = new Array();
	var boxAmount = 3;
    var exampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var r = 0; r < lengthArr; r++) {
        for (var c = 0; c < lengthArr; c++) {
			
            if (!matrix[r][c]) {
				
                var iRoW = Math.floor(r / boxAmount) * boxAmount;
                var iCol = Math.floor(c / boxAmount) * boxAmount;
				
				matrix.map(function(item, index){
					arrCheck.push(matrix[iRoW + index % boxAmount][iCol + Math.floor(index / boxAmount)])
                    arrCheck.push(matrix[r][index])
                    arrCheck.push(matrix[index][c])
				});
				var filteredArr = exampleArr.filter(function(i){
					return (arrCheck.indexOf(i) < 0);
				})
//				console.log('possible: ',possible);
                for (var i = 0; i < filteredArr.length; i++) {
                    matrix[r][c] = filteredArr[i];
                    if (solveSudoku(matrix))
						return solveSudoku(matrix);
				}
                matrix[r][c] = 0;
                return false;
           }
      }
    }
	console.log(matrix);
    return matrix;
}

