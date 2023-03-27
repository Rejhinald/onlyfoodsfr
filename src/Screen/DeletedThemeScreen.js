import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {Link, useParams} from 'react-router-dom';

function DeletedThemeScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  let navigate = useNavigate()
  const { userInfo } = userLogin;
  if (!userInfo) {
    navigate('/login');
  } else {
    if (!userInfo.isAdmin) {
      navigate('/')
    }
  }
  return (
    <div>
      <div className='text-center'>
        <br/>
          <h2>THE THEME HAS BEEN DELETED</h2>
        <br/>

      <div class="container">
        <div class="row" >
            <div>
            <img src="../images/me.png" />
            <br/>
            <br/>
            <div class="row justify-content-centerd-grid gap-3">
            <Link to='/' className='btn btn-primary'>Back to Home</Link>
            <Link to='/addproduct' className='btn btn-primary'>Add Theme</Link>
            </div>
            </div>
        </div>
      </div>
    </div>
      <br/>
  </div>
  )
}

export default DeletedThemeScreen