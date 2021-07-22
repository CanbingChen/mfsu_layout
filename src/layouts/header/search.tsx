import React from 'react'
import {withRouter,router} from 'umi'
import styles from './search.less'

const SearchBar: React.FC<{ location: Location }> = ({ location }) => {
  const handleToGlobalSearch = () => {
    if (location.pathname !== '/faq/search') {
      router.push({ pathname: '/faq/search' })
    }
  }

  return (
    <div className={styles.wrapper} onClick={handleToGlobalSearch}>
      <div className={styles.placeholder}>搜索商品、问题、答案</div>
    </div>
  )
}

export default withRouter(SearchBar)
