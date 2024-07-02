import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChanel.css';

function DescribeChanel() {
  return (
    <div className="container3_chanel">
        <div className="chanel_logo_chanel">
            <b>
                c
            </b>
        </div>
        <div className='description_chanel'> 
            <b>
                channel name
            </b>
            <p>
                description
            </p>
        </div>
        <p className="editbtn_chanel">
            <FaEdit/>
            <b >Edit Channel </b>
        </p>
        <p className="uploadbtn_chanel">
            <FaUpload/>
            <b >Upload Video</b>
        </p>
    </div>
    
  )
}

export default DescribeChanel