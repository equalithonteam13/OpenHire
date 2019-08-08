import React, { Component } from 'react';
import { toast, Flip } from 'react-toastify';

import { Button, Form, Icon, Menu, Label, Modal, Header } from 'semantic-ui-react';

export default class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAddress: '',
			pageAddress: props.pageAddress,
			ownPage: false,
			displaySkillForm: false,
			skillsArray: [],
			skillsCount: 0,
			loading: false,
			skill: ''
		};
	}

	componentDidMount = () => {
		this.updatePage();
	};

	componentDidUpdate = (prevProps) => {
		if (this.props.pageAddress !== prevProps.pageAddress) {
			this.setState(
				{
					pageAddress: this.props.pageAddress,
					displaySkillForm: false,
					skill: ''
				},
				() => {
					this.updatePage();
				}
			);
		}
	};

	updatePage = async () => {
		const userAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];

		let ownPage = false;

		//props.pageAddress is passing in as all lowercase
		if (userAddress === this.props.pageAddress) {
			ownPage = true;
		}

		this.setState({ userAddress, ownPage });
		this.getSkillCount();
	};

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addSkill = async (event) => {
		event.preventDefault();
		this.setState({ loading: true });

		toast.info('Processing sign up...', {
			position: 'top-right',
			autoClose: 10000,
			transition: Flip
		});
		try {
			await this.props.drizzle.contracts.OpenHire.methods
				.addSkill(this.state.skill)
				.send({ from: this.state.userAddress });

			this.setState({ errorMessage: '' });
		} catch (error) {
			toast.dismiss();
			this.setState({ errorMessage: error.message });
		}
		this.setState({ loading: false, skill: '' });
	};

	getSkillCount = async () => {
		const skillsCount = await this.props.drizzle.contracts.OpenHire.methods
			.getSkillListLength(this.state.pageAddress)
			.call();
		this.props.drizzle.contracts.OpenHire.methods.getSkillListLength.cacheCall(this.state.pageAddress);
		this.setState({ skillsCount });
	};

	updateSkillCount = () => {
		const { drizzleState } = this.props;
		const keys = Object.keys(drizzleState.contracts.OpenHire.getSkillListLength);
		let identifier;

		if (keys.length) {
			for (let i = 0; i < keys.length; i++) {
				if (drizzleState.contracts.OpenHire.getSkillListLength[keys[i]].args[0] === this.state.pageAddress) {
					identifier = keys[i];
					break;
				}
			}
		}

		if (identifier) {
			let sll = drizzleState.contracts.OpenHire.getSkillListLength[identifier];
			return sll.value;
		} else {
			return 0;
		}
	};

	fetchSkillData = async (skillsCount) => {
		if (+skillsCount !== this.state.skillsArray.length) {
			const skillsArray = [];

			for (let i = 0; i < skillsCount; i++) {
				let skillData = await this.props.drizzle.contracts.OpenHire.methods
					.getUserSkillData(this.state.pageAddress, i)
					.call();
				skillsArray.push(skillData);
			}
			this.setState({ skillsArray });
		}
	};

	endorseSkill = async (endorseeAddress, index) => {
		await this.props.drizzle.contracts.OpenHire.methods
			.endorseSkill(endorseeAddress, index)
			.send({ from: this.state.userAddress });
	};

	render() {
		const { displaySkillForm, skillsArray, ownPage } = this.state;
		const skillsCount = this.updateSkillCount();
		this.fetchSkillData(skillsCount);

		// console.log(this.state);

		return (
			<div className="resume-section">
				<h2>
					Skills{' '}
					{ownPage ? (
						<Icon link name="plus" onClick={() => this.setState({ displaySkillForm: !displaySkillForm })} />
					) : (
						''
					)}
				</h2>

				{displaySkillForm ? (
					<Form onSubmit={this.addSkill}>
						<Form.Input
							required
							label="Skill Name"
							width={6}
							key="skill"
							name="skill"
							value={this.state.skill}
							placeholder="Skill"
							onChange={this.handleInputChange}
						/>
						<Button type="submit" disabled={this.state.loading} loading={this.state.loading}>
							Submit
						</Button>
					</Form>
				) : (
					''
				)}

				<Menu compact>
					{skillsArray.map((skill, index) => {
						return (
							<Menu.Item key={index}>
								<p>{skill[0]}</p>

								<Modal
									trigger={
										<Label as="a" circular className="modal-trigger">
											{skill[1].length}
										</Label>
									}
									closeIcon
								>
									<Header
										content={
											<div>
												{skill[0]} ({skill[1].length})
											</div>
										}
									/>
									<Modal.Content>
										<div>Endorsers</div>
										{skill[1].map((address, index) => {
											return <div key={index}>{address}</div>;
										})}
									</Modal.Content>
									<Modal.Actions>
										{skill[1].includes(this.state.userAddress) ? (
											<Button disabled={true}>
												<Icon name="check" /> Endorsed
											</Button>
										) : (
											<Button onClick={() => this.endorseSkill(this.state.userAddress, index)}>
												Endorse
											</Button>
										)}
									</Modal.Actions>
								</Modal>
							</Menu.Item>
						);
					})}
				</Menu>

				<Modal />
			</div>
		);
	}
}
