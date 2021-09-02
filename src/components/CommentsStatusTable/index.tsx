import { Status } from '../../pages/get-started';
import { CommentStatusItem } from '../CommentStatusItem';
import { Container } from './styles';

interface CommentsStatusTableProps {
  data: {
    comment: string;
    status: Status;
    commentJustification: string;
  }[];
}

export function CommentsStatusTable({ data }: CommentsStatusTableProps) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Comentário</th>
          <th>Invasão à privacidade</th>
          <th>Nível de figura pública</th>
          <th>Interesse Público</th>
          <th>Pontuação Total</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.comment.charAt(9) + Math.random()}>
            <td className="comment">{item.comment}</td>
            <td>
              <CommentStatusItem
                points={item.status.privacyInvasion.score}
                boxColor={'#8FDAE4'}
                pointsDescription='TESTE'
              />
            </td>
            <td>
              <CommentStatusItem
                points={item.status.publicFigure.score}
                boxColor={'#0096D8'}
                pointsDescription='TESTE'
              />
            </td>
            <td>
              <CommentStatusItem
                points={item.status.publicInterest.score}
                boxColor={'#2E70AA'}
                pointsDescription='TESTE'
              />
            </td>
            <td>
              <CommentStatusItem
                points={
                  item.status.privacyInvasion.score +
                  item.status.publicFigure.score +
                  item.status.publicInterest.score
                }
                boxColor={'#3EAEE0'}
                pointsDescription="@USER"
              />

              <p className="commentJustification">{item.commentJustification}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
