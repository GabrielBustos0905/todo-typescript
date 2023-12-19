import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount, filterSelected, handleFilterChange, onClearCompleted }) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount} tareas pendientes</strong>
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />

            {
                completedCount > 0 && (
                    <button
                        className='clear-completed'
                        onClick={onClearCompleted}
                    >
                        Clear completed
                    </button>
                )
            }
        </footer>
  )
}
