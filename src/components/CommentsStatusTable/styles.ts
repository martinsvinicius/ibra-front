import styled from 'styled-components';
import { CommentStatusItem } from '../CommentStatusItem';

export const Container = styled.table`
  width: 90%;
  margin: 0 auto;
  max-height: 500px;
  overflow: auto !important;
  table-layout: fixed;

  @media (max-width: 1164px) {
    display: block;
    border-collapse: collapse;
  }

  thead {
    border-bottom: 4px solid #3eaee0;
  }

  td {
    vertical-align: top;
  }

  th {
    color: #757575;
    font-weight: bold;
    font-size: 1.25rem;
  }

  td.comment {
    width: 200px;
    min-width: 200px;
    text-align: justify;
    font-weight: 400;
    color: #6b6975;
  }

  td {
    padding-top: 1.2rem;
  }

  th {
    padding-bottom: 0.8rem;
  }

  td + td,
  th + th {
    padding-left: 1.5rem;
  }

  p.commentJustification {
    color: var(--blue-active);
    font-weight: 500;
    margin-top: 1rem;
    text-align: justify;
  }
`;