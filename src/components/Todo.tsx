import { type ChangeEvent } from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted }) => {
  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({ id, completed: event.target.checked })
  }

  return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={handleCheckBox}
            />
            <label>{title}</label>
            <button className='destroy' onClick={() => { handleRemove({ id }) }} />
        </div>
  )
}
