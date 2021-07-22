import React, { FC, ReactNode, CSSProperties } from 'react'
import { Popover } from '@xiaoduo/xdui'
import C from 'classnames'
import { TooltipPlacement } from 'antd/es/tooltip'
import styles from './index.less'

export interface BarCardProps {
  children: ReactNode
  content: ReactNode
  className?: string
  style?: CSSProperties
  placement?: TooltipPlacement
}

const BarCard: FC<BarCardProps> = props => {
  const { children, content, placement = 'bottomRight', className = '', style } = props
  return (
    <Popover
      trigger="click"
      placement={placement}
      content={content}
      overlayClassName={C(className, styles.bar_card)}
      style={style}
    >
      {children}
    </Popover>
  )
}

export default BarCard
