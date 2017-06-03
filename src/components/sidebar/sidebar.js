import React, {PureComponent} from 'react';
import classnames from 'classnames';
import ClickOutside from 'react-click-outside';

import styles from './sidebar.scss';
import animations from '../../common/animations.scss';

export default class SideBar extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const {closeSidebar, slide, sidebar} = this.props;
		const className = sidebar ? styles['sidebar-open'] : styles['sidebar-closed'];
		return (
			<ClickOutside onClickOutside={closeSidebar} className={classnames(className, {[animations['sidebar-active']]: slide})}>
				HI
			</ClickOutside>
		)
	}
}