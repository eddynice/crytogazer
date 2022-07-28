import React from 'react'

import { Container } from "@chakra-ui/react"
import {Layout, Banner, DataTables} from "../components";

const Home = () => {
  return (
    <Layout>
      <Container maxW='container.xl'>
        <Banner/>
        <DataTables/>
      </Container>
    </Layout>
  )
}

export default Home