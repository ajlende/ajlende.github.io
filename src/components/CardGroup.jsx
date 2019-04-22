import React from "react"
import { Tile, Box } from "bloomer"

import styles from "./CardGroup.module.sass"

export const CardGroup = ({ rowSize, children }) => {
  const groupByRow = (acc, child, index, arr) => {
    if (index % rowSize) return acc
    return [...acc, arr.slice(index, index + rowSize)]
  }

  const toRows = row => <Tile key={row.reduce((a, e) => a + e.key, "")}>{row}</Tile>

  const rows = React.Children.toArray(children)
    .reduce(groupByRow, [])
    .map(toRows)

  return (
    <Tile isAncestor isVertical>
      {rows}
    </Tile>
  )
}

CardGroup.defaultProps = {
  rowSize: 2,
}

export const Card = ({ children }) => (
  <Tile isParent isSize={6}>
    <Tile isChild render={() => <Box className={styles.box}>{children}</Box>} />
  </Tile>
)
