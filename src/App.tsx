import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import AppRoutes from './AppRoutes';
import { getAccount } from './environments/functions';
import { LocalStorageService, TypeAccountService } from './environments/services';

export default function App() {

  const [data, setData] = useState<any>("")

  const fetchData = async () => {

    const _session_account = await getAccount()

    setData(_session_account)

  }

  useEffect(() => {

    fetchData()

  }, [])

  return (
    <ChakraProvider >
      <AppRoutes type_account={data} />
    </ChakraProvider>
  )
}