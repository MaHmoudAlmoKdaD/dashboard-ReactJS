import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';

const Widget = ({ type }) => {
    let data = {
        // title: "USERS",
        // isMoney: false,
        // link: 'see all users',
        // icon: <PersonOutlineOutlinedIcon className='icon' />
    }

    // for the desgin temprerary
    const amount = 100
    const diff = 20
    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: 'see all users',
                icon: <PersonOutlineOutlinedIcon
                    className='icon'
                    style={
                        {
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }
                    }
                />
            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: 'see all orders',
                icon: <ShoppingCartOutlinedIcon
                    className='icon'
                    style={
                        {
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32, 0.2)'
                        }
                    }
                />
            }
            break;
        case 'restaurant':
            data = {
                title: "RESTAURANTS",
                isMoney: true,
                link: 'see all restaurants',
                icon: <AccountBalanceWalletOutlinedIcon
                    className='icon'
                    style={
                        {
                            color: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2)'
                        }
                    }
                />
            }
            break;
        case 'driver':
            data = {
                title: "DRIVERS",
                isMoney: true,
                link: 'see all drivers',
                icon: <TimeToLeaveOutlinedIcon
                    className='icon'
                    style={
                        {
                            color: 'green',
                            backgroundColor: 'rgba(0,128, 0, 0.2)'
                        }
                    }
                />
            }
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className='left' >
                <span className="title">
                    {data.title}
                </span>
                {
                    type === 'order' ? (
                        <div className="infos"> {/**in the toturial it is called counter, in the widget.scss there is class called counter */}
                            <div className="info">Total: 100</div>
                            <div className="info">Delivered: 100</div>
                            <div className="info">Canceled: 100</div>
                        </div>
                    ) : (
                        <div className="infos">
                            <div className="info">Total: 100</div>
                            <div className="info">last 7 days: 100</div>
                        </div>
                    )
                }
                <span className="link">
                    {data.link}
                </span>
            </div >
            <div className="right">
                <div className="percentage positive"> {/** it will change the negative, positive dynamically */}
                    <KeyboardArrowUpOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div >
    )
}

export default Widget