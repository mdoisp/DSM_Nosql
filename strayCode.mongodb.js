use('strayCode')

db.tipoEmpresa.insertMany([
    {
        id:1,
        tipoEmpresa:"Comércio",
        descrição:"Empresas que compram e vendem produtos. Isso pode incluir varejistas, atacadistas e empresas de comércio eletrônico."
    },
    {
        id:2,
        tipoEmpresa:"Serviços",
        descrição:"Empresas que oferecem serviços em vez de produtos tangíveis. Isso pode incluir empresas de consultoria, de tecnologia da informação, de saúde, de educação, de transporte, entre outras."
    },
    {
        id:3,
        tipoEmpresa:"Indústria",
        descrição:"Empresas que fabricam produtos físicos. Isso pode incluir indústrias de manufatura, de construção, de energia, entre outras."
    }
])

db.notaFiscal.insertMany([
    {
        id:1,
        tiposNota:"NF-e (Nota Fiscal Eletrônica de Produtos ou Mercadorias)",
        descricao:"Esse documento substitui o modelo tradicional. É a versão digital, emitida e armazenada eletronicamente. Limita-se a registrar a venda de produtos físicos, com cobrança de ICMS (Imposto sobre Circulação de Mercadoria Serviços) e IPI (Imposto sobre Produtos Industrializados) e deve ser expedida junto às Secretarias Estaduais da Fazenda. Utilizada sempre em casos de circulação de mercadorias, geralmente, este tipo de nota fiscal é utilizado entre pessoas jurídicas. Ao emitir a NF-e para o comprador, para atestar a operação, a empresa deve enviar um Documento Auxiliar da Nota Fiscal (DANFE) com o produto.",
        tipoEmpresa:[1]
    },
    {
        id:2,
        tiposNota:"NFS-e (Nota Fiscal Eletrônica de Serviços)",
        descricao:"Esse documento substitui o modelo tradicional. É a versão digital, emitida e armazenada eletronicamente. Limita-se a registrar a venda de produtos físicos, com cobrança de ICMS (Imposto sobre Circulação de Mercadoria Serviços) e IPI (Imposto sobre Produtos Industrializados) e deve ser expedida junto às Secretarias Estaduais da Fazenda. Utilizada sempre em casos de circulação de mercadorias, geralmente, este tipo de nota fiscal é utilizado entre pessoas jurídicas. Ao emitir a NF-e para o comprador, para atestar a operação, a empresa deve enviar um Documento Auxiliar da Nota Fiscal (DANFE) com o produto.",
        tipoEmpresa:[2]
    }
])

db.ramoEmpresa.insertMany([
    {
        id:1,
        secao:"A",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"AGRICULTURA, PECUÁRIA E SERVIÇOS RELACIONADOS"
    },
    {
        id:2,
        secao:"A",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"PRODUÇÃO FLORESTAL"
    },
    {
        id:3,
        secao:"B",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"EXTRAÇÃO DE CARVÃO MINERAL"
    },
    {
        id:4,
        secao:"B",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"EXTRAÇÃO DE MINERAIS METÁLICOS"
    },
    {
        id:5,
        secao:"E",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA"
    },
    {
        id:6,
        secao:"E",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"COLETA, TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS; RECUPERAÇÃO DE MATERIAIS"
    },
    {
        id:7,
        secao:"G",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"COMÉRCIO E REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS"
    },
    {
        id:8,
        secao:"G",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"COMÉRCIO POR ATACADO, EXCETO VEÍCULOS AUTOMOTORES E MOTOCICLETAS"
    },
    {
        id:9,
        secao:"H",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"TRANSPORTE TERRESTRE"
    },
    {
        id:10,
        secao:"H",
        tipoEmpresa:[3],
        nomeRamoEmpresa:"TRANSPORTE AQUAVIÁRIO"
    }
])

db.cnae.insertMany([
    {
        id: 1,
        numeroCnae: "0113-0/00",
        descricao: "Cultivo de cana-de-açúcar",
        ramoEmpresa: [2],
        tributacao: []
    },
    {
        id: 2,
        numeroCnae: "0131-8/00",
        descricao: "Cultivo de laranja",
        ramoEmpresa: [2],
        tributacao: []
    },
    {
        id: 3,
        numeroCnae: "0210-1/01",
        descricao: "Cultivo de eucalipto",
        ramoEmpresa: [3],
        tributacao: []
    },
    {
        id: 4,
        numeroCnae: "0220-9/04",
        descricao: "Coleta de látex em florestas nativas",
        ramoEmpresa: [3],
        tributacao: []
    },
    {
        id: 5,
        numeroCnae: "0500-3/01",
        descricao: "Extração de carvão mineral",
        ramoEmpresa: [4],
        tributacao: []
    },
    {
        id: 6,
        numeroCnae: "0710-3/01",
        descricao: "Extração de minério de ferro",
        ramoEmpresa: [5],
        tributacao: []
    },
    {
        id: 7,
        numeroCnae: "0721-9/01",
        descricao: "Extração de minério de alumínio",
        ramoEmpresa: [5],
        tributacao: []
    },
    {
        id: 8,
        numeroCnae: "3600-6/01",
        descricao: "Captação, tratamento e distribuição de água",
        ramoEmpresa: [6],
        tributacao: []
    },
    {
        id: 9,
        numeroCnae: "3600-6/02",
        descricao: "Distribuição de água por caminhões",
        ramoEmpresa: [6],
        tributacao: []
    },
    {
        id: 10,
        numeroCnae: "3811-4/00",
        descricao: "Coleta de resíduos não perigosos",
        ramoEmpresa: [7],
        tributacao: []
    },
    {
        id: 11,
        numeroCnae: "3900-5/00",
        descricao: "Descontaminação e outros serviços de gestão de resíduos",
        ramoEmpresa: [7],
        tributacao: []
    },
    {
        id: 12,
        numeroCnae: "4511-1/01",
        descricao: "Comércio a varejo de automóveis, camionetas e utilitários novos",
        ramoEmpresa: [8],
        tributacao: []
    },
    {
        id: 13,
        numeroCnae: "4512-9/01",
        descricao: "Representantes comerciais e agentes do comércio de veículos automotores",
        ramoEmpresa: [8],
        tributacao: []
    },
    {
        id: 14,
        numeroCnae: "4611-7/00",
        descricao: "Representantes comerciais e agentes do comércio de matérias-primas agrícolas e animais vivos",
        ramoEmpresa: [9],
        tributacao: []
    },
    {
        id: 15,
        numeroCnae: "4621-4/00",
        descricao: "Comércio atacadista de café em grão",
        ramoEmpresa: [9],
        tributacao: []
    },
    {
        id: 16,
        numeroCnae: "4912-4/01",
        descricao: "Transporte ferroviário de passageiros intermunicipal e interestadual",
        ramoEmpresa: [10],
        tributacao: []
    },
    {
        id: 17,
        numeroCnae: "4923-0/01",
        descricao: "Serviço de táxi",
        ramoEmpresa: [10],
        tributacao: []
    },
    {
        id: 18,
        numeroCnae: "5011-4/02",
        descricao: "Transporte marítimo de cabotagem - Passageiros",
        ramoEmpresa: [11],
        tributacao: []
    },
    {
        id: 19,
        numeroCnae: "5011-4/01",
        descricao: "Transporte marítimo de cabotagem - Carga",
        ramoEmpresa: [11],
        tributacao: []
    }    
])

db.usuario.insertMany([
    {
        id:1,
        login: "usuario123",
        senha: "senhaSegura",
        nome: "Maria da Silva",
        cpf: "98765432100",
        email: "maria@email.com"
    },
    {
        id:2,
        login: "joao123",
        senha: "senhaSegura2",
        nome: "joão Almeida",
        cpf: "98765432101",
        email: "joao@email.com"
    },
    {
        id:3,
        login: "gabi123",
        senha: "senhaSegura3",
        nome: "Gabriela Silva",
        cpf: "98765432103",
        email: "gabi@email.com"
    },
    {
        id:2,
        login: "leticia123",
        senha: "senhaSegura4",
        nome: "Leticia Vasquez",
        cpf: "98765432105",
        email: "leticia@email.com"
    },
    {
        id:2,
        login: "fernando123",
        senha: "senhaSegura5",
        nome: "Fernando Scheut",
        cpf: "98765432107",
        email: "fernando@email.com"
    }
])

db.questionario.insertMany([
    {
        id: 1,
        dtQuestionario: "2024-09-23",
        cnae: [
                {
                    id: 18,
                    numeroCnae: "5011-4/02",
                    descricao: "Transporte marítimo de cabotagem - Passageiros",
                    ramoEmpresa: [11]
                },
                {
                    id: 19,
                    numeroCnae: "5011-4/01",
                    descricao: "Transporte marítimo de cabotagem - Carga",
                    ramoEmpresa: [11]
                }
            ],
        usuario: [1]
    },
    {
        id: 2,
        dtQuestionario: "2024-09-16",
        cnae: [
                {
                    id: 5,
                    numeroCnae: "'0500-3/01",
                    descricao: "Extração de carvão mineral",
                    ramoEmpresa: [4]
                }
            ],
        usuario: [2]
    },
    {
        id: 3,
        dtQuestionario: "2024-09-30",
        cnae: [
                {
                    id: 17,
                    numeroCnae: "4923-0/01",
                    descricao: "Serviço de táxi",
                    ramoEmpresa: [10]
                }
            ],
        usuario: [3]
    },
    {
        id: 4,
        dtQuestionario: "2024-09-30",
        cnae: [
                {
                    id: 12,
                    numeroCnae: "4511-1/01",
                    descricao: "Comércio a varejo de automóveis, camionetas e utilitários novos",
                    ramoEmpresa: [8]
                },
                {
                    id: 13,
                    numeroCnae: "4512-9/01",
                    descricao: "Representantes comerciais e agentes do comércio de veículos automotores",
                    ramoEmpresa: [8]
                }
            ],
        usuario: [4]
    },
    {
        id: 3,
        dtQuestionario: "2024-09-30",
        cnae: [
                {
                    id: 2,
                    numeroCnae: "0131-8/00",
                    descricao: "Cultivo de laranja",
                    ramoEmpresa: [2]
                }
            ],
        usuario: [5]
    }
])

db.tributacao.insertMany([
    {
        id: 1,
        tiposTributacao: "MEI",
        descricao: "O regime do MEI foi criado em 2008 para reduzir os níveis de informalidade, proporcionando aos empreendedores meios mais acessíveis de regularização fiscal. Para tanto, o MEI se apresenta de forma menos burocrática, tendo regras diferenciadas para o pagamento de impostos — IRPJ e CLSS, por exemplo, não entram no cálculo tributário dos microempreendedores individuais. Ainda sobre o pagamento de impostos, os valores de contribuição também são diferenciados no MEI: os cadastrados pagam mensalmente um valor de até R$ 60,60 — de acordo com a atividade exercida. Para que possam se enquadrar neste regime tributário, os empresários devem ter um faturamento bruto anual de até R$ 81 mil e não possuir sócios. Atendendo a esses requisitos, eles podem contar com uma série de benefícios, inclusive previdenciários, como: aposentadoria por idade, licença-maternidade, auxílio-doença, entre outros."
    },
    {
        id: 2,
        tiposTributacao: "Simples Nacional",
        descricao: ""
    },
    {
        id: 2,
        tiposTributacao: "Lucro Real",
        descricao: ""
    },
    {
        id: 2,
        tiposTributacao: "Lucro Presumido",
        descricao: ""
    }
])

/*db.abrirEmpresa.insertMany([
    {
        id: 1,
        formasAbirEmpresa: "",
        descricao: "",
        tributacao: []
    },
])

db.escolherContabilidade.insertMany([
    {
        id: 1,
        escritorioContador: "",
        descricao: "",
        tributacao: []
    }
])
*/
