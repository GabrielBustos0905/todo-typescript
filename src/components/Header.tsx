import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>Todo
            <img style={{ width: '60px', height: 'auto', margin: '0 10px' }} src="https://imgs.search.brave.com/puUb6mDA1KL3iBG8IxbjGDx5vJC7ZVCYfd2iDymWQCY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL1R5/cGVzY3JpcHRfbG9n/b18yMDIwLnN2Zy81/MTJweC1UeXBlc2Ny/aXB0X2xvZ29fMjAy/MC5zdmcucG5n" alt="" />
            </h1>

            <CreateTodo saveTodo={onAddTodo}/>
        </header>
  )
}
