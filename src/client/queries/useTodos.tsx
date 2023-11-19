import axios from 'axios'
import { useQuery } from 'react-query'

interface ITodos {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useTodos = () => {
  const queryKey = 'useTodos'

  const getTodos = async () => {
    const response = await axios.get<ITodos[]>(
      'https://jsonplaceholder.typicode.com/todos'
    )

    return response.data
  }

  const { data, isError, isLoading, error } = useQuery(queryKey, getTodos)

  return { data, isError, isLoading, error }
}
