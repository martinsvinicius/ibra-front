import CountUp from 'react-countup';

import { Container } from './styles';

interface CommentStatusItemProps {
  title: string;
  points: number;
  pointsDescription: string;
  boxColor: string;
  isLarge?: boolean;
}

export function CommentStatusItem({ title, points, pointsDescription, boxColor, isLarge }: CommentStatusItemProps) {
  return (
    <Container className="statusItem">
      <span>{`${title}:`}</span>
      <div
        style={
          isLarge
            ? { backgroundColor: boxColor, fontSize: '1.9rem' }
            : { backgroundColor: boxColor }
        }
        className={isLarge ? 'large' : 'default'}
      >
        <span style={isLarge ? { fontSize: '3rem' } : {}}>
          <CountUp start={0} end={points} duration={1} />
        </span>
        {pointsDescription}
      </div>
    </Container>
  );
}
