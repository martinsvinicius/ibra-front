import { useLanguage } from '../../hooks/useLanguage';
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
  const { language } = useLanguage();

  const isEnglish = language === 'en';

  return (
    <Container>
      <thead>
        <tr>
          <th>{isEnglish ? 'Comment' : 'Comentário'}</th>
          <th>{isEnglish ? 'Privacy invasion ' : 'Invasão à privacidade'}</th>
          <th>
            {isEnglish ? 'Level of public figure' : 'Nível de figura pública'}
          </th>
          <th>{isEnglish ? 'Public interest' : 'Interesse Público'}</th>
          <th>{isEnglish ? 'Final score' : 'Pontuação Total'}</th>
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
                pointsDescription="TESTE"
              />
            </td>
            <td>
              <CommentStatusItem
                points={item.status.publicFigure.score}
                boxColor={'#0096D8'}
                pointsDescription="TESTE"
              />
            </td>
            <td>
              <CommentStatusItem
                points={item.status.publicInterest.score}
                boxColor={'#2E70AA'}
                pointsDescription="TESTE"
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

              <p className="commentJustification">
                {isEnglish
                  ? `The comment has been removed as it isn't about a public figure and it invades privacy`
                  : item.commentJustification}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
