import { Status } from '../../pages/get-started';
import { Content } from '../../styles/pages/product';
import { CommentsStatusTable } from '../CommentsStatusTable';
import { CommentStatusItem } from '../CommentStatusItem';
import { ConsultComment } from '../ConsultComment';
import { UploadFile } from '../UploadFile';

interface PortugueseCommentStatusProps {
  status: Status | null;
  handleSubmit: (e: any) => any;
  handleChangeInputType: () => any;
  textOrCsv: 'text' | 'csv';
}

export function PortugueseCommentStatus({
  status,
  handleSubmit,
  textOrCsv,
  handleChangeInputType,
}: PortugueseCommentStatusProps) {
  const dataToTable = [
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: status as Status,
      commentJustification: 'Comentário removido pois não se trata de um figura pública e há invasão a privacidade.',
    },
  ];

  return (
    <Content>
      <div className="comment">
        <h1>
          Nós existimos para <span className="blue-200">proteger</span> sua
          empresa e <span className="blue-active">seus clientes</span>
        </h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          {textOrCsv === 'text' ? <ConsultComment /> : <UploadFile />}
          <label htmlFor="" onClick={handleChangeInputType} className="inputLabel">
            {textOrCsv === 'text' ? (
              <>Clique <strong>aqui</strong> para enviar mais de um comentário em <strong>.CSV</strong></>
            ) : (
              <>
                Clique <strong>aqui</strong> para enviar apenas um comentário.
              </>
            )}
          </label>
        </form>
      </div>

      {!status && (
        <div className="commentStatus">
          <p id="emptyData">Envie um comentário ou um arquivo .CSV para ver como funciona.</p>
        </div>
      )}

      {status && textOrCsv === 'text' && (
        <div className="commentStatus">
          <div className="statusPoints">
            <CommentStatusItem
              title="Invasão à privacidade"
              points={status.privacyInvasion.score}
              pointsDescription={status.privacyInvasion.title}
              boxColor="#8fdae4"
            />
            <CommentStatusItem
              title="Nível de figura pública"
              points={status.publicFigure.score}
              pointsDescription={status.publicFigure.title}
              boxColor="#0096D8"
            />
            <CommentStatusItem
              title="Interesse Público"
              points={status.publicInterest.score}
              pointsDescription={status.publicInterest.title}
              boxColor="#2E70AA"
            />
          </div>

          <div className="totalStatus">
            <CommentStatusItem
              title="Pontuação Total"
              points={
                status.privacyInvasion.score +
                status.publicFigure.score +
                status.publicInterest.score
              }
              pointsDescription="@USER"
              boxColor="#3EAEE0"
              isLarge={true}
            />

            <p>
              Comentário removido pois{' '}
              <span className="blue-active">
                não se trata de um figura pública e há invasão a privacidade.
              </span>
            </p>
          </div>
        </div>
      )}

      {status && textOrCsv === 'csv' && (
        <div className="commentStatus">
          <CommentsStatusTable data={dataToTable} />
        </div>
      )}
    </Content>
  );
}
