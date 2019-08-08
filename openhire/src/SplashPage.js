import React from 'react';
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import SearchBar from './SearchBar';

const SplashPage = (props) => {
	return (
		<div>
			<Segment placeholder>
				<Grid columns={2} stackable textAlign="center">
					<Divider vertical>Or</Divider>

					<Grid.Row verticalAlign="middle">
						<Grid.Column>
							<Header icon>
								<Icon name="search" />
								Find Profile
							</Header>
							<SearchBar
								drizzle={props.drizzle}
								drizzleState={props.drizzleState}
								placeholder={'Search profiles...'}
							/>
						</Grid.Column>

						<Grid.Column>
							<Header icon>
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
					</Grid.Row>
				</Grid>
			</Segment>
		</div>
	);
};

export default withRouter(SplashPage);
