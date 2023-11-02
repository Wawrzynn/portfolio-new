import AppHeader from '../global/AppHeader';
import AppFooter from '../global/AppFooter';
import MetaHeaders from '../global/MetaHeaders';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<MetaHeaders />
			<AppHeader />
			<div>{children}</div>
			{/* <AppFooter /> */}
		</>
	);
};

export default DefaultLayout;