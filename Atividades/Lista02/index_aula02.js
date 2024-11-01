const express = require("express");
const app = express();
//usando o body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
////////////////////////////////////////////////////////////////////////////////////

//simulando um banco de dados
let escola = [
    {
        ra: "1",
        nome: "João",
        disciplinas: [
            { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
            { codigo: "POR101", nome: "Português", professor: "Prof. João" },
            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
        ],
    },
    {
        ra: "2",
        nome: "Maria",
        disciplinas: [
            { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },
            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
        ],
    },
    {
        ra: "3",
        nome: "Pedro",
        disciplinas: [
            { codigo: "CIE101", nome: "Ciências", professor: "Prof. João" },
            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },
            { codigo: "POR101", nome: "Português", professor: "Prof. João" },
            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },
            {
                codigo: "EDF101",
                nome: "Educação Física",
                professor: "Prof. Carlos",
            },
        ],
    },
];

////////////////////////////////////////////////////////////////////////////////////////////
//01
//retornando todos os alunos - GET -- http://localhost:3200/escola
app.get("/escola", (req, res) => {
    res.json(escola);
});

//02
//retornando aluno pelo id - GET -- http://localhost:3200/escola/3
app.get("/escola/:ra", (req, res) => {
    let ra = req.params.ra;
    let aluno = escola.find((aluno) => aluno.ra == ra);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).send("Aluno não encontrado");
    }
});

//03
//mostrar disciplinas do aluno - GET -- http://localhost:3200/aluno/3/disciplina
app.get("/aluno/:ra/disciplina", (req, res) => {
    let ra = req.params.ra;
    let aluno = escola.find((aluno) => aluno.ra == ra);
    if (aluno) {
        res.json(aluno.disciplinas);
    }
});

//04
//adicionar disciplina - POST -- http://localhost:3200/aluno/3/disciplina
app.post("/aluno/:ra/disciplina", (req, res) => {
    const ra = req.params.ra;
    const novaDisciplina = req.body;
    const aluno = escola.find((aluno) => aluno.ra === ra);
    if (aluno) {
        aluno.disciplinas.push(novaDisciplina);
        res.status(200).json({
            disciplinasAtualizadas: aluno.disciplinas,
        });
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
});

//05
//atualização do aluno - PUT -- http://localhost:3200/escola/3
app.put("/escola/:ra", (req, res) => {
    let ra = req.params.ra;
    let aluno = req.body;
    let index = escola.findIndex((aluno) => aluno.ra == ra);
    if (index >= 0) {
        escola[index] = aluno;
        res.json(aluno);
    } else {
        res.status(404).send("Aluno não encontrado");
    }
});

////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3200, () => {
    console.log("Servidor rodando na porta 3000");
});
