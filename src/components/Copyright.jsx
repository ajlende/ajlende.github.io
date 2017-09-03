import React from "react"
import {Footer, Container, Content} from "bloomer"

const Copyright = () => (
  <Footer>
    <Container>
      <Content isSize="small">
        <p>© Copyright 2017 Alex Lende</p>
        <p>
          Source code licensed under{" "}
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
        </p>
        <p>Website content all rights reserved.</p>
      </Content>
    </Container>
  </Footer>
)

export default Copyright
