import { useAxios } from './hooks'

interface IData {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {
  const { data, isLoading } = useAxios<IData[]>({
    url: 'https://jsonplaceholder.typicode.com/todos/',
    method: 'GET',
  })

  return (
    <>
      <h1>Hello World</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((item) => {
            return <li key={item.id}> {item.title} </li>
          })}
        </ul>
      )}
    </>
  )
}

export default App
