import { Status } from '../../pages/get-started';
import { Content } from '../../styles/pages/product';
import { CommentStatusItem } from '../CommentStatusItem';
import { ConsultComment } from '../ConsultComment';
import { UploadFile } from '../UploadFile';

interface EnglishCommentStatusProps {
  status: Status | null;
  handleSubmit: (e: any) => any;
  handleChangeInputType: () => any;
  textOrCsv: 'text' | 'csv';
}

export function EnglishCommentStatus({
  status,
  handleSubmit,
  textOrCsv,
  handleChangeInputType
}: EnglishCommentStatusProps) {
  return (
    <Content>
      <div className="comment">
        <h1>
          We exist to <span className="blue-200">protect</span> your company and{' '}
          <span className="blue-active">your clients</span>
        </h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          {textOrCsv === 'text' ? <ConsultComment /> : <UploadFile />}
          <label htmlFor="" onClick={handleChangeInputType} className="inputLabel">
            {textOrCsv === 'text' ? (
              <>Click <strong>here</strong> to submit more comments with <strong>.csv</strong> files.</>
            ) : (
              <>
                Click <strong>here</strong> to submit a comment only.
              </>
            )}
          </label>
        </form>
      </div>

      {!status && (
        <div className="commentStatus">
          <h1>tem nada aq n</h1>
        </div>
      )}

      {status && (
        <div className="commentStatus">
          <div className="statusPoints">
            <CommentStatusItem
              title="Invasion of privacy"
              points={status.privacyInvasion.score}
              pointsDescription={status.privacyInvasion.title}
              boxColor="#8fdae4"
            />
            <CommentStatusItem
              title="Level of public figure"
              points={status.publicFigure.score}
              pointsDescription={status.publicFigure.title}
              boxColor="#0096D8"
            />
            <CommentStatusItem
              title="Public interest"
              points={status.publicInterest.score}
              pointsDescription={status.publicInterest.title}
              boxColor="#2E70AA"
            />
          </div>

          <div className="totalStatus">
            <CommentStatusItem
              title="Final score"
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
              The comment has been removed{' '}
              <span className="blue-active">
                as it isn't about a public figure and it invades privacy
              </span>
            </p>
          </div>
        </div>
      )}
    </Content>
  );
}
