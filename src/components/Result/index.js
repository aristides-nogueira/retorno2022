import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import { format } from 'date-fns';
import firebase from '../../config/firebase';

const db = firebase.firestore();

const Result = ({
  name,
  classes,
  birthDate
}) => {
  const [ student, setStudent ] = useState(null);

  useEffect(() => {
    const key = `${name.toLowerCase().split(" ").join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}${format(birthDate,'dMyyyy')}`;
    console.log(key);
    db.collection('retorno').doc(key).get().then((user) => {
      setStudent(user.data());
    })
  }, []);

  if (!student) {
    return null;
  }

  return (
    <div className={classes.result}>
      <p><b>Dados do aluno</b></p> <br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Nome:</b> {student.name} </div><br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Código eol do aluno:</b> {student.code} </div><br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Período:</b> {student.period} </div><br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Turma:</b> {student.group} </div><br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Sala:</b> {student.sala} </div><br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Horário de aula:</b> {student.enterat} </div><br />
      <div style={{ display: 'flex' }}><b style={{ paddingRight: 10 }}>Professora(s):</b> {student.teachers} </div><br /> <br />

      <p><b>Olá, família!!!</b></p> <br />
      <p>Mais um ano se inicia!! Nossa equipe  deseja boas vindas a todos!!</p> <br />
      <p>As aulas já  vão  começar, mas primeiro precisamos passar algumas informações sobre o nosso trabalho, sobre a rotina, organização, informes gerais e conversar sobre os  protocolos de saúde.</p> <br />
      <p>Então, marcamos uma reunião aqui na unidade com as famílias.</p> <br />

      🗓️🕒 Data e horário: {student.parentreuniondate} <br />
      ⚠️ Atenção ⚠️: Também  faremos a entrega do crachá  de identificação e de saída. <br />
      <br />
      <p>Sua presença é muito importante!!!</p> <br />
      <p>Obs: Ainda estamos em pandemia.</p> <br />
      <p>Compareça a unidade apenas um adulto por criança. </p> <br />
      <p>Não esquecer a máscara.</p> <br />

      🎒📝 Itens que devem estar na mochila da criança: <br />
      ➡️ Caneca (copo); <br />
      ➡️ Máscara - mínimo 3; <br />
      ➡️ Estojo - para os materiais que serão adquiridos com o VOUCHER disponibilizado pela Prefeitura (A escola ainda está aguardando mais informações da Prefeitura, para a aquisição dos itens em 2022); <br />
      ➡️ 1 troca de roupa (de acordo com a temperatura); <br />
      ➡️ (Foi solicitado uma pasta plástica para colocar o caderno e entregar no dia da reunião para a professora.) <br />

      <p><b>Lembre-se:</b></p> <br />
      <div>
        Solicitamos gentilmente para que sempre mantenha os números de telefone atualizados conosco e o número da escola (11) 5528-1873 sempre salvo na agenda dos celulares da família, para que possa receber os recados em nossa lista de transmissão.
      </div>
      <div>
        <p><b>‼️ ATENÇÃO ‼️ Se não salvar o número na agenda do celular, não receberá os comunicados.</b></p>
      </div>

      <br />
      <br />
    </div>
  );
}

export default withStyles(style)(Result);
