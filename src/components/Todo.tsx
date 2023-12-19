import { useState, type ChangeEvent, useRef, useEffect } from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  updateTitle: ({ id, title }: Pick<TodoType, 'id' | 'title'>) => void
  isEditing: string
  setIsEditing: (completed: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted, updateTitle, isEditing, setIsEditing }) => {
  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({ id, completed: event.target.checked })
  }

  const [editTitle, setEditTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event): void => {
    if (event.key === 'Enter') {
      setEditTitle(editTitle.trim())

      if (editTitle !== title) {
        updateTitle({ id, title: editTitle })
      }

      if (editTitle === '') handleRemove({ id })

      setIsEditing('')
    }

    if (event.key === 'Escape') {
      setEditTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
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

        <input
          type="text"
          className='edit'
          value={editTitle}
          onChange={(event) => { setEditTitle(event.target.value) }}
          onKeyDown={handleKeyDown}
          onBlur={() => { setIsEditing('') }}
          ref={inputEditTitle}
        />
    </>
  )
}
