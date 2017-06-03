import React, {PureComponent} from 'react';
import classnames from 'classnames';

import styles from './table.scss';
import animations from '../../common/animations.scss';

export default class Table extends PureComponent {
	constructor(props) {
		super(props);
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.generateRows = this.generateRows.bind(this);
		this.refresh = this.refresh.bind(this);
		this.state = {count: 10, refresh: false};
	}

	add() {
		const count = this.state.count;
		this.setState({count: count + 1})
	}

	remove() {
		if (this.state.count > 0) {
			const count = this.state.count;
			this.setState({count: count - 1});
		}
	}

	refresh() {
		this.setState({refresh: true});
		setTimeout(() => this.setState({refresh: false}), 4000);
	}

	generateRows() {
		const {count} = this.state;
		const {slide} = this.props;
		const array = [];
		for (let i = 0; i < count; i++) {
			array.push({value: `Value ${i}`});
		}
		return array.map(({value}) => (
			<div key={value} className={classnames(styles.row, {[animations['row-live']]: slide})}>
				<div className={styles.col}>Value 1</div>
				<div className={styles.col}>Value 1</div>
				<div className={styles.col}>Value 3</div>
				<div className={styles.col}>Value 4</div>
				<div className={styles.col}>Value 5</div>
				<div className={styles.col}>Value 6</div>
			</div>
		));

	}

	render() {
		const {isLive, hasRefresh} = this.props;
		const {refresh} = this.state;
		return (
			<div className={styles.table}>
				<div className={styles.row}>
					<div className={styles.menu}>
						<span className={classnames(styles.add, {[animations['icon-menu-live']]: isLive})} onClick={ this.add }/>
						<span className={classnames(styles.remove, {[animations['icon-menu-live']]: isLive})} onClick={ this.remove }/>
						<span className={classnames(styles.settings, {[animations['icon-menu-live']]: isLive})}/>
						<span className={classnames(styles.refresh, {
							[animations['icon-menu-live']]: isLive,
							[animations['refresh']]: hasRefresh && refresh})}
							  onClick={ this.refresh }/>
					</div>
				</div>
				{this.generateRows()}
			</div>
		)
	}
}