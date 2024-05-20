import Button from '../../components/atoms/Button';

export default {
	title: 'Atoms/Buttons',
	component: <Button></Button>,
}

const Template = (args) => <Button {...args} />;

export const Primary = () => Template.bind({});
Primary.args = {
	type: 'primary',
	text: 'Primary Button',
	linkType: 'normal',
	url: '#',
	width: 'auto'
}
