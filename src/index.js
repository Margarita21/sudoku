module.exports = function solveSudoku(matrix) {
	var kol;
	var f;
	var sum_str, sum_st;
	for(var i=0; i<9; i++){
		for( var j=0; j<9; j++){
		if(matrix[i][j]===0){
				f=0;
				kol=0;
				sum_str=0;
				sum_st=0;
				for(var i1=0; i1<9; i1++){
					if(matrix[i1][j]===0){
						kol=kol+1;
					}
					sum_str=sum_str+matrix[i1][j];
				}
				if(kol===1){
					matrix[i][j]=45-sum_str;
					f=1;
				}		
				if(f===0){
					kol=0;
					for(var j1=0; j1<9; j1++){
						if( matrix[i][j1]===0){
							kol=kol+1;
						}
						sum_st=sum_st+matrix[i][j1];
					}
					if(kol===1){
						matrix[i][j]=45-sum_st;
						f=1;
					}		
				}
			}	
		}		
	}
	for(var i=0; i<9; i++){
		for( var j=0; j<9; j++){
			
		}
	}
	return	matrix;
}



