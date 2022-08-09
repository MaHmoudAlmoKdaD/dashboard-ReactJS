import './new.scss'
import Navbar from './../../components/navbar/Navbar'
import Sidebar from './../../components/sidebar/Sidebar'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useState } from 'react';
const New = ({
  inputs, title
}) => {
  const [file, setFile] = useState("")
  return (
    
    
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://tse1.mm.bing.net/th?id=OIP.vDf037OKUo0H03weRxdWuAHaHa&pid=Api&P=0"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image
                  <CreateNewFolderIcon className='icon' />
                </label>
                {file && console.log(URL.createObjectURL(file))}
                <input
                  type="file"
                  id='file'
                  style={{ display: 'none' }}
                  onChange={
                    (e) => {
                      setFile(e.target.files[0])
                    }
                  }
                />
              </div>
              {
                inputs.map(input => (
                  <div className="formInput" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))
              }

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New