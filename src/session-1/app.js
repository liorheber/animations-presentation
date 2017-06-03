import React, {PureComponent} from 'react';

import MenuBar from '../components/menu/menu';
import Table from '../components/table/table';
import SideBar from '../components/sidebar/sidebar';

import styles from './app.scss';

export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.finishLoading = this.finishLoading.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.closeSidebar = this.closeSidebar.bind(this);
		this.state = {loading: true, sidebar: false};
		setTimeout(this.finishLoading, 5000);
	}

	finishLoading() {
		this.setState({loading: false})
	}

	toggleSidebar() {
		const {sidebar} = this.state;
		this.setState({sidebar: !sidebar});
	}

	closeSidebar() {
		this.setState({sidebar: false});
	}

	render() {
		const {loading, sidebar} = this.state;
		const {isLive, slide, refresh} = this.props;
		const Loader = this.props.loader;

		return (
			<div>
				<MenuBar isLive={ isLive } toggleSidebar={ this.toggleSidebar } sidebar={sidebar}/>
				{ !loading ? <Table isLive={ isLive } slide={slide} hasRefresh={refresh}/> : Loader ? <Loader/> : <span/>}
				<SideBar closeSidebar={this.closeSidebar} sidebar={sidebar} slide={slide}/>
			</div>
		)
	}
}