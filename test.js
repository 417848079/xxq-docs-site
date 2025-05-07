function main(){
  console.log(test())
}

function test(){
  try{
    let a= null
    a=a.charAt(1)
    console.log(1)
    return 4
  }catch(e){
    console.log(2)
    return 5
  }finally{
    console.log(3);
    // return 6
  }
}

main() // 输出：2 3 6
// 如果finally块中有return语句，则finally块中的return语句会覆盖try-catch块中的return语句