import Header from './header';
import { ReactNode } from 'react';

interface MyProps {
   children?: ReactNode;
}
function Layout({ children }:MyProps) {
    return (
        <div className="mainBanner">
            <div className="layer flex min-h-screen flex-col items-center min-w-full bg-gray-100 text-gray-50">
                <Header />
                {children}
            </div>
        </div>
    );
}
export default Layout;