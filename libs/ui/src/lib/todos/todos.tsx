import React from 'react';

import './todos.module.css';
import { Todo } from '@my-first-nx-app/data';

/* eslint-disable-next-line */
export interface TodosProps {
}

export function Todos(props: { todos: Todo[ ] }) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'} key={t.title}>
          {t.title}!
          {/*  exclamation is the change*/}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
