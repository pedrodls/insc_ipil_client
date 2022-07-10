import { ChakraProvider } from '@chakra-ui/react'
import Routes from './AppRoutes';

export default function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  )
}