import { useState } from 'react'
import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  todos: ListOfTodos
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  updateTitle: ({ id, title }: Pick<TodoType, 'id' | 'title'>) => void
}

export const Todos: React.FC<Props> = ({ todos, handleRemove, handleCompleted, updateTitle }) => {
  const [isEditing, setIsEditing] = useState('')
  const [parent] = useAutoAnimate()

  return (
    <ul className='todo-list' ref={parent}>
        {
            todos.map(todo => (
                <li
                  key={todo.id}
                  onDoubleClick={() => { setIsEditing(todo.id) }}
                  className={`
                    ${todo.completed ? 'completed' : ''}
                    ${isEditing === todo.id ? 'editing' : ''}
                  `}
                >
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      handleRemove={handleRemove}
                      handleCompleted={handleCompleted}
                      updateTitle={updateTitle}
                      isEditing={isEditing}
                      setIsEditing={setIsEditing}
                    />
                </li>
            ))
        }
    </ul>
  )
}
