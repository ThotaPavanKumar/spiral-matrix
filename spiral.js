

let M = 4 , N = 4;
let arr = [[1,2,3,4],[5,6,7,8],[0,1,2,3],[4,5,6,7]];

function spiralTraversal(N, M, arr){
  
  let count = 0;
  let top = 0;
  let bottom = N-1;
  let right = M-1;
  let left = 0;
  let str = "";

  while(count < N * M){
      
      for(let i = top;i <= bottom && count < N * M; i++){
          str = str + arr[i][left]+" ";
          count++;
      }
      
      left++; 
      
      for(let i = left; i <= right && count < N * M; i++){
          str = str + arr[bottom][i] +" ";
          count++;
      }
      
      bottom--;
      
      for(let i = bottom; i >= top  && count < N * M; i--){
          str = str + arr[i][right] +" ";
          count++;
      }
      right--;
      
      for(let i = right; i >= left && count < N * M; i--){
          str = str + arr[top][i] + " ";
          count++;
      }
      top++;
  }
  console.log(str);
  
}

spiralTraversal(N, M, arr)