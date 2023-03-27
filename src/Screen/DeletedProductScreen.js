import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { deleteTheme, listThemeDetails, listThemes, getTheme } from '../Actions/themeActions';
import {Link, useParams} from 'react-router-dom';

function DeletedProductScreen() {
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
          <h1>THE THEME HAS BEEN DELETED</h1>
        <br/>

      <div class="container">
        <div class="row" >
            <div>
            <img src="../images/me.png" />
            <br/>
            <br/>
            <div class="row justify-content-centerd-grid gap-3">
            <Link to='/menulist' className='btn btn-primary' >Back to Movie List</Link>
            <Link to='/' className='btn btn-primary'>Back to Home</Link>
            <Link to='/addproduct' className='btn btn-primary'>Add Movie</Link>
            </div>
            </div>
        </div>
      </div>
    </div>
      <br/>
  </div>
  )
}

export default DeletedProductScreen