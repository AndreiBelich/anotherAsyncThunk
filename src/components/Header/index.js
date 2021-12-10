import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, updateUser } from '../../reducers/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { isFetching, data } = useSelector(state => state.user)
  //const {name, avatar} = data;
  console.log("Header data: ", data);
  console.log("isFetching = ", isFetching);
  useEffect(() => {
    console.log("use effect");
    if (!data) {
      dispatch(getUser(1))
    }
  }, [data, dispatch])

  const updateName = () => {
    dispatch(updateUser({id: 1, name: "Vladimir"}))
  }
  return (
    <>
    {
       !isFetching && (
        <header>
          <button  onClick={updateName}>Update name user</button>
          <div>LOGO</div>
          <div>
            <span>Hello,{data?.name}</span>
            <div>
              <img src={data?.avatar} alt="avatar"/>
            </div>
          </div>
        </header>
      )
    }
    </>
  )
}

export default Header
