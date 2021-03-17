import Header from './Header';

const Layout = ({ children }) => {
    return(
	    <>
		<Header />    
		{children}
		<p></p>
	    </>
    );
};

export default Layout;
