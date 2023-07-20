import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import axios from "axios";
import MyLeaveSummary from "../pages/MyLeaveSummary";
import NoUserPg from "../pages/NoUserPg";

const UserRole = () => {
  const [cookies] = useCookies(['user']);
  const [quotes, setquote] = useState([]);
  const [summery, setSummery] = useState([]);

  const uemail = cookies.user.email;
  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUser}/auth?em=`+uemail)
    .then(res => {
      setquote(res.data.data);
      console.log(res.data.data);
      setSummery(<MyLeaveSummary 
              email={quotes.emp_email}
              name={quotes.emp_name}
              permission={quotes.emp_permission}
              role={quotes.emp_role}
              id={quotes.emp_taxid}
              systatus={quotes.sys_status}
            />)
    })
    .catch(err => {
      console.log(err);
    }) 
  }, [])

  if(quotes) {
    const cookie = new Cookies();
    cookie.set('name', quotes.emp_name, {path: '/'});
    cookie.set('email', quotes.emp_email, {path: '/'});
    cookie.set('permission', quotes.emp_permission, {path: '/'});
    cookie.set('role', quotes.emp_role, {path: '/'});
    cookie.set('id', quotes.emp_taxid, {path: '/'});
    cookie.set('systemState', quotes.sys_status, {path: '/'});
  }

  return(

    <>
      {quotes && quotes ?
        (
          <div id="mysummery">
             {summery}
          </div>
      ) : 
      <NoUserPg />
      }
    </>
  );
}

export default UserRole;