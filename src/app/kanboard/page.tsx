'use client'

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import './kanboard.scss';
import { Dropdown, Layout, Menu, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { FaPaperPlane } from 'react-icons/fa';

interface Task {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: string;
  amount: string;
  comments: string[];
}
interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

interface Data {
  tasks: { [key: string]: Task };
  columns: { [key: string]: Column };
  columnOrder: string[];
}

const initialData: Data = {
  tasks: {
    'task-1': { id: 'task-1', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active', amount: '₹ 10,000', comments: [] },
    'task-2': { id: 'task-2', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Inactive', amount: '₹ 10,000' , comments: []},
    'task-3': { id: 'task-3', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active', amount: '₹ 10,000', comments: [] },
    'task-4': { id: 'task-4', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active', amount: '₹ 10,000' , comments: []},
    'task-5': { id: 'task-5', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Inactive', amount: '₹ 10,000', comments: [] },
    'task-6': { id: 'task-6', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active', amount: '₹ 10,000', comments: [] },
    'task-7': { id: 'task-7', name: 'Jane Cooper', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active', amount: '₹ 10,000' , comments: []},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Demo Sent',
      taskIds: ['task-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Followup',
      taskIds: ['task-6', 'task-7'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Won',
      taskIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'Lost',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};

const KanbanBoard: React.FC = () => {
  const [data, setData] = useState<Data>(initialData);
  const [comment, setComment] = useState<{ [key: string]: string }>({});


  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newState);
  };

  const items = [
    {
      key: "1",
      label: "None",
    },
    {
      key: "2",
      label: "newest",
    },
    {
      key: "3",
      label: "oldest",
    },
    {
      key: "4",
      label: "Highest",
    },
    {
      key: "5",
      label: "Lowest",
    },
   
  ];

  const handleCommentChange = (taskId: string, value: string) => {
    setComment((prev) => ({ ...prev, [taskId]: value }));
  };

  const handleSendComment = (taskId: string) => {
    const newData = {
      ...data,
      tasks: {
        ...data.tasks,
        [taskId]: {
          ...data.tasks[taskId],
          comments: [...data.tasks[taskId].comments, comment[taskId] || ''],
        },
      },
    };
    setData(newData);
    setComment((prev) => ({ ...prev, [taskId]: '' }));
  };

  return (
    // < style={{display: 'flex', padding: '0px'}}>
    //    <div>
    //     <Layout hasSider={true}>
    //       <Sider
    //         theme="light"
    //         width={215}
    //         style={{
    //           height: "100vh",
    //         }}
    //       >
    //         <Menu style={{ padding: "24px" }} items={items} />
    //       </Sider>
    //     </Layout>
    //   </div>

      <div style={{display: 'flex', flexDirection:'column',padding: '0px 20px'}}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
     <div>
      <h1>Deals</h1>
      <p>Total 200 enteries</p>
     </div>
     <div style={{display: 'flex', gap: '5px'}}>
     <Dropdown menu={{ items }} placement="topRight">
          <Button>Sort By</Button>
        </Dropdown>
      <Button>
        Filter
      </Button>
     </div>
    </div>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanbanBoard">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="column"
                >
                  <h3 className="columnTitle">{column.title}</h3>
                  {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task"
                        >
                         <div className="taskDetail">
                          <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                            <div className='line1'>{task.name}</div>
                            <div className="line">{task.phone}</div>
                            <div className="line">{task.email}</div>
                            </div>
                            <div className='divv' style={{display: 'flex', justifyContent: 'space-between',}}>
                              <div>
                              <p>Status</p>
                            <p className="status" style={{background: '#00FFFF'}}>{task.status}</p></div>
                            <div>
                              <p>Est. Deposit</p>
                            
                            <p className='status'>{task.amount}</p>
                            </div>
                            </div>
                          </div>
                          <div className="taskFooter">
                            <div className="inputContainer">
                              <input
                                type="text"
                                value={comment[task.id] || ''}
                                onChange={(e) => handleCommentChange(task.id, e.target.value)}
                                placeholder="Comments..."
                                className="commentInput"
                              />
                              <button
                                onClick={() => handleSendComment(task.id)}
                                className="sendButton"
                              >
                                <FaPaperPlane />
                              </button>
                            </div>
                          </div>
                          </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
    </div>

  );
};

export default KanbanBoard;
