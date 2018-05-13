import React from "react"
import { Footer, Container, Content } from "bloomer"

const Copyright = () => (
  <Footer>
    <Container>
      <Content isSize="small">
        <p>Contents of this site are © Copyright 2018 Alex Lende. All rights reserved.</p>
        <p>
          <a href="https://github.com/ajlende/ajlende.github.io/tree/develop">Source code</a> is{" "}
          available under the{" "}
          <a href="http://opensource.org/licenses/mit-license.php">MIT license</a>.
        </p>
      </Content>
    </Container>
  </Footer>
)

export default Copyright
