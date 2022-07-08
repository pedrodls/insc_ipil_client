import { ChakraProvider } from '@chakra-ui/react'
import Routes from './Routes';

export default function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  )
}