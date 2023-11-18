import axios, { Method } from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface IUseAxios {
  url: string
  method: Method
}

interface IUseAxiosResponse<T> {
  data: null | T
  error: Error | null
  isLoading: boolean
  refetch: () => Promise<void>
}

export const useAxios = <T,>({
  url,
  method,
}: IUseAxios): IUseAxiosResponse<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<T | null>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await axios({ url, method })
      setData(response.data)
    } catch (err) {
      setError(err as Error)
    }

    setIsLoading(false)
  }, [url, method])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  console.log('Data', data)

  return {
    data,
    error,
    isLoading,
    refetch: fetchData,
  }
}
