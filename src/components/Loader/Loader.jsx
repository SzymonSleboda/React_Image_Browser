import React from 'react'
import { RotatingTriangles}  from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (<div className={s.loader}>
    <RotatingTriangles
    visible={true}
    height="80"
    width="80"
    ariaLabel="rotating-triangels-loading"
    wrapperStyle={{}}
    wrapperClass="rotating-triangels-wrapper"
  /></div>
  )
}

export default Loader;