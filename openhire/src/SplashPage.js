import React from 'react';
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import SearchBar from './SearchBar';

class SplashPage extends React.Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			type: ''
		};
	}

	async componentDidMount() {
		const { drizzle, drizzleState } = this.props;
		let user = await drizzle.contracts.OpenHire.methods.getUserData(drizzleState.accounts[0]).call();
		//if address is not a user, check if it's an organization
		if (!user[0]) {
			user = await drizzle.contracts.OpenHire.methods.getOrganization(drizzleState.accounts[0]).call();
			if (user[0]) {
				this.setState({
					loggedIn: true,
					type: 'org'
				});
			}
		} else {
			this.setState({
				loggedIn: true,
				type: 'user'
			});
		}
	}

	render() {
		const { drizzle, drizzleState, props } = this.props;
		const { loggedIn, type } = this.state;
		return (
			<div>
				<Segment placeholder>
					<Grid columns={2} stackable textAlign="center">
						<Divider vertical>Or</Divider>

						<Grid.Row verticalAlign="middle">
							<Grid.Column>
								<Header icon style={{ margin: 0 }}>
									<Icon name="search" />
									Find Profile
								</Header>
								<SearchBar
									drizzle={drizzle}
									drizzleState={drizzleState}
									placeholder={'Search profiles...'}
								/>
							</Grid.Column>
							{loggedIn ? (
								<Grid.Column>
									<Header icon style={{ margin: 0 }}>
										<div style={{ display: 'flex' }}>
											<Icon name="user" />
											<Icon name="building" />
										</div>
										<Header.Content>Visit Profile</Header.Content>
									</Header>

									<Button
										primary
										onClick={() => {
											type === 'user'
												? props.history.push(`/user/${drizzleState.accounts[0]}`)
												: props.history.push(`/organization/${drizzleState.accounts[0]}`);
										}}
									>
										Profile
									</Button>
								</Grid.Column>
							) : (
								<Grid.Column>
									<Header icon style={{ margin: 0 }}>
										<div style={{ display: 'flex' }}>
											<Icon name="user" />
											<Icon name="building" />
										</div>
										<Header.Content>Create New Profile</Header.Content>
									</Header>

									<Button
										primary
										onClick={() => {
											props.history.push('/signup');
										}}
									>
										Sign Up
									</Button>
								</Grid.Column>
							)}
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		);
	}
}

export default withRouter(SplashPage);
