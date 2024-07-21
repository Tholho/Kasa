import React from 'react'
import { Link, Outlet, useRouteError } from 'react-router-dom';
import styles from "./Layout.module.scss"
import ErrorPage from './ErrorPage';

function Layout() {
    const error = useRouteError();

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <svg width="211" height="68" viewBox="0 0 211 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5745 34.6485L9.34014 46.1362V62.2561H0.5V0H9.34014V34.8338L42.859 0H52.9883L26.6521 27.9782L54.83 62.2561H44.5165L20.5745 34.6485Z" fill="#FF6060" />
                    <path d="M119.289 57.2534L122.789 50.5831C126.84 53.3624 133.102 55.4005 139.18 55.4005C147.099 55.4005 150.23 52.9918 150.23 48.9155C150.23 38.3542 120.578 47.4332 120.578 28.7193C120.578 20.1962 128.129 14.6376 140.1 14.6376C146.178 14.6376 153.176 16.3051 157.228 18.8992L153.545 25.5695C149.309 22.7902 144.705 21.8637 140.1 21.8637C132.734 21.8637 129.05 24.643 129.05 28.3487C129.05 39.4659 158.702 30.3869 158.702 48.7302C158.702 57.2534 150.966 62.6267 138.443 62.6267C130.892 62.812 123.157 60.4032 119.289 57.2534Z" fill="#FF6060" />
                    <path d="M210.822 33.7221V62.2561H202.718V55.9564C199.956 60.218 194.615 62.6267 187.248 62.6267C176.566 62.6267 169.936 56.8828 169.936 48.7303C169.936 41.1335 174.724 35.0191 188.721 35.0191H202.166V33.3515C202.166 26.1254 197.93 22.0491 189.642 22.0491C184.117 22.0491 178.408 24.0872 174.724 27.0518L171.225 20.5668C176.014 16.6758 183.012 14.4523 190.563 14.4523C203.639 14.6376 210.822 20.9373 210.822 33.7221ZM202.35 47.8038V41.1335H189.274C180.802 41.1335 178.408 44.4687 178.408 48.3597C178.408 52.9918 182.275 55.9564 188.721 55.9564C195.167 56.1417 200.324 53.3624 202.35 47.8038Z" fill="#FF6060" />
                    <path d="M92.0322 49.8419V62.4414L97.3731 59.2915V46.6921L92.0322 49.8419Z" fill="#FF6060" />
                    <path d="M106.766 34.4632L84.8496 21.6784L72.6944 14.6376L60.7234 35.5749L60.9076 55.2152L82.6396 68L84.8496 66.703V48.1744L94.6106 30.9428L104.556 36.6866V55.2152L106.766 53.9182V34.4632Z" fill="#FF6060" />
                </svg>

                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">A propos</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {error ?
                    (<ErrorPage error={error} />)
                    : (
                        <Outlet />
                    )}
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerGroup}>
                    <svg width="122" height="40" viewBox="0 0 122 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6445 20.0984L5.12785 26.762V36.1125H0V0H5.12785V20.2058L24.5709 0H30.4466L15.1699 16.2292L31.5149 36.1125H25.5324L11.6445 20.0984Z" fill="white" />
                        <path d="M68.9054 33.2107L70.9352 29.3415C73.2855 30.9536 76.9177 32.1359 80.4431 32.1359C85.0368 32.1359 86.8529 30.7387 86.8529 28.3742C86.8529 22.2479 69.6532 27.5144 69.6532 16.6591C69.6532 11.7151 74.0333 8.49078 80.9772 8.49078C84.5026 8.49078 88.5622 9.45808 90.9124 10.9628L88.7758 14.832C86.3187 13.2198 83.648 12.6824 80.9772 12.6824C76.704 12.6824 74.5674 14.2946 74.5674 16.4441C74.5674 22.8928 91.7671 17.6264 91.7671 28.2667C91.7671 33.2107 87.2802 36.3275 80.0158 36.3275C75.6357 36.435 71.1489 35.0378 68.9054 33.2107Z" fill="white" />
                        <path d="M122 19.5609V36.1125H117.299V32.4582C115.697 34.9302 112.599 36.3274 108.326 36.3274C102.13 36.3274 98.2837 32.9956 98.2837 28.2666C98.2837 23.86 101.061 20.3132 109.18 20.3132H116.979V19.3459C116.979 15.1543 114.522 12.7898 109.715 12.7898C106.51 12.7898 103.198 13.972 101.061 15.6917L99.0315 11.9299C101.809 9.67291 105.869 8.38318 110.249 8.38318C117.834 8.49066 122 12.1449 122 19.5609ZM117.086 27.7292V23.86H109.501C104.587 23.86 103.198 25.7946 103.198 28.0516C103.198 30.7386 105.441 32.4582 109.18 32.4582C112.919 32.5657 115.911 30.9535 117.086 27.7292Z" fill="white" />
                        <path d="M53.0946 28.9118V36.2203L56.1927 34.3931V27.0847L53.0946 28.9118Z" fill="white" />
                        <path d="M61.641 19.9909L48.9282 12.5749L41.8774 8.49078L34.9335 20.6358L35.0403 32.0284L47.6462 39.4444L48.9282 38.6921V27.9443L54.5902 17.9488L60.359 21.2806V32.0284L61.641 31.2761V19.9909Z" fill="white" />
                    </svg>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;