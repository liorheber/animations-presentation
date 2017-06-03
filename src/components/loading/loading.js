import React, {PureComponent} from 'react';

import styles from './loading.scss';

export default class Loading extends PureComponent {

	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.outerCircle}/>
				<div className={styles.innerCircle}/>
				<span className={styles.text}>Loading...</span>
			</div>
		)
	}
}