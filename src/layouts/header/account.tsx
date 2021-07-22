import React, { FC } from 'react'
import IconFont from '@/components/Common/iconFont'
import styles from './account.less'
import BarCard from './barCard'

export interface AccountProps {
  subnick: string
}
const Account: FC<AccountProps> = props => {
  const { subnick } = props

  return (
    <BarCard content={<span>{subnick}</span>}>
      <div className={styles.account}>
        <IconFont type="icon-user" className={styles.user_icon} />
        <span className={styles.user_subnick}>{subnick}</span>
        <IconFont type="icon-down" className={styles.down_icon} />
      </div>
    </BarCard>
  )
}

export default Account
