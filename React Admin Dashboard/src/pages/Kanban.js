import React from 'react';
import Board from 'react-trello';

const Kanban = () => {
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'To Do',
        cards: [
          { id: 'Card1', title: 'Card1', description: 'Task 1' },
        ],
      },
      {
        id: 'lane2',
        title: 'In Progress',
        cards: [
          { id: 'Card2', title: 'Card2', description: 'Task 2' },
        ],
      },
      {
        id: 'lane3',
        title: 'Completed',
        cards: [
          { id: 'Card3', title: 'Card3', description: 'Task 3' },
        ],
      },
    ],
  };

  return (
    <Board data={data} />
  );
};

export default Kanban;