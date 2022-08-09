import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className='title'>Total revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                        value={70}
                        text={'70%'}
                        strokeWidth={5}
                    />
                </div>
                <p className="title">Totale sales made today</p>
                <p className="amount">420 Rial</p>
                <p className="desc">
                    previous transactions proccessing. Last payments my not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize='small'/>
                            <div className="resultAmount">Rial 12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">Rial 12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">Rial 12.4K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured