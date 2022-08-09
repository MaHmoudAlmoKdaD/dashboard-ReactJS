import ListTable from '../../components/table/ListTable'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='driver' />
          <Widget type='restaurant' />
        </div>
        <div className="charts">
          <Featured />
          <Chart
            aspect={2 / 1}
            title={"Last 7 days (Complaints)"}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <ListTable />
        </div>
      </div>
    </div>
  )
}

export default Home