//The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.

loop1:
for (let i = 0; i < 5; i++) {
  loop2:
  for(let j=0;j<5;j++)
  {
    console.log(i,j)
    if(i==j)
    {
      continue loop1
    }
  }
}