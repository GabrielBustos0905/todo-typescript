import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: input })
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            className='new-todo'
            value={input}
            onChange={(event) => { setInput(event.target.value) }}
            placeholder='Agrega una Tarea :D'
            autoFocus
        />
    </form>
  )
}
