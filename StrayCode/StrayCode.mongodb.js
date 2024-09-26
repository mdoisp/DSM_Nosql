use('StrayCode');

db.Usuario.insertMany([
  {
    login: "usuario123",
    senha: "senhaSegura",
    nome: "Maria da Silva",
    cpf: "98765432100",
    email: "maria@email.com",
    questionario: ObjectId()
  },
  {
    login: "usuario456",
    senha: "outraSenha",
    nome: "João dos Santos",
    cpf: "12345678901",
    email: "joao@email.com",
    questionario: ObjectId()
  }
]);

db.CNAE.insertOne({
  numeroCNAE: 123456,
  descricaoCNAE: "Comércio varejista de alimentos",
  ramoEmpresa: ObjectId()
});

db.Questionario.insertOne({
  dataQuestionario: new Date(),
  cnae: ObjectId()
});

db.RamoEmpresa.insertOne({
  secao: "A",
  descricao: "Agricultura, Pecuária, Produção Florestal, Pesca e Aquicultura",
  tipoEmpresa: ObjectId()
});

db.TipoEmpresa.insertOne({
  tipoEmpresa: "Microempresa",
  notaFiscal: ObjectId()
});

db.NotaFiscal.insertOne({
    informacoesPagina: "Detalhes sobre emissão de nota fiscal"
});
