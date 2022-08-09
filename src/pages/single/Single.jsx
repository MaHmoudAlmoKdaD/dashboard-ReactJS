import './single.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import ListTable from '../../components/table/ListTable';
const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.7VThHu2VS76jFvN5_5gnlgHaEW&pid=Api&P=0"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <div className="itemTitle">John Joe</div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">johnjoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 123 5231 2135</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Programmers Street </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title={"User Spending - (Last 6 months)"}
            />
          </div>
        </div>
        <div className="bottom">
            <h1 className="title">Last Transactions</h1>
          <ListTable />
        </div>
      </div>
    </div>
  )
}

export default Single