import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"

const fontAwesomeIconPropTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  fixedWidth: PropTypes.bool,
  inverse: PropTypes.bool,
  flip: PropTypes.oneOf(["horizontal", "vertical", "both"]),
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  listItem: PropTypes.bool,
  pull: PropTypes.oneOf(["right", "left"]),
  pulse: PropTypes.bool,
  rotation: PropTypes.oneOf([90, 180, 270]),
  size: PropTypes.oneOf([
    "lg",
    "xs",
    "sm",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: PropTypes.bool,
  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

const fontAwesomeIconDefaultProps = {
  border: false,
  className: "",
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: "",
  transform: null,
}

const propTypes = {
  isAlign: PropTypes.oneOf(["left", "right"]),
  isSize: PropTypes.oneOf(["large", "medium", "small"]),
  faProps: PropTypes.shape(fontAwesomeIconPropTypes),
}

const defaultProps = {
  isAlign: null,
  isSize: null,
  faProps: fontAwesomeIconDefaultProps,
}

const Icon = ({ isAlign, isSize, faProps, ...htmlProps }) => {
  const className = classNames({
    icon: true,
    [`is-${isAlign}`]: !!isAlign,
    [`is-${isSize}`]: !!isSize,
  })

  return (
    <span {...htmlProps} className={className}>
      <FontAwesomeIcon {...faProps} />
    </span>
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
