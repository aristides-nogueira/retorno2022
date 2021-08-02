import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import { format } from 'date-fns';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Feedback from '../Feedback';
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
    db.collection('retorno').doc(key).get().then((user) => {
      setStudent(user.data());
    })
  }, []);

  if (!student) {
    return null;
  }

  const studentClass = student.week.includes('DOURADA') ? classes.gold : classes.silver;

  return (
    <div className={classes.result}>
      <p><b>Dados do aluno</b></p> <br />
      Código eol do aluno: {student.code} <br />
      Período: {student.period} <br />
      Turma: {student.group} <br />
      Horário de aula: {student.enterat} <br /> <br />

      <p><b>Reunião presencial</b></p> <br />
      🗓️🕒 Data e horário: {student.parentreuniondate} <br />
      ⚠️ Atenção ⚠️: na reunião será entregue os crachás e carteirinhas pela professora e também será dada todas as orientações sobre os protocolos de saúde que deverão ser seguidos. <br />
      <br />
      🎒📝 Itens que devem estar na mochila da criança: <br />
      ➡️ Caneca (copo); <br />
      ➡️ Máscara - mínimo 3; <br />
      ➡️ Estojo - com os materiais que foram adquiridos com o VOUCHER disponibilizado pela Prefeitura; <br />
      ➡️ 1 troca de roupa (de acordo com a temperatura); <br />
      ➡️ (Foi solicitado uma pasta plástica para colocar o caderno e entregar no dia da reunião para a professora.) <br />


      <p><b>❗ O retorno da criança será com revezamento semanal. ❗</b></p> <br />
      <div>
        As crianças com crachá da turma <b className={classes.gold}>semana dourada</b> virão na primeira semana, as da turma <b className={classes.silver}>semana prateada</b> na segunda e assim sucessivamente.
      </div>
      <div>
        <p>Sua criança está no grupo <b className={studentClass}>{student.week}</b></p>
      </div>

      Dessa forma, a criança deverá frequentar as aulas apenas nas semanas das respectivas segundas-feiras: <br />
      <ul>
        <li>➡️ {student['sem 1']}</li>
        <li>➡️ {student['sem 2']}</li>
        <li>➡️ {student['sem 3']}</li>
        <li>➡️ {student['sem 4']}</li>
        <li>➡️ {student['sem 5']}</li>
        <li>➡️ {student['sem 6']}</li>
        <li>➡️ {student['sem 7']}</li>
        <li>➡️ {student['sem 8']}</li>
        <li>➡️ {student['sem 9']}</li>
        {
          student['sem 10'] && <li>➡️ {student['sem 10']}</li>
        }
      </ul>
 <br />
      <b>Não se sente seguro no retorno?</b> <br />
      <div>
        O <b>retorno presencial não é obrigatório</b>, quem desejar permanecer no remoto, basta o responsável legal (mãe, pai ou quem possui a guarda) comparecer na secretaria preferencialmente das 10h às 12h ou das 14h às 16h para preencher o formulário de preferência no remoto. <br />
      </div>
 <br />
 <br />
      Qualquer dúvida, nos ligue no telefone fixo 11 5528-1873!
      <br />
      <br />
    </div>
  );
}

export default withStyles(style)(Result);
