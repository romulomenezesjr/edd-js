function Pessoa(){
    this.idade = 0;
  
    setInterval(() => {
      this.idade++; // propriedade |this|refere ao objeto pessoa
    }, 100);
  }
  
  var p = new Pessoa();
  console.log(p)