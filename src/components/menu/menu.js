import React, {PureComponent} from 'react';
import classnames from 'classnames';
import ClickOutside from 'react-click-outside';

import styles from './menu.scss';
import animations from '../../common/animations.scss';

export default class Menu extends PureComponent {

	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.state = {menuOpen: false};
	}

	toggleMenu() {
		const {menuOpen} = this.state;
		this.setState({menuOpen: !menuOpen});
	}

	closeMenu() {
		this.setState({menuOpen: false});
	}

	render() {
		const {isLive, toggleSidebar, sidebar} = this.props;
		const {menuOpen} = this.state;
		return (
			<div className={styles.menu}>
				<h1>Animations 101</h1>
				<ul className={styles.actions}>
					<li className={styles.actions_items}>
						<span className={classnames(styles.notification, {
							[animations['icon-menu-live']]: isLive,
							[styles['icon-selected']]: (menuOpen && isLive)
						})}
							  onClick={this.toggleMenu}/>
						<ClickOutside onClickOutside={this.closeMenu}>
							<ul className={classnames(styles.dropdown, {[styles.openMenu]: menuOpen})}>
								<li><a href="#">Process complete</a></li>
								<li><a href="#">File done</a></li>
								<li><a href="#">New Email</a></li>
							</ul>
						</ClickOutside>
					</li>
					<li className={styles.actions_items}>
						<span className={classnames(styles.user, {[animations['icon-menu-live']]: isLive})}/>
					</li>
					<li className={styles.actions_items}>
						<span className={classnames(styles.bar, {
							[animations['icon-menu-live']]: isLive,
							[styles['icon-selected']]: (sidebar && isLive)})}
							  onClick={ toggleSidebar }/>
					</li>
				</ul>
			</div>
		)
	}
}